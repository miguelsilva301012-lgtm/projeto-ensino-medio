$ErrorActionPreference = 'Stop'

$root = (Split-Path -Parent $MyInvocation.MyCommand.Path).TrimEnd('\') + '\'
$certificateDirectory = Join-Path $env:LOCALAPPDATA 'EstudaEmCasa'
$thumbprintPath = Join-Path $certificateDirectory 'server-thumbprint.txt'

if (-not (Test-Path $thumbprintPath)) {
  throw 'Certificado não configurado. Execute setup-https.ps1 primeiro.'
}

$thumbprint = (Get-Content $thumbprintPath -Raw).Trim()
$certificate = Get-Item "Cert:\CurrentUser\My\$thumbprint" -ErrorAction SilentlyContinue
if (-not $certificate -or -not $certificate.HasPrivateKey) {
  throw 'Não encontrei o certificado HTTPS ou sua chave privada neste usuário do Windows.'
}

$ipAddresses = Get-NetIPAddress -AddressFamily IPv4 |
  Where-Object { $_.IPAddress -notlike '127.*' -and $_.IPAddress -notlike '169.254.*' } |
  Select-Object -ExpandProperty IPAddress
$listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Any, 8443)
$contentTypes = @{
  '.cer' = 'application/pkix-cert'
  '.css' = 'text/css; charset=utf-8'
  '.html' = 'text/html; charset=utf-8'
  '.ico' = 'image/x-icon'
  '.jpeg' = 'image/jpeg'
  '.jpg' = 'image/jpeg'
  '.js' = 'text/javascript; charset=utf-8'
  '.png' = 'image/png'
  '.svg' = 'image/svg+xml'
  '.webp' = 'image/webp'
}
$securityHeaders = @(
  "Content-Security-Policy: default-src 'self'; base-uri 'self'; object-src 'none'; form-action 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'none'"
  'X-Content-Type-Options: nosniff'
  'X-Frame-Options: DENY'
  'Referrer-Policy: no-referrer'
  'Permissions-Policy: camera=(), microphone=(), geolocation=()'
)

try {
  $listener.Start()
  Write-Host "Site HTTPS disponível em:"
  foreach ($ip in $ipAddresses) {
    Write-Host "  https://${ip}:8443"
  }
  Write-Host 'Mantenha esta janela aberta enquanto usa o site.'
  Write-Host 'Pressione Ctrl+C para encerrar.'

  while ($true) {
    $client = $listener.AcceptTcpClient()
    $ssl = $null
    $reader = $null

    try {
      $ssl = [System.Net.Security.SslStream]::new($client.GetStream(), $false)
      $ssl.AuthenticateAsServer(
        $certificate,
        $false,
        [System.Security.Authentication.SslProtocols]::Tls12,
        $false
      )

      $reader = [System.IO.StreamReader]::new($ssl, [System.Text.Encoding]::ASCII, $false, 1024, $true)
      $requestLine = $reader.ReadLine()
      while ($reader.ReadLine() -ne '') { }

      $request = $requestLine -split ' '
      $method = if ($request.Count -ge 1) { $request[0] } else { '' }
      $status = '200 OK'
      $contentType = 'text/plain; charset=utf-8'
      $body = [byte[]]@()

      if ($request.Count -lt 2 -or $method -notin @('GET', 'HEAD')) {
        $status = '405 Method Not Allowed'
      } else {
        $relativePath = [Uri]::UnescapeDataString(($request[1] -split '\?')[0]).TrimStart('/').Replace('/', '\')
        if ([string]::IsNullOrWhiteSpace($relativePath)) {
          $relativePath = 'index.html'
        }

        $filePath = [System.IO.Path]::GetFullPath((Join-Path $root $relativePath))
        if (-not $filePath.StartsWith($root, [System.StringComparison]::OrdinalIgnoreCase)) {
          $status = '403 Forbidden'
        } elseif (Test-Path -LiteralPath $filePath -PathType Leaf) {
          $status = '200 OK'
          $extension = [System.IO.Path]::GetExtension($filePath).ToLowerInvariant()
          if ($contentTypes.ContainsKey($extension)) {
            $contentType = $contentTypes[$extension]
          } else {
            $contentType = 'application/octet-stream'
          }
          $body = [System.IO.File]::ReadAllBytes($filePath)
        } else {
          $status = '404 Not Found'
        }
      }

      $headerLines = @(
        "HTTP/1.1 $status"
        "Content-Type: $contentType"
        "Content-Length: $($body.Length)"
        'Connection: close'
      ) + $securityHeaders + @('', '')
      $headerBytes = [System.Text.Encoding]::ASCII.GetBytes(($headerLines -join "`r`n"))
      $ssl.Write($headerBytes, 0, $headerBytes.Length)
      if ($method -ne 'HEAD' -and $body.Length -gt 0) {
        $ssl.Write($body, 0, $body.Length)
      }
      $ssl.Flush()
    } catch {
      Write-Warning "Falha ao atender uma conexão: $($_.Exception.Message)"
    } finally {
      if ($reader) {
        $reader.Dispose()
      }
      if ($ssl) {
        $ssl.Dispose()
      }
      $client.Close()
    }
  }
} finally {
  $listener.Stop()
}
