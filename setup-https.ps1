$ErrorActionPreference = 'Stop'

$repoRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$certificateDirectory = Join-Path $env:LOCALAPPDATA 'EstudaEmCasa'
$publicCertificateDirectory = Join-Path $repoRoot 'certificados'
$rootPath = Join-Path $certificateDirectory 'estuda-em-casa-ca.cer'
$rootThumbprintPath = Join-Path $certificateDirectory 'ca-thumbprint.txt'
$thumbprintPath = Join-Path $certificateDirectory 'server-thumbprint.txt'

New-Item -ItemType Directory -Path $certificateDirectory -Force | Out-Null
New-Item -ItemType Directory -Path $publicCertificateDirectory -Force | Out-Null

$networkRoute = Get-NetRoute -AddressFamily IPv4 -DestinationPrefix '0.0.0.0/0' |
  Sort-Object RouteMetric |
  Select-Object -First 1
$address = Get-NetIPAddress -AddressFamily IPv4 -InterfaceIndex $networkRoute.InterfaceIndex |
  Where-Object { $_.IPAddress -notlike '127.*' -and $_.IPAddress -notlike '169.254.*' } |
  Select-Object -First 1

if (-not $address) {
  throw 'Não encontrei um endereço IPv4 para a rede local.'
}

$ipAddress = [System.Net.IPAddress]::Parse($address.IPAddress)
$rootCertificate = Get-ChildItem Cert:\CurrentUser\My |
  Where-Object { $_.Subject -eq 'CN=Estuda em Casa Local CA' -and $_.HasPrivateKey } |
  Sort-Object NotAfter -Descending |
  Select-Object -First 1

if (-not $rootCertificate) {
  $rootCertificate = New-SelfSignedCertificate `
    -Type Custom `
    -Subject 'CN=Estuda em Casa Local CA' `
    -KeyAlgorithm RSA `
    -KeyLength 2048 `
    -KeyUsageProperty Sign `
    -KeyUsage CertSign, CRLSign, DigitalSignature `
    -KeyExportPolicy NonExportable `
    -HashAlgorithm SHA256 `
    -CertStoreLocation Cert:\CurrentUser\My `
    -NotAfter (Get-Date).AddYears(5) `
    -TextExtension @('2.5.29.19={critical}{text}ca=TRUE')
}

$existingServerThumbprint = if (Test-Path $thumbprintPath) {
  (Get-Content $thumbprintPath -Raw).Trim()
}
$previousRootThumbprint = if (Test-Path $rootThumbprintPath) {
  (Get-Content $rootThumbprintPath -Raw).Trim()
}
$rootChanged = -not $previousRootThumbprint -or $previousRootThumbprint -ne $rootCertificate.Thumbprint
$serverCertificate = if ($existingServerThumbprint) {
  Get-Item "Cert:\CurrentUser\My\$existingServerThumbprint" -ErrorAction SilentlyContinue
}
$hasMatchingIp = $false

if ($serverCertificate) {
  $sanExtension = $serverCertificate.Extensions |
    Where-Object { $_.Oid.Value -eq '2.5.29.17' } |
    Select-Object -First 1
  $hasMatchingIp = $sanExtension -and $sanExtension.Format($false).Contains($ipAddress.ToString())
}

if (-not $serverCertificate -or $rootChanged -or -not $hasMatchingIp -or $serverCertificate.NotAfter -lt (Get-Date).AddDays(7)) {
  $ipBytes = $ipAddress.GetAddressBytes()
  $sanBytes = [byte[]]@([byte]0x30, [byte]($ipBytes.Length + 2), [byte]0x87, [byte]$ipBytes.Length) + $ipBytes
  $sanExtension = New-Object System.Security.Cryptography.X509Certificates.X509Extension `
    -ArgumentList @('2.5.29.17', $sanBytes, $false)

  $serverCertificate = New-SelfSignedCertificate `
    -Type Custom `
    -Subject "CN=$ipAddress" `
    -Signer $rootCertificate `
    -KeyAlgorithm RSA `
    -KeyLength 2048 `
    -KeyUsageProperty Sign `
    -KeyUsage DigitalSignature, KeyEncipherment `
    -KeyExportPolicy NonExportable `
    -HashAlgorithm SHA256 `
    -CertStoreLocation Cert:\CurrentUser\My `
    -NotAfter (Get-Date).AddDays(180) `
    -TextExtension @('2.5.29.19={text}ca=FALSE', '2.5.29.37={text}1.3.6.1.5.5.7.3.1') `
    -Extension $sanExtension

  Set-Content -Path $thumbprintPath -Value $serverCertificate.Thumbprint -NoNewline
}

Set-Content -Path $rootThumbprintPath -Value $rootCertificate.Thumbprint -NoNewline
Export-Certificate -Cert $rootCertificate -FilePath $rootPath -Force | Out-Null
Copy-Item -Path $rootPath -Destination (Join-Path $publicCertificateDirectory 'estuda-em-casa-ca.cer') -Force

Write-Host ''
Write-Host 'Certificado local preparado.'
Write-Host "Endereço no Android: https://$($ipAddress):8443"
Write-Host "Certificado para instalar no Android: http://$($ipAddress):8000/certificados/estuda-em-casa-ca.cer"
Write-Host "Impressão digital SHA-1 para conferir: $($rootCertificate.Thumbprint)"
Write-Host 'Instale esse arquivo no Android como certificado de CA antes de abrir o endereço HTTPS.'
