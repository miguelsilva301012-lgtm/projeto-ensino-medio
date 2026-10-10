# Estuda em Casa

Site simples de apoio aos estudos do ensino médio. A página inicial apresenta as matérias e cada uma tem sua própria página:

- Matemática
- Português
- Redação ENEM
- Ciências
- História
- História do Brasil
- Geografia
- Filosofia
- Sociologia
- Astronomia
- Programação em Python
- Política

## Aulas e atividades

Cada tema começa com uma explicação e uma busca de aula relacionada no YouTube. Depois, são seis
questões: dois acertos seguidos levam ao próximo nível; uma resposta errada mostra uma explicação
e permite tentar novamente. Ao concluir o tema, a página indica a próxima aula da sequência.

Política aborda cidadania, democracia e instituições brasileiras sem promover partidos ou
candidaturas. História do Brasil dá espaço à diversidade de povos e experiências que formaram o
país, incluindo povos indígenas, africanos e afro-brasileiros.

## Ajuda e atendimento

O botão **Ajuda e atendimento**, disponível nas páginas do site, abre uma conversa com a equipe pelo
WhatsApp. O texto inicial informa a página em que a pessoa está; o WhatsApp só envia a mensagem
depois que ela confirmar o envio. As mensagens são tratadas pelo WhatsApp, não pelo site.

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

O atendimento pelo WhatsApp é opcional: só abre quando a pessoa seleciona o botão, e a mensagem
preparada não é enviada até que ela confirme no WhatsApp.

## Redação ENEM

A página `redacao-enem.html` apresenta uma orientação passo a passo, as cinco competências,
uma checklist de revisão e um espaço de rascunho que não é enviado nem corrigido pelo site. Os
links de aula abrem buscas no YouTube; confira a cartilha oficial do participante para os critérios
do ano da prova.

## Meus estudos

A página `meus-estudos.html` reúne uma busca por matéria, tema, nível, formato e favoritos, além
de progresso, meta diária, planner, anotações, revisão de erros, flashcards com revisão espaçada,
simulado e timer Pomodoro. O tema escuro é opcional. O catálogo mostra até 24 materiais por vez;
use **Mostrar mais** para carregar outros resultados.

O progresso, as notas, os favoritos e os planos ficam apenas no armazenamento local do navegador
em uso. Não há conta, sincronização ou envio dessas informações para um servidor. Os vídeos são
buscas no YouTube, o áudio usa a leitura de voz disponível no navegador e a opção de PDF usa a
impressão do próprio navegador.

## Aparência de Ciências

A página `ciencias.html` usa um papel de parede vetorial repetido com desenhos de giz, vidrarias,
microscópios, átomos, planetas e fórmulas. Os painéis escuros translúcidos preservam a leitura do
conteúdo e o padrão se adapta a telas menores.

## Aparência das páginas

A página `portugues.html` tem uma identidade de scrapbook em papel envelhecido, com livros,
caligrafia, ilustrações botânicas e recortes. A página inicial usa uma paleta clara, colorida e
quente; essas personalizações ficam limitadas às páginas correspondentes.

A página `filosofia.html` usa uma colagem vintage em tons de sépia, com recortes de jornal,
símbolos de questionamento, escultura clássica, lua, monumentos, livros e frases sobre ideias e
existência. O conteúdo permanece em painéis claros e legíveis.

A página `matematica.html` combina uma lousa preta preenchida com fórmulas e desenhos geométricos
em giz branco com painéis escuros quadriculados para destacar aulas e exercícios.

A página `programacao-python.html` usa um fundo digital azul-marinho com código e rede de dados,
além de uma capa com símbolo Python vetorial em destaque. Os painéis escuros preservam a leitura
das aulas e atividades.
