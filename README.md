# Estuda em Casa

Site simples de apoio aos estudos do ensino médio. A página inicial apresenta as matérias e cada uma tem sua própria página:

- Matemática
- Português
- Ciências
- História
- Geografia
- Filosofia
- Sociologia
- Astronomia
- Programação em Python

## Como abrir no celular com HTTPS

1. Na primeira configuração, gere o certificado local:

   ```powershell
   powershell -ExecutionPolicy Bypass -File .\setup-https.ps1
   ```

2. No Android, baixe `certificados\estuda-em-casa-ca.cer` do computador por um meio que você controla, como um cabo USB. O endereço HTTP local mostrado pelo script também permite baixar o arquivo enquanto os dois aparelhos estão na sua rede Wi-Fi.
3. No Android, abra **Configurações > Segurança e privacidade > Mais configurações de segurança > Criptografia e credenciais > Instalar um certificado > Certificado de CA**. Os nomes dos menus podem variar; o Android pode pedir o PIN do aparelho e mostrar um aviso sobre certificados instalados pelo usuário.
4. Inicie o site por HTTPS:

   ```powershell
   powershell -ExecutionPolicy Bypass -File .\start-https.ps1
   ```

5. Com o computador e o celular na mesma rede Wi-Fi, abra no celular o endereço HTTPS que o script mostrar. Mantenha a janela do PowerShell aberta enquanto usa o site.

O certificado de CA local é usado apenas para o servidor deste projeto e fica no computador; as chaves privadas são marcadas como não exportáveis. Não instale certificados recebidos de desconhecidos. Se o endereço IP do computador mudar, execute `setup-https.ps1` novamente e reinicie `start-https.ps1` para atualizar o certificado do servidor.

## Privacidade e segurança

O site não tem cadastro, não pede senhas e não envia respostas para um servidor. A política de segurança de conteúdo (CSP) limita scripts, estilos e conexões aos arquivos locais. A versão HTTPS usa criptografia na rede Wi-Fi; instalar o certificado local no Android é o que permite ao navegador confiar nessa conexão e remover o aviso.

Cada matéria também oferece uma busca por aula relacionada no YouTube antes da atividade. A busca abre em uma nova aba para você escolher o vídeo; o site não carrega o player nem se conecta ao YouTube automaticamente.
