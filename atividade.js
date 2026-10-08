const totalQuestions = 6;
const correctAnswersToAdvance = 2;
const subjectLabels = {
  matematica: 'Matemática',
  portugues: 'Português',
  ciencias: 'Ciências',
  historia: 'História',
  geografia: 'Geografia',
  filosofia: 'Filosofia',
  sociologia: 'Sociologia',
  astronomia: 'Astronomia',
  python: 'Python',
  politica: 'Política',
  'historia-brasil': 'História do Brasil',
};

const introductoryQuestions = {
  matematica: [
    {
      prompt: 'Duas provas tiveram notas 6 e 8. Qual é a média?',
      options: ['6', '7', '8', '14'],
      correct: 1,
      explanation: 'Some as notas e divida por 2: (6 + 8) ÷ 2 = 7.',
    },
    {
      prompt: 'As notas de três atividades foram 70, 80 e 90. Qual foi a média?',
      options: ['75', '80', '85', '90'],
      correct: 1,
      explanation: 'A soma é 240. Dividindo pelas 3 atividades, a média é 80.',
    },
    {
      prompt: 'A média de quatro números é 20. Qual é a soma desses números?',
      options: ['24', '40', '80', '100'],
      correct: 2,
      explanation: 'Para encontrar a soma, multiplique a média pela quantidade: 20 × 4 = 80.',
    },
    {
      prompt: 'Uma estudante tirou 10, 12 e 14. Que nota ela precisa tirar na quarta prova para ficar com média 13?',
      options: ['12', '13', '14', '16'],
      correct: 3,
      explanation: 'Para ter média 13 em 4 provas, o total deve ser 52. As três primeiras somam 36, então faltam 16.',
    },
    {
      prompt: 'Uma turma tem 5 notas com média 8. Quatro delas são 7, 8, 9 e 6. Qual é a quinta nota?',
      options: ['8', '9', '10', '11'],
      correct: 2,
      explanation: 'O total para média 8 em 5 notas é 40. As quatro conhecidas somam 30, então a quinta é 10.',
    },
    {
      prompt: 'Uma pessoa quer média 12 em 5 provas. Nas quatro primeiras, tirou 10, 11, 12 e 13. Quanto precisa tirar na última?',
      options: ['12', '13', '14', '15'],
      correct: 2,
      explanation: 'Para média 12, o total precisa ser 60. As quatro notas somam 46, então faltam 14.',
    },
  ],
  portugues: [
    {
      prompt: '“Rafaela pegou o guarda-chuva antes de sair. O céu estava escuro e já dava para ouvir trovões.” Por que ela levou o guarda-chuva?',
      options: ['Porque ia fazer muito calor.', 'Porque provavelmente ia chover.', 'Porque estava indo à praia.', 'Porque o guarda-chuva estava pesado.'],
      correct: 1,
      explanation: 'O céu escuro e os trovões dão pistas de que uma chuva pode estar chegando.',
    },
    {
      prompt: '“João treinou a semana toda. No sábado, acordou cedo e chegou animado à competição.” O que o texto sugere sobre João?',
      options: ['Ele não gostava de competir.', 'Ele se preparou e estava empolgado.', 'Ele esqueceu o horário.', 'Ele não treinou.'],
      correct: 1,
      explanation: 'O treino durante a semana e a animação mostram que ele se preparou e estava interessado.',
    },
    {
      prompt: '“A praça ganhou árvores e bancos novos. Desde então, mais famílias passam a tarde por lá.” Qual mudança o texto destaca?',
      options: ['A praça ficou menos usada.', 'As melhorias atraíram mais pessoas.', 'As famílias plantaram todas as árvores.', 'Os bancos foram retirados.'],
      correct: 1,
      explanation: 'A expressão “desde então” relaciona as melhorias ao aumento de visitantes.',
    },
    {
      prompt: '“Ler por alguns minutos todos os dias ajuda a ampliar o vocabulário. Por isso, vale reservar um tempo para a leitura.” Qual é a ideia principal?',
      options: ['Só livros longos ajudam a aprender.', 'A leitura frequente pode ampliar o vocabulário.', 'Ler ocupa tempo sem trazer benefício.', 'É preciso ler apenas na escola.'],
      correct: 1,
      explanation: 'A segunda frase reforça a ideia de que manter o hábito de leitura traz benefícios.',
    },
    {
      prompt: '“Aline colocou a muda perto da janela e regou a terra. Algumas semanas depois, apareceram folhas novas.” O que podemos concluir?',
      options: ['A muda cresceu com cuidados e luz.', 'A planta foi guardada no escuro.', 'Aline deixou a terra seca.', 'As folhas apareceram antes do plantio.'],
      correct: 0,
      explanation: 'O texto conta que a muda recebeu água e ficou perto da luz antes de crescer.',
    },
    {
      prompt: 'Qual frase apresenta uma opinião, e não um dado que possa ser conferido diretamente?',
      options: ['O ônibus passou às 7h.', 'A sala tem 28 carteiras.', 'Na minha opinião, a biblioteca é o melhor lugar da escola.', 'A aula começou na segunda-feira.'],
      correct: 2,
      explanation: '“Na minha opinião” deixa claro que “o melhor lugar” é uma avaliação pessoal.',
    },
  ],
  ciencias: [
    {
      prompt: 'Um cubo de gelo derrete sobre a mesa. A água passou de qual estado para qual estado?',
      options: ['Gasoso para líquido.', 'Sólido para líquido.', 'Líquido para sólido.', 'Sólido para gasoso.'],
      correct: 1,
      explanation: 'Ao derreter, o gelo passa do estado sólido para o líquido. Essa mudança é chamada de fusão.',
    },
    {
      prompt: 'A roupa molhada seca no varal em um dia quente. Que processo transforma a água líquida em vapor?',
      options: ['Condensação.', 'Solidificação.', 'Evaporação.', 'Fusão.'],
      correct: 2,
      explanation: 'Na evaporação, a água líquida passa para o estado gasoso, mesmo sem precisar ferver.',
    },
    {
      prompt: 'Gotinhas aparecem do lado de fora de um copo gelado. De onde veio essa água?',
      options: ['Do vapor de água do ar, que esfriou e virou líquido.', 'Da água que atravessou o vidro.', 'Do gelo que virou sólido por fora.', 'Do copo, que produziu água.'],
      correct: 0,
      explanation: 'O vapor de água presente no ar esfria ao tocar o copo e vira gotinhas líquidas: é a condensação.',
    },
    {
      prompt: 'No ciclo da água, o vapor esfria e forma pequenas gotinhas que se juntam nas nuvens. Como se chama essa mudança?',
      options: ['Fusão.', 'Condensação.', 'Evaporação.', 'Solidificação.'],
      correct: 1,
      explanation: 'A condensação acontece quando o vapor esfria e passa do estado gasoso para o líquido.',
    },
    {
      prompt: 'Qual é a diferença entre evaporação e ebulição?',
      options: ['A ebulição ocorre em todo o líquido, com formação de bolhas; a evaporação ocorre na superfície.', 'Evaporação só acontece com água congelada.', 'Ebulição transforma líquido diretamente em sólido.', 'Não existe diferença entre elas.'],
      correct: 0,
      explanation: 'Na ebulição, formam-se bolhas em todo o líquido; na evaporação, a mudança ocorre aos poucos na superfície.',
    },
    {
      prompt: 'Uma poça some depois de algumas horas de sol, e mais tarde o vapor pode formar nuvens. Qual sequência descreve essas etapas?',
      options: ['Condensação e fusão.', 'Evaporação e condensação.', 'Solidificação e evaporação.', 'Fusão e solidificação.'],
      correct: 1,
      explanation: 'A água da poça evapora. Depois, ao esfriar na atmosfera, o vapor pode condensar e formar gotículas nas nuvens.',
    },
  ],
  historia: [
    {
      prompt: 'A Idade Moderna é um período histórico que começou depois da:',
      options: ['Idade Média.', 'Idade Contemporânea.', 'Pré-História.', 'Revolução Industrial.'],
      correct: 0,
      explanation: 'Na divisão histórica mais comum, a Idade Moderna vem depois da Idade Média.',
    },
    {
      prompt: 'O Renascimento, associado à Idade Moderna, valorizou especialmente:',
      options: ['A observação, as artes e os estudos sobre os seres humanos.', 'A proibição de toda produção artística.', 'O abandono do conhecimento e da ciência.', 'A vida exclusiva dentro dos castelos.'],
      correct: 0,
      explanation: 'O Renascimento valorizou as artes, a investigação e novas formas de observar o mundo e a humanidade.',
    },
    {
      prompt: 'Qual invenção ajudou a ampliar a circulação de livros e ideias na Europa moderna?',
      options: ['A prensa de tipos móveis.', 'A locomotiva a vapor.', 'O telefone celular.', 'A máquina fotográfica digital.'],
      correct: 0,
      explanation: 'A prensa de tipos móveis facilitou a produção de livros e a circulação de ideias.',
    },
    {
      prompt: 'Durante a expansão marítima europeia, os reinos buscavam, entre outros objetivos:',
      options: ['Novas rotas comerciais e acesso a mercadorias.', 'Acabar com toda atividade de comércio.', 'Impedir a navegação oceânica.', 'Trocar as cidades por aldeias isoladas.'],
      correct: 0,
      explanation: 'A busca de rotas, mercados e mercadorias foi uma das motivações da expansão marítima.',
    },
    {
      prompt: 'O mercantilismo reunia práticas econômicas adotadas por muitos Estados europeus. Qual alternativa combina com essas práticas?',
      options: ['Intervenção do Estado no comércio e busca de acumular riquezas.', 'Ausência completa de comércio entre países.', 'Distribuição igual de todas as colônias entre seus habitantes.', 'Fim da cobrança de impostos em qualquer situação.'],
      correct: 0,
      explanation: 'O mercantilismo incluía forte participação dos governos na economia e a busca de fortalecer o reino.',
    },
    {
      prompt: 'Por que é importante estudar a expansão marítima considerando diferentes pontos de vista?',
      options: ['Porque seus efeitos foram iguais e positivos para todos os povos.', 'Porque envolveu encontros, comércio, conquista e também violência contra povos colonizados.', 'Porque não mudou a vida de nenhuma sociedade.', 'Porque aconteceu sem contato entre continentes.'],
      correct: 1,
      explanation: 'A expansão teve consequências diferentes: ampliou contatos e trocas, mas também envolveu conquista, exploração e violência colonial.',
    },
  ],
  geografia: [
    {
      prompt: 'Uma paisagem pode incluir:',
      options: ['Somente florestas e rios.', 'Elementos naturais e construídos pelas pessoas.', 'Apenas prédios e ruas.', 'Só lugares vistos em mapas.'],
      correct: 1,
      explanation: 'A paisagem reúne elementos naturais, como rios, e elementos construídos, como casas e estradas.',
    },
    {
      prompt: 'Qual alternativa é um elemento natural da paisagem?',
      options: ['Uma ponte.', 'Um prédio.', 'Uma montanha.', 'Uma rodovia.'],
      correct: 2,
      explanation: 'A montanha é um elemento natural; ponte, prédio e rodovia são construções humanas.',
    },
    {
      prompt: 'Uma praça tem árvores, bancos, calçadas e um córrego. Qual afirmação está correta?',
      options: ['Todos os elementos foram criados pelas pessoas.', 'O córrego é natural; bancos e calçadas foram construídos.', 'As árvores e o córrego são construções humanas.', 'Uma paisagem não pode misturar elementos naturais e construídos.'],
      correct: 1,
      explanation: 'Paisagens costumam reunir elementos da natureza e construções humanas.',
    },
    {
      prompt: 'Quando um bairro rural cresce e recebe novas ruas e casas, o que acontece com sua paisagem?',
      options: ['Ela permanece sempre idêntica.', 'Ela se transforma com as ações e atividades humanas.', 'Ela deixa de ser uma paisagem.', 'Ela passa a ter somente elementos naturais.'],
      correct: 1,
      explanation: 'A construção de ruas e casas transforma a paisagem ao longo do tempo.',
    },
    {
      prompt: 'Por que duas pessoas podem perceber de formas diferentes a mesma paisagem?',
      options: ['Porque a paisagem muda de cor para cada pessoa.', 'Porque cada uma observa aspectos diferentes, de acordo com sua experiência e atenção.', 'Porque só uma delas consegue ver elementos naturais.', 'Porque paisagem é sempre uma opinião sem elementos reais.'],
      correct: 1,
      explanation: 'A paisagem tem elementos concretos, mas as experiências e os pontos de atenção de cada observador podem ser diferentes.',
    },
    {
      prompt: 'Para estudar como uma cidade mudou nos últimos 50 anos, qual conjunto de fontes ajuda mais?',
      options: ['Fotos antigas e atuais, mapas de diferentes datas e relatos de moradores.', 'Uma única fotografia recente.', 'Somente a previsão do tempo de amanhã.', 'A lista de nomes das ruas, sem datas ou localização.'],
      correct: 0,
      explanation: 'Comparar imagens, mapas e relatos de épocas diferentes ajuda a identificar e explicar mudanças na paisagem.',
    },
  ],
  filosofia: [
    {
      prompt: 'Na Filosofia, fazer perguntas é importante porque ajuda a:',
      options: ['Investigar ideias e refletir sobre o que acreditamos.', 'Evitar pensar sobre qualquer assunto.', 'Aceitar sempre a primeira resposta.', 'Trocar argumentos por boatos.'],
      correct: 0,
      explanation: 'Perguntar é uma forma de investigar ideias, buscar razões e refletir sobre diferentes respostas.',
    },
    {
      prompt: 'Qual atitude mostra que uma pessoa está avaliando um argumento?',
      options: ['Repetir uma frase sem entender.', 'Perguntar quais razões e evidências apoiam a ideia.', 'Escolher a opinião de quem fala mais alto.', 'Ignorar qualquer explicação.'],
      correct: 1,
      explanation: 'Avaliar um argumento envolve examinar as razões e evidências usadas para defender uma ideia.',
    },
    {
      prompt: 'Uma opinião e um argumento são diferentes porque:',
      options: ['Um argumento apresenta razões para apoiar uma conclusão.', 'Uma opinião nunca pode ser discutida.', 'Um argumento é sempre uma pergunta.', 'Uma opinião é sempre falsa.'],
      correct: 0,
      explanation: 'Um argumento liga razões a uma conclusão. Isso permite avaliar se a ideia está bem apoiada.',
    },
    {
      prompt: 'Uma colega diz: “A escola deveria ter mais árvores, porque elas dão sombra no pátio.” Qual é a razão apresentada?',
      options: ['A escola deveria ter mais árvores.', 'As árvores dão sombra no pátio.', 'O pátio não deve ser usado.', 'Toda opinião precisa ser aceita.'],
      correct: 1,
      explanation: 'A sombra no pátio é a razão usada para apoiar a conclusão de que a escola deveria ter mais árvores.',
    },
    {
      prompt: 'Ao discutir se uma regra é justa, qual pergunta ajuda a aprofundar a conversa?',
      options: ['Quem consegue se beneficiar ou ser prejudicado por essa regra?', 'Como encerrar a conversa mais rápido?', 'Qual colega tem mais seguidores?', 'Como evitar ouvir outras opiniões?'],
      correct: 0,
      explanation: 'Pensar em quem é afetado pela regra ajuda a examinar suas consequências e discutir a ideia de justiça.',
    },
    {
      prompt: 'Duas pessoas chegam a conclusões diferentes sobre um tema. Qual é um bom próximo passo para investigá-lo?',
      options: ['Comparar as razões de cada uma e procurar informações confiáveis.', 'Decidir pela primeira pessoa que falou.', 'Parar de fazer perguntas.', 'Escolher a conclusão mais popular sem avaliar os motivos.'],
      correct: 0,
      explanation: 'Comparar argumentos e consultar informações confiáveis permite avaliar as ideias com mais cuidado.',
    },
  ],
  sociologia: [
    {
      prompt: 'Socialização é o processo pelo qual aprendemos:',
      options: ['A conviver e compartilhar valores, hábitos e regras de um grupo.', 'Somente a fazer contas.', 'Uma única profissão para a vida toda.', 'Regras que são iguais em todas as sociedades.'],
      correct: 0,
      explanation: 'Na socialização, aprendemos modos de conviver, valores e práticas presentes nos grupos de que fazemos parte.',
    },
    {
      prompt: 'Qual exemplo mostra a família participando da socialização?',
      options: ['Uma criança aprende a conversar e a dividir brinquedos em casa.', 'Uma pedra muda de lugar com a chuva.', 'Uma pessoa mede a temperatura do ar.', 'Uma máquina imprime um livro.'],
      correct: 0,
      explanation: 'A convivência familiar pode ensinar formas de comunicação, cuidado e partilha.',
    },
    {
      prompt: 'A escola também participa da socialização quando:',
      options: ['Promove a convivência, o diálogo e a aprendizagem de regras coletivas.', 'Impede qualquer contato entre estudantes.', 'Apaga todas as diferenças culturais.', 'Ensina somente hábitos de uma família específica.'],
      correct: 0,
      explanation: 'Na escola, as pessoas convivem com diferentes grupos e aprendem conhecimentos e regras coletivas.',
    },
    {
      prompt: 'Qual afirmação sobre cultura está mais de acordo com a Sociologia?',
      options: ['Costumes e valores podem ser aprendidos e variar entre grupos e sociedades.', 'Todas as sociedades têm exatamente os mesmos costumes.', 'Cultura depende apenas do clima.', 'Os hábitos de uma sociedade nunca mudam.'],
      correct: 0,
      explanation: 'A cultura é aprendida, compartilhada e pode variar e se transformar ao longo do tempo.',
    },
    {
      prompt: 'Uma pessoa aprende formas de falar e se vestir com os amigos, a escola e a internet. O que esse exemplo mostra?',
      options: ['A socialização acontece apenas na infância.', 'Diferentes grupos e meios participam da socialização.', 'A internet é o único agente de socialização.', 'A convivência não influencia hábitos.'],
      correct: 1,
      explanation: 'A socialização pode acontecer em vários espaços e relações, não só na família ou durante a infância.',
    },
    {
      prompt: 'Por que vale a pena analisar criticamente uma regra social?',
      options: ['Para entender como surgiu, a quem afeta e se pode ser transformada.', 'Para concluir que toda regra é natural e imutável.', 'Para evitar observar a vida em sociedade.', 'Para provar que todas as pessoas vivem do mesmo jeito.'],
      correct: 0,
      explanation: 'A análise sociológica investiga como as regras surgem, afetam os grupos e podem mudar.',
    },
  ],
  astronomia: [
    {
      prompt: 'A Terra é:',
      options: ['Uma estrela.', 'Um planeta.', 'Uma galáxia.', 'Um cometa.'],
      correct: 1,
      explanation: 'A Terra é um planeta que orbita o Sol.',
    },
    {
      prompt: 'O Sol é classificado como:',
      options: ['Um planeta rochoso.', 'Uma estrela.', 'Um satélite natural.', 'Um asteroide.'],
      correct: 1,
      explanation: 'O Sol é uma estrela: ele produz luz e calor próprios.',
    },
    {
      prompt: 'Qual frase descreve corretamente o Sistema Solar?',
      options: ['Os planetas orbitam o Sol.', 'O Sol orbita cada planeta uma vez por dia.', 'A Lua é a estrela mais próxima da Terra.', 'Todos os planetas têm o mesmo tamanho.'],
      correct: 0,
      explanation: 'Os planetas do Sistema Solar, incluindo a Terra, orbitam o Sol.',
    },
    {
      prompt: 'O que causa principalmente as estações do ano na Terra?',
      options: ['A inclinação do eixo da Terra junto com seu movimento ao redor do Sol.', 'A Terra ficar muito mais perto do Sol no verão.', 'A Lua bloquear a luz solar em cada estação.', 'O Sol desligar parte de sua luz no inverno.'],
      correct: 0,
      explanation: 'A inclinação do eixo terrestre faz cada hemisfério receber luz solar de maneira diferente ao longo da órbita.',
    },
    {
      prompt: 'As fases da Lua acontecem principalmente porque:',
      options: ['A Lua muda de formato de verdade.', 'Vemos partes diferentes da região iluminada da Lua enquanto ela orbita a Terra.', 'A sombra da Terra cobre a Lua todas as semanas.', 'A Lua produz mais luz em algumas noites.'],
      correct: 1,
      explanation: 'A Lua mantém aproximadamente o mesmo formato; de cada posição, vemos diferentes partes de sua metade iluminada pelo Sol.',
    },
    {
      prompt: 'O que significa dizer que uma estrela está a 4 anos-luz da Terra?',
      options: ['Sua luz leva 4 anos para chegar até nós.', 'A estrela vive somente 4 anos.', 'A estrela está a 4 quilômetros da Terra.', 'A estrela demora 4 anos para dar uma volta em torno da Terra.'],
      correct: 0,
      explanation: 'Ano-luz é uma unidade de distância: corresponde ao caminho que a luz percorre em um ano.',
    },
  ],
  python: [
    {
      prompt: 'O que o comando abaixo mostra na tela?\n\nnome = "Lia"\nprint("Oi,", nome)',
      options: ['nome', 'Oi, Lia', 'Lia, Oi', 'Não mostra nada.'],
      correct: 1,
      explanation: 'A variável nome guarda “Lia”. O print mostra o texto “Oi,” seguido do valor da variável.',
    },
    {
      prompt: 'Depois deste código, qual valor está guardado em idade?\n\nidade = 16\nidade = idade + 1',
      options: ['15', '16', '17', 'idade + 1'],
      correct: 2,
      explanation: 'O código soma 1 ao valor inicial 16 e guarda o resultado 17 novamente em idade.',
    },
    {
      prompt: 'O que aparece na tela?\n\nnota = 7\nprint(nota + 2)',
      options: ['72', '9', 'nota + 2', '7 + 2'],
      correct: 1,
      explanation: 'Como nota guarda o número 7, a expressão 7 + 2 resulta em 9.',
    },
    {
      prompt: 'Qual é a saída deste código?\n\ncidade = "Recife"\nprint("Olá,", cidade)',
      options: ['Olá, cidade', 'Recife, Olá', 'Olá, Recife', 'Olá cidade Recife'],
      correct: 2,
      explanation: 'O print mostra “Olá,” e depois o valor guardado em cidade: “Recife”.',
    },
    {
      prompt: 'O que será mostrado?\n\npontos = 10\npontos = pontos + 5\nprint(pontos)',
      options: ['10', '5', '15', 'pontos'],
      correct: 2,
      explanation: 'A variável começa em 10, recebe mais 5 e passa a guardar 15.',
    },
    {
      prompt: 'Qual resultado aparece?\n\npreco = 12\nquantidade = 3\nprint(preco * quantidade)',
      options: ['15', '36', '123', '9'],
      correct: 1,
      explanation: 'O operador * multiplica os valores: 12 × 3 = 36.',
    },
  ],
};

function createQuestion(prompt, options, correct, explanation) {
  const shuffledOptions = options.map((option, index) => ({ option, index }));

  for (let index = shuffledOptions.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffledOptions[index], shuffledOptions[swapIndex]] = [shuffledOptions[swapIndex], shuffledOptions[index]];
  }

  return {
    prompt,
    options: shuffledOptions.map(({ option }) => option),
    correct: shuffledOptions.findIndex(({ index }) => index === correct),
    explanation,
  };
}

function createTopic(title, overview, lessonDescription, videoSearch, questions) {
  return { title, overview, lessonDescription, videoSearch, questions };
}

const topicBanks = {
  matematica: [
    createTopic(
      'Média aritmética',
      'Some os valores e divida pela quantidade de números. É assim que encontramos a média aritmética.',
      'Relembre como calcular médias simples e descobrir valores que estão faltando.',
      'média aritmética aula ensino médio',
      introductoryQuestions.matematica,
    ),
    createTopic(
      'Porcentagem no dia a dia',
      'Porcentagem representa uma parte de cada 100. Ela aparece em descontos, pesquisas e muitas outras situações.',
      'Veja como calcular porcentagens e entender descontos em situações do cotidiano.',
      'porcentagem descontos aula matemática ensino médio',
      [
        createQuestion('Quanto é 10% de 50?', ['2', '5', '10', '15'], 1, '10% é 10 de cada 100. Em 50, isso corresponde a 5.'),
        createQuestion('Quanto é 25% de 80?', ['10', '20', '25', '40'], 1, '25% é um quarto. Um quarto de 80 é 20.'),
        createQuestion('Uma camiseta custa R$ 200 e está com 10% de desconto. Qual é o preço com desconto?', ['R$ 180', 'R$ 190', 'R$ 200', 'R$ 220'], 0, '10% de R$ 200 são R$ 20. Subtraindo o desconto, o preço fica R$ 180.'),
        createQuestion('Quanto é 15% de 200?', ['15', '20', '30', '45'], 2, '10% de 200 são 20 e 5% são 10. Juntos, 15% são 30.'),
        createQuestion('Um tênis de R$ 250 teve desconto de 30%. Quanto foi descontado?', ['R$ 30', 'R$ 50', 'R$ 75', 'R$ 175'], 2, '30% de R$ 250 é 0,30 × 250 = R$ 75.'),
        createQuestion('Depois de um desconto de 20%, um produto custa R$ 160. Qual era o preço antes do desconto?', ['R$ 180', 'R$ 192', 'R$ 200', 'R$ 220'], 2, 'Com 20% de desconto, restam 80% do preço. Como 160 ÷ 0,8 = 200, o preço original era R$ 200.'),
      ],
    ),
    createTopic(
      'Proporção e regra de três',
      'Quando duas quantidades variam juntas, a proporção ajuda a descobrir um valor que falta.',
      'Acompanhe exemplos de regra de três simples e observe como organizar as grandezas.',
      'regra de três simples aula matemática ensino médio exemplos',
      [
        createQuestion('Três cadernos custam R$ 12. Quanto custam cinco cadernos iguais?', ['R$ 15', 'R$ 18', 'R$ 20', 'R$ 24'], 2, 'Cada caderno custa R$ 4. Então, cinco custam 5 × 4 = R$ 20.'),
        createQuestion('Uma receita usa 2 xícaras de farinha para 1 bolo. Quantas xícaras são necessárias para 3 bolos?', ['4', '5', '6', '8'], 2, 'A quantidade triplica junto com o número de bolos: 2 × 3 = 6 xícaras.'),
        createQuestion('Um carro percorre 120 km em 2 horas, mantendo a mesma velocidade. Quanto percorre em 3 horas?', ['150 km', '160 km', '180 km', '240 km'], 2, 'A velocidade é 120 ÷ 2 = 60 km/h. Em 3 horas, percorre 180 km.'),
        createQuestion('Quatro pessoas fazem um trabalho em 6 dias. Com o dobro de pessoas e o mesmo ritmo, quantos dias levariam?', ['2 dias', '3 dias', '6 dias', '12 dias'], 1, 'Dobrar a equipe reduz o tempo pela metade: 6 ÷ 2 = 3 dias.'),
        createQuestion('Cinco quilos de arroz custam R$ 35. Mantendo o preço por quilo, quanto custam 8 quilos?', ['R$ 43', 'R$ 48', 'R$ 56', 'R$ 63'], 2, 'O preço por quilo é R$ 35 ÷ 5 = R$ 7. Oito quilos custam 8 × 7 = R$ 56.'),
        createQuestion('Uma torneira enche 24 litros em 3 minutos. Mantendo o mesmo fluxo, quantos litros saem em 8 minutos?', ['48', '56', '64', '72'], 2, 'O fluxo é de 8 litros por minuto. Em 8 minutos, são 8 × 8 = 64 litros.'),
      ],
    ),
  ],
  portugues: [
    createTopic(
      'Interpretação de texto',
      'Leia com atenção, encontre pistas no texto e use essas informações para entender a ideia principal.',
      'Pratique a leitura atenta e a identificação de informações explícitas e implícitas.',
      'interpretação de texto aula português ensino médio',
      introductoryQuestions.portugues,
    ),
    createTopic(
      'Gêneros textuais',
      'Notícias, receitas, crônicas e anúncios têm objetivos e características diferentes.',
      'Conheça alguns gêneros textuais e veja como reconhecer a intenção de cada texto.',
      'gêneros textuais notícia receita crônica aula português',
      [
        createQuestion('Qual é o principal objetivo de uma receita culinária?', ['Contar uma história fictícia.', 'Ensinar a preparar um prato.', 'Divulgar o resultado de uma eleição.', 'Descrever uma lembrança pessoal.'], 1, 'A receita apresenta ingredientes e etapas para orientar o preparo de um prato.'),
        createQuestion('Em geral, uma notícia tem como objetivo principal:', ['Informar sobre um acontecimento.', 'Ensinar regras de um jogo.', 'Vender sempre um produto.', 'Contar uma história fantástica.'], 0, 'A notícia relata acontecimentos e busca informar o público.'),
        createQuestion('Qual característica costuma aparecer em uma entrevista?', ['Perguntas e respostas entre entrevistador e entrevistado.', 'Somente uma lista de ingredientes.', 'Uma sequência de instruções sem diálogo.', 'Uma tabela de cálculos sem texto.'], 0, 'A entrevista normalmente organiza a conversa em perguntas e respostas.'),
        createQuestion('Um anúncio que diz “Compre hoje e ganhe desconto” tenta principalmente:', ['Convencer o leitor a comprar.', 'Explicar um fato histórico.', 'Ensinar uma receita.', 'Narrar uma viagem.'], 0, 'A linguagem procura persuadir o leitor a realizar uma compra.'),
        createQuestion('Uma crônica costuma abordar:', ['Situações cotidianas com um olhar pessoal ou reflexivo.', 'Apenas fórmulas matemáticas.', 'Somente leis e artigos jurídicos.', 'Instruções obrigatórias para montar um aparelho.'], 0, 'A crônica frequentemente parte de acontecimentos do dia a dia para observar ou comentar a vida.'),
        createQuestion('Um texto apresenta dados sobre a coleta seletiva e termina convidando moradores a separar o lixo. Que objetivos aparecem?', ['Informar e incentivar uma ação.', 'Entrevistar e divertir.', 'Ensinar uma receita e vender um produto.', 'Narrar uma aventura sem dar informações.'], 0, 'O texto informa sobre o tema e também incentiva o leitor a mudar uma prática.'),
      ],
    ),
    createTopic(
      'Fato e opinião',
      'Separar uma informação que pode ser verificada de uma avaliação pessoal ajuda a ler criticamente.',
      'Aprenda a identificar fatos, opiniões e argumentos presentes em textos do cotidiano.',
      'diferença entre fato e opinião interpretação de texto aula português',
      [
        createQuestion('Qual frase apresenta uma opinião?', ['A aula começa às 8 horas.', 'A biblioteca tem cinco mesas.', 'Na minha opinião, o recreio deveria ser mais longo.', 'O calendário mostra 200 dias letivos.'], 2, '“Deveria ser mais longo” expressa uma avaliação pessoal, não um dado objetivo.'),
        createQuestion('Qual frase pode ser conferida consultando um calendário?', ['Este é o melhor mês do ano.', 'A reunião será na terça-feira.', 'A terça-feira é um dia muito agradável.', 'Toda semana deveria ter mais feriados.'], 1, 'A data da reunião é uma informação que pode ser verificada no calendário.'),
        createQuestion('“O parque fecha às 18h, por isso devemos chegar antes.” Qual trecho expressa um fato verificável?', ['O parque fecha às 18h.', 'Devemos chegar antes.', 'O parque é o mais bonito.', 'É melhor passear à tarde.'], 0, 'O horário de fechamento pode ser conferido; a recomendação é uma conclusão.'),
        createQuestion('Uma pessoa escreve: “A praça está mais segura, pois agora tem iluminação e mais gente circulando.” Qual parte apresenta a justificativa?', ['A praça está mais segura.', 'Agora tem iluminação e mais gente circulando.', 'A praça fica no bairro.', 'A pessoa escreveu uma frase.'], 1, 'A iluminação e a circulação de pessoas são as razões usadas para defender a opinião.'),
        createQuestion('Qual leitura é mais cuidadosa diante de uma afirmação sem fonte?', ['Compartilhar imediatamente.', 'Procurar a origem e comparar com outras fontes confiáveis.', 'Considerar que é verdade porque muitas pessoas repetiram.', 'Apagar qualquer informação diferente.'], 1, 'Checar a origem e comparar fontes ajuda a avaliar se a afirmação tem apoio confiável.'),
        createQuestion('“A pesquisa ouviu 500 estudantes. Na minha opinião, o resultado é surpreendente.” Qual trecho é claramente uma opinião?', ['A pesquisa ouviu 500 estudantes.', 'Na minha opinião, o resultado é surpreendente.', 'A pesquisa foi realizada.', 'Foram ouvidas pessoas.'], 1, 'A expressão “na minha opinião” indica uma avaliação pessoal do resultado.'),
      ],
    ),
  ],
  ciencias: [
    createTopic(
      'Estados físicos da água',
      'A água pode aparecer nos estados sólido, líquido e gasoso, e passar de um estado para outro.',
      'Reveja fusão, evaporação, condensação e solidificação com exemplos do cotidiano.',
      'estados físicos da água mudanças de estado aula ciências',
      introductoryQuestions.ciencias,
    ),
    createTopic(
      'Ciclo da água',
      'A água circula pela natureza entre a superfície, os rios, os oceanos e a atmosfera.',
      'Acompanhe as etapas de evaporação, condensação e precipitação no ciclo da água.',
      'ciclo da água evaporação condensação precipitação aula ciências',
      [
        createQuestion('O calor do Sol aquece a água do mar, que passa para o ar como vapor. Qual processo acontece?', ['Evaporação.', 'Solidificação.', 'Fusão.', 'Condensação.'], 0, 'Com o aquecimento, parte da água líquida evapora e passa para a atmosfera como vapor.'),
        createQuestion('O vapor de água esfria na atmosfera e forma gotículas que compõem as nuvens. Isso é:', ['Fusão.', 'Condensação.', 'Ebulição.', 'Solidificação.'], 1, 'Ao esfriar, o vapor se condensa e forma pequenas gotículas líquidas.'),
        createQuestion('Quando a água das nuvens cai em forma de chuva, essa etapa é chamada de:', ['Precipitação.', 'Evaporação.', 'Fusão.', 'Infiltração.'], 0, 'A precipitação é a queda de água das nuvens, como chuva, neve ou granizo.'),
        createQuestion('Depois da chuva, parte da água penetra no solo. Como se chama esse processo?', ['Infiltração.', 'Condensação.', 'Ebulição.', 'Fusão.'], 0, 'Na infiltração, a água atravessa a superfície e pode abastecer o solo e os reservatórios subterrâneos.'),
        createQuestion('Como as plantas devolvem água para a atmosfera?', ['Pela transpiração, liberando vapor pelas folhas.', 'Transformando raízes em nuvens.', 'Fazendo a água desaparecer sem mudança.', 'Somente por meio da chuva.'], 0, 'As plantas liberam vapor de água, principalmente pelas folhas, em um processo chamado transpiração.'),
        createQuestion('Qual sequência representa etapas comuns do ciclo da água?', ['Evaporação, condensação e precipitação.', 'Solidificação, fusão e combustão.', 'Precipitação, queima e evaporação.', 'Condensação, congelamento e combustão.'], 0, 'A água evapora, o vapor condensa em nuvens e depois pode voltar à superfície como precipitação.'),
      ],
    ),
    createTopic(
      'Transformações físicas e químicas',
      'Em uma transformação física, a substância continua a mesma. Em uma transformação química, novas substâncias podem se formar.',
      'Compare exemplos como derreter gelo, dissolver açúcar e enferrujar um objeto.',
      'transformações físicas e químicas exemplos aula ciências química',
      [
        createQuestion('O gelo derrete e vira água líquida. Que tipo de transformação é essa?', ['Química, porque surge outra substância.', 'Física, porque a água continua sendo água.', 'Combustão.', 'Oxidação.'], 1, 'A mudança altera o estado físico, mas a substância continua sendo água.'),
        createQuestion('Um pedaço de papel queima e vira cinzas e fumaça. O que aconteceu?', ['Uma transformação química, com formação de outras substâncias.', 'Uma simples mudança de estado da água.', 'Uma transformação que não mudou o material.', 'Uma dissolução.'], 0, 'Na queima do papel, ocorrem reações que formam substâncias diferentes, como gases e cinzas.'),
        createQuestion('Dissolver açúcar em água geralmente é considerado uma transformação física porque:', ['O açúcar deixa de existir para sempre.', 'Não se forma uma nova substância e o açúcar pode ser recuperado ao evaporar a água.', 'A água vira açúcar.', 'O açúcar entra em combustão.'], 1, 'A dissolução espalha o açúcar na água, mas não cria uma substância nova; é possível recuperá-lo retirando a água.'),
        createQuestion('Por que um prego enferrujado indica transformação química?', ['O ferro reage com substâncias do ambiente e forma ferrugem.', 'O prego apenas muda de tamanho.', 'O ferro derrete e congela de novo.', 'A ferrugem é água congelada.'], 0, 'A ferrugem é uma nova substância formada pela reação do ferro com oxigênio e umidade.'),
        createQuestion('Qual observação pode ser um indício de reação química?', ['Formação de gás ou mudança de cor que não se desfaz facilmente.', 'Um objeto mudar de lugar.', 'Um líquido ser colocado em outro recipiente.', 'Uma folha ser dobrada.'], 0, 'A formação de gás ou uma mudança persistente de cor pode indicar a formação de novas substâncias.'),
        createQuestion('Uma vela acesa derrete e também queima. Qual alternativa diferencia esses processos?', ['Derreter a cera é físico; a queima da cera é química.', 'Os dois processos são apenas mudanças físicas.', 'Derreter é químico; queimar é físico.', 'Nenhum deles transforma matéria.'], 0, 'A cera derretida continua sendo cera, enquanto a combustão forma novas substâncias.'),
      ],
    ),
  ],
  historia: [
    createTopic(
      'Idade Moderna',
      'A Idade Moderna foi marcada por mudanças políticas, econômicas e culturais em várias partes do mundo.',
      'Conheça transformações desse período e observe como elas afetaram sociedades diferentes.',
      'Idade Moderna aula história ensino médio',
      introductoryQuestions.historia,
    ),
    createTopic(
      'Renascimento cultural',
      'O Renascimento valorizou as artes, os estudos da natureza e novas formas de pensar o ser humano.',
      'Relembre o humanismo, as artes renascentistas e a circulação de novas ideias.',
      'Renascimento cultural humanismo aula história ensino médio',
      [
        createQuestion('O Renascimento cultural valorizou especialmente:', ['As artes, a investigação e novas ideias sobre o ser humano.', 'A proibição de toda produção artística.', 'O abandono dos estudos da natureza.', 'A vida exclusivamente em castelos.'], 0, 'Artistas e estudiosos renascentistas ampliaram os estudos sobre arte, natureza e humanidade.'),
        createQuestion('O humanismo renascentista colocou em destaque:', ['A capacidade e a experiência humanas.', 'A ausência de interesse pelo conhecimento.', 'A ideia de que a arte deveria desaparecer.', 'Somente a vida militar.'], 0, 'O humanismo valorizou o estudo das capacidades, da história e das experiências humanas.'),
        createQuestion('Por que artistas renascentistas estudavam anatomia e perspectiva?', ['Para representar corpos e espaços com mais observação e profundidade.', 'Para impedir a representação da natureza.', 'Para substituir todas as pinturas por mapas.', 'Para provar que todas as obras eram iguais.'], 0, 'A observação ajudava a representar proporções, corpos e profundidade de maneira mais realista.'),
        createQuestion('Qual inovação ajudou a espalhar textos e ideias renascentistas?', ['A imprensa de tipos móveis.', 'A televisão.', 'A internet.', 'O motor a jato.'], 0, 'A imprensa facilitou a produção de livros e ampliou a circulação de textos.'),
        createQuestion('O Renascimento foi um movimento que:', ['Aconteceu em diferentes regiões e teve ritmos variados.', 'Transformou todas as sociedades da mesma maneira e ao mesmo tempo.', 'Eliminou imediatamente as diferenças sociais.', 'Ocorreu somente no século XXI.'], 0, 'O movimento teve características e ritmos diferentes conforme o lugar e o contexto histórico.'),
        createQuestion('Por que é simplista dizer que o Renascimento “apagou” completamente a Idade Média?', ['Porque mudanças culturais ocorreram gradualmente e também aproveitaram conhecimentos anteriores.', 'Porque a Idade Média não teve nenhuma produção cultural.', 'Porque todos os acontecimentos ocorreram no mesmo ano.', 'Porque o Renascimento aconteceu antes da Antiguidade.'], 0, 'Períodos históricos são divisões didáticas: transformações e continuidades atravessam as fronteiras entre eles.'),
      ],
    ),
    createTopic(
      'Expansão marítima europeia',
      'As navegações conectaram continentes, ampliaram o comércio e tiveram consequências profundas para muitos povos.',
      'Estude as motivações, as rotas e os efeitos das navegações para diferentes sociedades.',
      'expansão marítima europeia navegações aula história ensino médio',
      [
        createQuestion('Uma motivação das navegações europeias era:', ['Buscar novas rotas comerciais e mercadorias.', 'Acabar com as viagens pelo mar.', 'Evitar todo contato entre continentes.', 'Parar de comercializar especiarias.'], 0, 'A busca de rotas comerciais e de acesso a mercadorias motivou as navegações.'),
        createQuestion('Qual instrumento ajudava navegadores a observar a posição dos astros?', ['Astrolábio.', 'Microscópio eletrônico.', 'Termômetro clínico.', 'Telescópio espacial.'], 0, 'O astrolábio era um instrumento de navegação usado para observar os astros e auxiliar a orientação.'),
        createQuestion('O que significa dizer que uma rota marítima conectou continentes?', ['Que aumentaram as viagens e as trocas entre regiões distantes.', 'Que os continentes deixaram de existir.', 'Que todas as pessoas passaram a viver em navios.', 'Que as distâncias desapareceram.'], 0, 'As rotas ampliaram os contatos, as viagens e as trocas entre diferentes regiões.'),
        createQuestion('Um efeito da colonização europeia sobre vários povos originários foi:', ['A perda de territórios e a imposição de relações de domínio.', 'A ausência de qualquer mudança social.', 'A transferência de todos os povos para a Europa.', 'O fim de todos os conflitos.'], 0, 'A colonização envolveu tomada de territórios, exploração e transformações forçadas para muitos povos.'),
        createQuestion('Por que as navegações devem ser estudadas a partir de mais de um ponto de vista?', ['Porque os contatos tiveram impactos diferentes para comerciantes, colonizadores e povos colonizados.', 'Porque todos viveram exatamente as mesmas experiências.', 'Porque só os navegadores foram afetados.', 'Porque não existem registros históricos.'], 0, 'Observar diferentes grupos revela tanto as trocas quanto a exploração e a violência envolvidas.'),
        createQuestion('Um mapa antigo mostra rotas e nomes escolhidos por navegadores europeus. O que um historiador deve fazer ao analisá-lo?', ['Considerar quem produziu o mapa e quais povos ou lugares ficaram de fora.', 'Tratá-lo como uma descrição neutra e completa de todos os povos.', 'Ignorar a época em que foi feito.', 'Supor que os nomes nunca mudaram.'], 0, 'Toda fonte tem contexto e ponto de vista; analisar autoria e ausências ajuda a interpretá-la.'),
      ],
    ),
  ],
  geografia: [
    createTopic(
      'Paisagem geográfica',
      'Paisagem é o conjunto de elementos que percebemos em um lugar, tanto naturais quanto construídos pelas pessoas.',
      'Observe como as paisagens mudam com o tempo e com as atividades humanas.',
      'paisagem geográfica elementos naturais e culturais aula geografia',
      introductoryQuestions.geografia,
    ),
    createTopic(
      'Mapas e orientação',
      'Mapas representam lugares e ajudam a localizar pontos usando símbolos, escala e orientação.',
      'Aprenda a interpretar legendas, pontos cardeais e informações básicas de mapas.',
      'mapas escala legenda pontos cardeais aula geografia',
      [
        createQuestion('Para que serve a legenda de um mapa?', ['Para explicar o significado de cores e símbolos.', 'Para indicar a opinião de quem lê.', 'Para mostrar apenas a data do mapa.', 'Para substituir todas as informações geográficas.'], 0, 'A legenda ajuda a entender o que cada cor e símbolo representa.'),
        createQuestion('Em um mapa comum, qual direção costuma ficar na parte de cima?', ['Norte.', 'Sul.', 'Leste.', 'Oeste.'], 0, 'Por convenção, muitos mapas colocam o norte na parte superior, embora seja importante conferir a orientação indicada.'),
        createQuestion('Se o Sol nasce aproximadamente a leste, em que direção ele se põe?', ['Norte.', 'Sul.', 'Leste.', 'Oeste.'], 3, 'O Sol nasce aproximadamente a leste e se põe aproximadamente a oeste.'),
        createQuestion('Em um mapa de escala 1:100.000, 1 cm representa quantos quilômetros no terreno?', ['100 m.', '1 km.', '10 km.', '100 km.'], 1, '100.000 cm no terreno equivalem a 1 km; portanto, 1 cm no mapa representa 1 km.'),
        createQuestion('Um mapa tem escala 1:50.000. Uma estrada de 4 cm no mapa mede quanto na realidade?', ['200 m.', '500 m.', '2 km.', '20 km.'], 2, 'Cada centímetro representa 50.000 cm, ou 500 m. Quatro centímetros representam 2 km.'),
        createQuestion('Por que a escala é importante ao comparar dois mapas da mesma região?', ['Ela mostra a relação entre as distâncias no papel e no terreno.', 'Ela informa a temperatura do lugar.', 'Ela garante que todos os mapas tenham o mesmo tamanho.', 'Ela explica os costumes de todos os moradores.'], 0, 'A escala permite interpretar quanto as distâncias representadas correspondem às distâncias reais.'),
      ],
    ),
    createTopic(
      'Cidade e espaço urbano',
      'As cidades mudam com a moradia, o transporte, o trabalho e os serviços disponíveis para a população.',
      'Observe a urbanização, os serviços públicos e as diferenças entre bairros.',
      'urbanização cidades espaço urbano aula geografia ensino médio',
      [
        createQuestion('Qual é um exemplo de serviço público urbano?', ['Transporte coletivo.', 'Uma constelação.', 'Uma cadeia montanhosa distante.', 'O movimento de rotação da Terra.'], 0, 'O transporte coletivo é um serviço que atende à população da cidade.'),
        createQuestion('Urbanização é o processo de:', ['Crescimento da população urbana e expansão das cidades.', 'Transformação de toda cidade em área rural.', 'Desaparecimento dos serviços públicos.', 'Mudança das estações do ano.'], 0, 'Urbanização envolve o crescimento das cidades e da população que vive em áreas urbanas.'),
        createQuestion('Por que a distribuição de áreas verdes pode variar entre bairros?', ['A ocupação e o planejamento urbano acontecem de forma desigual.', 'Todos os bairros têm sempre o mesmo tamanho.', 'As árvores crescem somente em avenidas.', 'A vegetação não faz parte do espaço urbano.'], 0, 'Decisões de planejamento, ocupação e investimento podem produzir diferenças entre bairros.'),
        createQuestion('Uma enchente urbana pode ser agravada por:', ['Muita superfície impermeável e drenagem insuficiente.', 'Excesso de áreas permeáveis e vegetação preservada.', 'A ausência total de construções.', 'A rotação diária da Terra.'], 0, 'Asfalto e concreto dificultam a infiltração da água; se a drenagem não dá conta, os alagamentos aumentam.'),
        createQuestion('Como comparar o acesso a serviços entre diferentes bairros?', ['Analisar dados de transporte, saúde e educação junto com mapas e relatos locais.', 'Olhar somente para uma foto aérea.', 'Contar apenas o número de ruas sem saber onde ficam.', 'Supor que todos têm os mesmos serviços.'], 0, 'Dados e mapas de diferentes serviços ajudam a identificar desigualdades no espaço urbano.'),
        createQuestion('Uma nova linha de ônibus facilita o acesso de um bairro ao centro. Que mudança ela pode trazer?', ['Alterar os deslocamentos e as oportunidades de acesso a trabalho e serviços.', 'Apagar os limites da cidade.', 'Mudar o clima global imediatamente.', 'Eliminar automaticamente toda desigualdade urbana.'], 0, 'Melhorar o transporte pode ampliar o acesso, embora não resolva sozinho todos os problemas urbanos.'),
      ],
    ),
  ],
  filosofia: [
    createTopic(
      'Pensamento filosófico',
      'Filosofar é fazer perguntas, examinar ideias e buscar razões para aquilo que pensamos.',
      'Veja como perguntas e argumentos ajudam a investigar questões do cotidiano.',
      'introdução à filosofia perguntas argumentos aula ensino médio',
      introductoryQuestions.filosofia,
    ),
    createTopic(
      'Ética e escolhas',
      'A ética reflete sobre ações, responsabilidades e critérios que usamos para pensar o que é justo.',
      'Conheça questões éticas e veja como avaliar consequências e diferentes pontos de vista.',
      'ética filosofia escolhas justiça aula ensino médio',
      [
        createQuestion('A ética se ocupa principalmente de refletir sobre:', ['Ações, valores e o que consideramos justo.', 'A previsão do tempo.', 'Somente operações matemáticas.', 'A distância entre planetas.'], 0, 'A reflexão ética examina valores, decisões e seus efeitos sobre as pessoas.'),
        createQuestion('Uma decisão afeta várias pessoas de maneiras diferentes. Qual atitude combina com uma reflexão ética?', ['Considerar os impactos e ouvir os envolvidos.', 'Pensar apenas em quem decide.', 'Ignorar todas as consequências.', 'Escolher sem explicar os motivos.'], 0, 'Uma reflexão ética considera consequências, direitos e os diferentes envolvidos.'),
        createQuestion('Por que uma regra pode ser questionada eticamente?', ['Porque é importante examinar se é justa e a quem afeta.', 'Porque nenhuma regra pode ser discutida.', 'Porque regras sempre beneficiam todos igualmente.', 'Porque pensar em justiça é inútil.'], 0, 'Questionar uma regra permite refletir sobre seus motivos e efeitos, sem presumir que seja justa para todos.'),
        createQuestion('Duas pessoas discordam sobre uma decisão. O que ajuda a construir uma discussão ética?', ['Apresentar razões e considerar os argumentos de cada uma.', 'Interromper quem discorda.', 'Usar insultos no lugar de razões.', 'Escolher a posição mais popular sem refletir.'], 0, 'Uma discussão ética exige argumentos, escuta e consideração dos diferentes pontos de vista.'),
        createQuestion('Uma escola precisa escolher entre gastar com acessibilidade ou decoração. Que pergunta pode orientar a reflexão ética?', ['Qual escolha atende melhor às necessidades e aos direitos de toda a comunidade?', 'Qual opção parece mais bonita na fotografia?', 'Quem pode impedir que alguém dê opinião?', 'Como decidir sem considerar os estudantes?'], 0, 'A pergunta considera necessidades, direitos e o impacto das escolhas sobre a comunidade.'),
        createQuestion('Uma ação traz benefício para a maioria, mas prejudica gravemente um grupo pequeno. O que uma análise ética cuidadosa deve fazer?', ['Examinar tanto o benefício coletivo quanto os direitos e danos sofridos pelo grupo.', 'Ignorar o grupo menor porque é minoria.', 'Supor que toda maioria está sempre certa.', 'Deixar de discutir as consequências.'], 0, 'Uma análise ética não ignora danos: considera consequências e direitos de todos os envolvidos.'),
      ],
    ),
    createTopic(
      'Sócrates e o diálogo',
      'Sócrates ficou conhecido por conversar e fazer perguntas que ajudavam as pessoas a examinar suas próprias ideias.',
      'Explore o diálogo filosófico e a importância de pedir razões e esclarecer conceitos.',
      'Sócrates método socrático diálogo perguntas aula filosofia',
      [
        createQuestion('O método associado a Sócrates usava principalmente:', ['Perguntas e diálogo para examinar ideias.', 'Experimentos com foguetes.', 'Mapas de navegação.', 'Listas de respostas para decorar sem entender.'], 0, 'O diálogo e as perguntas ajudavam a examinar o que as pessoas pensavam.'),
        createQuestion('Em um diálogo filosófico, perguntar “o que você quer dizer com justiça?” ajuda a:', ['Esclarecer o significado de uma ideia.', 'Mudar de assunto sem motivo.', 'Impedir qualquer resposta.', 'Provar automaticamente que a ideia é falsa.'], 0, 'Pedir uma definição ajuda todos a entender melhor o conceito discutido.'),
        createQuestion('Por que reconhecer que não se sabe tudo pode ser útil numa investigação?', ['Porque abre espaço para aprender e rever ideias.', 'Porque impede qualquer pergunta.', 'Porque prova que todas as opiniões são iguais.', 'Porque dispensa procurar razões.'], 0, 'Reconhecer limites do próprio conhecimento é um ponto de partida para investigar.'),
        createQuestion('Uma pessoa afirma “essa regra é justa”. Qual pergunta ajuda a examinar melhor a afirmação?', ['“O que torna essa regra justa e para quem?”', '“Quem falou mais alto?”', '“Podemos parar de conversar?”', '“Quantas letras tem a frase?”'], 0, 'Perguntar pelos critérios e por quem é afetado esclarece a ideia de justiça defendida.'),
        createQuestion('Durante uma conversa, alguém percebe uma contradição no próprio argumento e revê sua posição. Isso mostra:', ['Uma revisão crítica das próprias ideias.', 'Que perguntar é sempre errado.', 'Que o diálogo não ajuda a pensar.', 'Que toda conclusão deve ser permanente.'], 0, 'Rever uma ideia diante de um bom argumento faz parte de uma investigação crítica.'),
        createQuestion('Qual postura torna um diálogo filosófico mais produtivo?', ['Escutar, definir os termos e justificar as afirmações.', 'Interromper e repetir a própria opinião.', 'Evitar qualquer explicação.', 'Aceitar uma ideia apenas pela autoridade de quem a disse.'], 0, 'Escuta, clareza e razões permitem que as ideias sejam examinadas em conjunto.'),
      ],
    ),
  ],
  sociologia: [
    createTopic(
      'Socialização',
      'A socialização é o processo pelo qual aprendemos formas de convivência, valores e costumes ao longo da vida.',
      'Veja como família, escola, amizades e outros grupos participam desse processo.',
      'socialização sociologia aula ensino médio família escola',
      introductoryQuestions.sociologia,
    ),
    createTopic(
      'Cultura e diversidade',
      'Cultura reúne práticas, conhecimentos e valores que são aprendidos e compartilhados por grupos.',
      'Reflita sobre diversidade cultural, mudanças e respeito às diferenças.',
      'cultura diversidade cultural sociologia aula ensino médio',
      [
        createQuestion('Na Sociologia, cultura inclui:', ['Costumes, conhecimentos e práticas aprendidos e compartilhados.', 'Somente obras de museu.', 'Características iguais e imutáveis de todos os povos.', 'Apenas regras escritas em leis.'], 0, 'Cultura inclui práticas e conhecimentos compartilhados, não só arte ou leis.'),
        createQuestion('Uma língua pode mudar ao longo do tempo porque:', ['As pessoas criam usos e expressões nas relações sociais.', 'A cultura nunca se transforma.', 'As palavras mudam apenas por causa do clima.', 'Cada geração fala exatamente da mesma forma.'], 0, 'A língua é parte da cultura e se transforma com os usos e as interações entre as pessoas.'),
        createQuestion('O que significa diversidade cultural?', ['A existência de diferentes práticas e modos de vida entre grupos.', 'Que todos os grupos têm os mesmos costumes.', 'Que uma cultura é sempre superior às outras.', 'Que as culturas não podem entrar em contato.'], 0, 'Diversidade cultural reconhece diferentes modos de viver, criar e compreender o mundo.'),
        createQuestion('Uma prática cultural diferente da sua deve ser entendida:', ['Considerando seu contexto, sem presumir que seja inferior.', 'Como errada por ser diferente.', 'Sem ouvir as pessoas que a praticam.', 'Como prova de que todas as culturas são idênticas.'], 0, 'Conhecer o contexto ajuda a compreender práticas sem transformar diferenças em hierarquias.'),
        createQuestion('Uma festa de bairro mistura música de várias regiões do país. O que esse exemplo pode mostrar?', ['Culturas podem trocar referências e se transformar.', 'Culturas ficam sempre isoladas.', 'Uma troca apaga todas as diferenças.', 'Música não tem relação com cultura.'], 0, 'Trocas e encontros entre grupos podem criar novas expressões culturais.'),
        createQuestion('Por que a Sociologia evita explicar costumes como se fossem naturais e iguais em todos os lugares?', ['Porque muitos costumes são aprendidos e variam conforme o contexto social e histórico.', 'Porque costumes não existem.', 'Porque todas as pessoas vivem na mesma sociedade.', 'Porque a cultura não muda.'], 0, 'Comparar contextos mostra que práticas e costumes são aprendidos e podem variar no tempo e no espaço.'),
      ],
    ),
    createTopic(
      'Normas e instituições sociais',
      'Normas orientam a convivência, e instituições como escola, família e Estado organizam partes da vida social.',
      'Entenda como regras são construídas, aplicadas e transformadas nas sociedades.',
      'normas sociais instituições sociais sociologia aula ensino médio',
      [
        createQuestion('Uma norma social é:', ['Uma expectativa ou regra que orienta a convivência em um grupo.', 'Uma lei da natureza.', 'Uma característica que todos herdam ao nascer.', 'Um fenômeno exclusivo da internet.'], 0, 'Normas sociais são expectativas e regras que orientam comportamentos coletivos.'),
        createQuestion('Qual é um exemplo de instituição social?', ['A escola.', 'Uma nuvem passageira.', 'Uma rocha.', 'Uma estrela.'], 0, 'A escola é uma instituição que organiza práticas de educação e convivência.'),
        createQuestion('As normas sociais:', ['Podem variar entre grupos e mudar com o tempo.', 'São sempre idênticas em todos os países.', 'Nunca são discutidas.', 'Existem apenas quando estão escritas.'], 0, 'Normas variam entre sociedades e também podem ser transformadas historicamente.'),
        createQuestion('Uma regra da escola é debatida e modificada após ouvir estudantes. O que isso mostra?', ['Normas podem ser questionadas e transformadas por grupos sociais.', 'Nenhuma regra pode mudar.', 'A escola deixou de ser uma instituição.', 'Toda mudança acontece sem participação.'], 0, 'O debate mostra que regras são produzidas socialmente e podem ser revistas.'),
        createQuestion('Por que uma mesma regra pode ser aplicada de maneira desigual?', ['Relações de poder e desigualdades podem influenciar sua aplicação.', 'Porque as regras não têm nenhum efeito.', 'Porque todos os grupos têm sempre os mesmos recursos.', 'Porque a sociedade não possui instituições.'], 0, 'Analisar relações de poder ajuda a perceber por que regras podem afetar grupos de forma desigual.'),
        createQuestion('Ao estudar uma instituição, qual pergunta sociológica é útil?', ['Quais funções ela cumpre e como suas regras afetam grupos diferentes?', 'Qual é a cor favorita de cada pessoa?', 'Como evitar comparar situações?', 'Por que toda instituição deve permanecer igual?'], 0, 'A Sociologia investiga funções, regras e efeitos das instituições sobre diferentes grupos.'),
      ],
    ),
  ],
  astronomia: [
    createTopic(
      'Sistema Solar',
      'O Sistema Solar reúne o Sol, os planetas e outros corpos celestes ligados pela gravidade.',
      'Revise a diferença entre planetas, estrelas e satélites naturais.',
      'astronomia Sistema Solar planetas aula ensino médio',
      introductoryQuestions.astronomia,
    ),
    createTopic(
      'Terra, Lua e movimentos',
      'Os movimentos da Terra e da Lua ajudam a explicar dias, anos, estações e fases lunares.',
      'Veja como rotação, translação e órbitas aparecem em fenômenos observados aqui da Terra.',
      'rotação translação fases da Lua estações do ano aula astronomia',
      [
        createQuestion('A rotação da Terra é o movimento que ajuda a explicar:', ['A alternância entre dia e noite.', 'A formação de novas estrelas.', 'As fases de todos os planetas.', 'O desaparecimento da gravidade.'], 0, 'A Terra gira em torno do próprio eixo, alternando as regiões iluminadas e escuras.'),
        createQuestion('A translação da Terra é o movimento que ela faz:', ['Ao redor do Sol.', 'Em torno da própria Lua.', 'Ao redor de Marte.', 'Parada no espaço.'], 0, 'A Terra percorre uma órbita ao redor do Sol; esse movimento é chamado de translação.'),
        createQuestion('O que, junto com a translação, explica principalmente as estações do ano?', ['A inclinação do eixo da Terra.', 'A distância da Lua até as nuvens.', 'A mudança de tamanho do Sol.', 'O movimento diário das marés.'], 0, 'A inclinação do eixo terrestre muda a incidência de luz solar nos hemisférios durante a órbita.'),
        createQuestion('Por que vemos diferentes fases da Lua?', ['Porque vemos porções diferentes de sua metade iluminada pelo Sol durante a órbita.', 'Porque a Lua muda de formato toda semana.', 'Porque o Sol apaga partes da Lua.', 'Porque a sombra da Terra cobre a Lua a cada noite.'], 0, 'A posição relativa entre Sol, Terra e Lua muda a porção iluminada que conseguimos observar.'),
        createQuestion('Um eclipse lunar acontece quando:', ['A Terra fica entre o Sol e a Lua, projetando sua sombra na Lua.', 'A Lua fica entre o Sol e a Terra e bloqueia o Sol.', 'O Sol fica entre a Terra e a Lua.', 'A Lua deixa de refletir luz para sempre.'], 0, 'No eclipse lunar, a Terra passa entre o Sol e a Lua, e sua sombra pode atingir a Lua.'),
        createQuestion('Por que não há eclipse lunar em toda Lua cheia?', ['Porque a órbita da Lua é inclinada em relação ao plano da órbita terrestre.', 'Porque a Lua só reflete luz no inverno.', 'Porque a Terra para de girar na Lua cheia.', 'Porque o Sol fica mais distante a cada mês.'], 0, 'Na maioria das Luas cheias, a Lua passa acima ou abaixo do alinhamento exato necessário para um eclipse.'),
      ],
    ),
    createTopic(
      'Estrelas e galáxias',
      'Estrelas produzem luz, e galáxias reúnem grandes conjuntos de estrelas, gás e poeira.',
      'Conheça as distâncias astronômicas e a organização de estrelas em galáxias.',
      'estrelas galáxias ano-luz astronomia aula ensino médio',
      [
        createQuestion('Uma estrela é um corpo celeste que:', ['Produz luz e energia próprias.', 'Reflete apenas a luz da Lua.', 'É sempre menor que um planeta.', 'Orbita necessariamente a Terra.'], 0, 'Estrelas produzem energia e emitem luz própria, como o Sol.'),
        createQuestion('O que é uma galáxia?', ['Um grande conjunto de estrelas, gás e poeira ligado pela gravidade.', 'Um único planeta com vários continentes.', 'Uma nuvem que fica dentro da atmosfera terrestre.', 'Uma constelação formada por apenas três estrelas.'], 0, 'Galáxias são grandes sistemas que reúnem estrelas e outros componentes ligados pela gravidade.'),
        createQuestion('Ano-luz é uma unidade de:', ['Distância.', 'Tempo de vida de uma estrela.', 'Temperatura.', 'Brilho aparente.'], 0, 'Ano-luz é a distância percorrida pela luz em um ano.'),
        createQuestion('Quando observamos uma estrela muito distante, sua luz pode ter partido de lá:', ['Há muitos anos, então a vemos como era no passado.', 'No mesmo instante em que a recebemos.', 'Somente durante um eclipse.', 'Depois de passar pela Lua.'], 0, 'A luz leva tempo para viajar; por isso, observar objetos distantes é observar luz emitida no passado.'),
        createQuestion('Por que o Sol parece maior e mais brilhante no céu do que outras estrelas?', ['Porque está muito mais perto da Terra do que elas.', 'Porque é o único corpo que produz luz.', 'Porque as outras estrelas não têm tamanho.', 'Porque a atmosfera apaga todas as estrelas.'], 0, 'O Sol parece maior e mais brilhante principalmente por estar muito mais próximo de nós.'),
        createQuestion('Se uma galáxia está a 2 milhões de anos-luz, o que isso indica?', ['A luz dela leva cerca de 2 milhões de anos para chegar até nós.', 'Ela tem exatamente 2 milhões de estrelas.', 'Ela está a 2 milhões de quilômetros.', 'Ela completa uma órbita em 2 milhões de dias.'], 0, 'A distância em anos-luz indica quanto tempo a luz leva para percorrer o caminho até nós.'),
      ],
    ),
  ],
  python: [
    createTopic(
      'Variáveis e print',
      'Variáveis guardam valores, e o comando print() mostra informações na tela.',
      'Comece com texto, números e operações simples em Python.',
      'Python para iniciantes variáveis print aula português',
      introductoryQuestions.python,
    ),
    createTopic(
      'Condições com if',
      'O comando if permite que o programa escolha o que fazer de acordo com uma condição.',
      'Veja como comparações e respostas verdadeiro ou falso controlam o fluxo do programa.',
      'Python iniciante if else condições aula português',
      [
        createQuestion('O que será mostrado?\n\nidade = 18\nif idade >= 18:\n    print("Maior")', ['Maior', 'Menor', 'idade', 'Nada.'], 0, 'A condição 18 >= 18 é verdadeira, então o programa mostra “Maior”.'),
        createQuestion('Qual operador verifica se dois valores são iguais em Python?', ['=', '==', '!=', '>='], 1, 'O operador == compara dois valores. Um único = é usado para atribuir um valor.'),
        createQuestion('O que será exibido?\n\nnota = 5\nif nota >= 6:\n    print("Aprovado")\nelse:\n    print("Estudar")', ['Aprovado', 'Estudar', '5', 'Aprovado e Estudar'], 1, 'Como 5 não é maior ou igual a 6, o programa executa o bloco else.'),
        createQuestion('Qual condição verifica se a temperatura é menor que 10?', ['temperatura = 10', 'temperatura < 10', 'temperatura > 10', 'temperatura == 10'], 1, 'O operador < verifica se o valor à esquerda é menor que o valor à direita.'),
        createQuestion('O que aparece na tela?\n\nsaldo = 100\nif saldo >= 50:\n    print("Compra possível")\nelse:\n    print("Saldo baixo")', ['Saldo baixo', 'Compra possível', '100 >= 50', 'Nada.'], 1, 'A condição 100 >= 50 é verdadeira, então aparece “Compra possível”.'),
        createQuestion('Uma condição precisa resultar em qual tipo de valor para que o if decida qual bloco executar?', ['Verdadeiro ou falso.', 'Somente texto.', 'Sempre um número negativo.', 'Um nome de arquivo.'], 0, 'O if avalia uma condição lógica, que resulta em verdadeiro ou falso.'),
      ],
    ),
    createTopic(
      'Repetições com for e while',
      'Laços de repetição executam um bloco de código mais de uma vez.',
      'Conheça os comandos for e while para repetir tarefas sem copiar o mesmo código.',
      'Python for while laços de repetição aula para iniciantes',
      [
        createQuestion('Quantas vezes o código roda?\n\nfor i in range(3):\n    print("Oi")', ['Uma vez.', 'Duas vezes.', 'Três vezes.', 'Quatro vezes.'], 2, 'range(3) gera três valores: 0, 1 e 2. Por isso, o bloco roda três vezes.'),
        createQuestion('O que faz um laço de repetição?', ['Executa um bloco de código várias vezes.', 'Apaga sempre o programa inteiro.', 'Transforma qualquer texto em número.', 'Abre uma página da internet automaticamente.'], 0, 'Um laço repete um bloco de código conforme a sequência ou a condição definida.'),
        createQuestion('Quais valores são produzidos por range(2, 5)?', ['2, 3 e 4.', '2, 3, 4 e 5.', '1, 2, 3, 4 e 5.', 'Somente 5.'], 0, 'O início é incluído e o limite final não: range(2, 5) produz 2, 3 e 4.'),
        createQuestion('O que pode acontecer se a condição de um while nunca se tornar falsa?', ['O laço pode continuar sem parar.', 'O programa sempre termina imediatamente.', 'O computador transforma o while em for.', 'A condição deixa de existir.'], 0, 'Se nada alterar a condição para torná-la falsa, o while pode ficar em repetição indefinida.'),
        createQuestion('O que será mostrado?\n\nfor numero in range(1, 4):\n    print(numero)', ['1, 2 e 3, um por linha.', '0, 1, 2, 3 e 4.', 'Somente 4.', '1, 2 e 3 na mesma variável.'], 0, 'range(1, 4) gera 1, 2 e 3; o print mostra cada valor em uma linha.'),
        createQuestion('Qual situação combina com um while?', ['Repetir enquanto uma condição continuar verdadeira.', 'Executar um código somente quando o computador liga.', 'Comparar dois textos sem condição.', 'Guardar vários dados em uma variável automaticamente.'], 0, 'while é útil quando a repetição depende de uma condição que pode mudar durante o programa.'),
      ],
    ),
  ],
  politica: [
    createTopic(
      'Política no dia a dia',
      'Política também acontece quando uma comunidade conversa, escolhe prioridades e decide como cuidar do que é de todos.',
      'Entenda como decisões coletivas aparecem na escola, no bairro e nos serviços públicos.',
      'política cidadania brasileira participação social aula ensino médio',
      [
        createQuestion('Uma comunidade pede mais iluminação em uma praça pública. Essa ação se relaciona à política porque:', ['A comunidade está discutindo uma necessidade coletiva.', 'A praça deixa de ser um espaço público.', 'Só assuntos de partidos podem ser políticos.', 'Iluminação não afeta a vida em sociedade.'], 0, 'A discussão sobre um espaço usado por todos envolve escolhas e necessidades coletivas.'),
        createQuestion('Qual situação é um exemplo de participação cidadã no bairro?', ['Moradores participam de uma reunião para apresentar problemas da região.', 'Uma pessoa impede outras de usar a praça.', 'Um grupo decide tudo sem ouvir ninguém.', 'Uma família escolhe o que vai jantar.'], 0, 'Reuniões e consultas públicas são espaços em que moradores podem apresentar demandas.'),
        createQuestion('Quando a prefeitura organiza a coleta de lixo, ela está:', ['Oferecendo um serviço público que afeta a comunidade.', 'Criando uma regra para outros países.', 'Substituindo todas as decisões dos moradores.', 'Tratando de um assunto sem impacto coletivo.'], 0, 'A coleta de lixo é um serviço público municipal que influencia a vida coletiva.'),
        createQuestion('Por que ouvir diferentes moradores pode melhorar uma decisão sobre o transporte do bairro?', ['Porque as pessoas podem ter necessidades e trajetos diferentes.', 'Porque toda opinião precisa ser aceita sem debate.', 'Porque apenas uma pessoa usa transporte público.', 'Porque o transporte não envolve escolhas coletivas.'], 0, 'Ouvir grupos diferentes ajuda a perceber necessidades variadas e a avaliar alternativas.'),
        createQuestion('A escola cria um grêmio estudantil para que alunos debatam melhorias. O grêmio é uma forma de:', ['Organização e participação coletiva.', 'Eleição obrigatória de um prefeito.', 'Serviço privado de transporte.', 'Proibição de diálogo.'], 0, 'O grêmio organiza estudantes para discutir propostas e representar interesses do grupo.'),
        createQuestion('Uma decisão pública deve ser explicada à população principalmente para:', ['Dar transparência e permitir que as pessoas acompanhem as escolhas.', 'Impedir qualquer pergunta sobre o assunto.', 'Garantir que todos concordem automaticamente.', 'Evitar que existam registros da decisão.'], 0, 'A transparência permite conhecer, acompanhar e questionar decisões públicas.'),
      ],
    ),
    createTopic(
      'Estado brasileiro e os três poderes',
      'No Brasil, responsabilidades públicas são distribuídas entre União, estados, municípios e instituições com funções diferentes.',
      'Veja como Executivo, Legislativo e Judiciário atuam e por que nenhum deles deve concentrar todas as funções.',
      'três poderes Brasil executivo legislativo judiciário aula cidadania',
      [
        createQuestion('Qual é uma função típica do Poder Legislativo?', ['Debater e elaborar leis, além de fiscalizar o Executivo.', 'Julgar todos os processos do país.', 'Administrar sozinho todos os serviços públicos.', 'Organizar diretamente as aulas de cada escola.'], 0, 'O Legislativo, formado por representantes eleitos, cria leis e fiscaliza ações do Executivo.'),
        createQuestion('No município, quem chefia o Poder Executivo?', ['O prefeito.', 'O vereador.', 'O juiz.', 'O senador.'], 0, 'O prefeito é o chefe do Executivo municipal; vereadores integram o Legislativo local.'),
        createQuestion('Qual é uma função do Poder Judiciário?', ['Julgar conflitos e aplicar as leis em casos concretos.', 'Criar o orçamento de cada família.', 'Administrar todas as escolas municipais.', 'Substituir as eleições.'], 0, 'O Judiciário analisa conflitos e aplica as leis, respeitando a Constituição.'),
        createQuestion('Qual serviço costuma estar sob responsabilidade municipal?', ['Manutenção de ruas locais e organização de serviços como a coleta de lixo.', 'Defesa das fronteiras nacionais.', 'Emissão de moeda brasileira.', 'Relações diplomáticas com outros países.'], 0, 'Prefeituras cuidam de vários serviços locais, embora responsabilidades públicas possam ser compartilhadas.'),
        createQuestion('Por que as funções do Estado são distribuídas entre diferentes poderes?', ['Para organizar responsabilidades e evitar a concentração de poder.', 'Para impedir que existam leis.', 'Para eliminar a participação da população.', 'Para deixar todas as decisões nas mãos de uma só pessoa.'], 0, 'A separação de poderes cria funções distintas e mecanismos de controle entre instituições.'),
        createQuestion('Uma lei aprovada por representantes ainda precisa respeitar:', ['A Constituição e os direitos garantidos por ela.', 'A vontade de uma única empresa.', 'As regras de um município estrangeiro.', 'Somente a opinião de quem propôs a lei.'], 0, 'A Constituição é a lei fundamental do país e estabelece limites e direitos que as leis devem respeitar.'),
      ],
    ),
    createTopic(
      'Eleições e participação',
      'Eleições escolhem representantes, mas a vida democrática também envolve informação, debate e acompanhamento das decisões.',
      'Conheça o voto no Brasil e outras formas de participar sem depender de partidos ou campanhas.',
      'eleições voto democracia participação cidadã Brasil aula',
      [
        createQuestion('Nas eleições, o voto serve para:', ['Escolher representantes e, em alguns casos, decidir sobre consultas previstas em lei.', 'Substituir todas as leis do país.', 'Garantir que o representante nunca seja questionado.', 'Escolher diretamente cada servidor público.'], 0, 'O voto escolhe representantes; consultas populares também podem tratar de decisões específicas.'),
        createQuestion('Qual atitude ajuda a escolher com mais informação?', ['Comparar propostas e consultar fontes confiáveis sobre os candidatos.', 'Compartilhar qualquer mensagem sem verificar.', 'Escolher apenas pelo número de seguidores.', 'Evitar conhecer as funções do cargo.'], 0, 'Conhecer propostas, fontes e responsabilidades do cargo ajuda a avaliar escolhas eleitorais.'),
        createQuestion('Além do voto, qual é uma forma de participação democrática?', ['Participar de audiências públicas e conselhos da comunidade.', 'Impedir que outras pessoas falem.', 'Destruir documentos públicos.', 'Deixar de acompanhar decisões que afetam o bairro.'], 0, 'Audiências e conselhos podem aproximar a população de debates sobre políticas públicas.'),
        createQuestion('No Brasil, o voto é obrigatório para a maioria das pessoas alfabetizadas entre:', ['18 e 70 anos.', '16 e 17 anos.', 'Mais de 90 anos.', 'Todas as idades, sem exceção.'], 0, 'A Constituição estabelece voto obrigatório dos 18 aos 70 anos; para jovens de 16 e 17 e pessoas acima de 70, é facultativo.'),
        createQuestion('Por que acompanhar o trabalho de representantes depois da eleição?', ['Porque a população pode fiscalizar ações e cobrar compromissos públicos.', 'Porque representantes não precisam prestar contas.', 'Porque a eleição encerra a vida democrática.', 'Porque só o Judiciário pode conhecer decisões públicas.'], 0, 'A participação cidadã continua depois do voto, com acompanhamento, cobrança e debate.'),
        createQuestion('Uma notícia eleitoral circula em um grupo de mensagens. Antes de repassá-la, é melhor:', ['Checar a data, a origem e a confirmação em fontes confiáveis.', 'Repassar rapidamente para ser o primeiro.', 'Alterar o texto para parecer oficial.', 'Confiar apenas na quantidade de compartilhamentos.'], 0, 'Conferir origem e contexto reduz a circulação de desinformação.'),
      ],
    ),
  ],
  'historia-brasil': [
    createTopic(
      'Povos originários e seus territórios',
      'Muito antes da chegada dos portugueses, diferentes povos indígenas viviam em territórios diversos, com línguas, conhecimentos e organizações próprias.',
      'Estude a diversidade dos povos originários e evite tratar suas histórias como se fossem todas iguais.',
      'povos indígenas Brasil diversidade história aula ensino médio',
      [
        createQuestion('Antes da chegada dos portugueses, o território que hoje chamamos Brasil era:', ['Habitado por muitos povos indígenas, com diferentes línguas e modos de vida.', 'Uma região sem população.', 'O território de um único povo com uma só língua.', 'Um país com as fronteiras atuais.'], 0, 'Havia numerosos povos e sociedades, diversos entre si; as fronteiras nacionais atuais ainda não existiam.'),
        createQuestion('Por que é mais correto falar em “povos indígenas” no plural?', ['Porque há muitos povos, com línguas, histórias e culturas próprias.', 'Porque todos têm exatamente os mesmos costumes.', 'Porque a palavra no plural indica que não existem diferenças.', 'Porque só existiu um povo em cada região.'], 0, 'O plural reconhece a diversidade e a existência contemporânea de diferentes povos indígenas.'),
        createQuestion('O conhecimento indígena sobre plantas e ambientes pode ser entendido como:', ['Conhecimento construído por observação, experiência e transmissão entre gerações.', 'Uma prática sem relação com o território.', 'Uma informação que nunca pode ser estudada.', 'Uma característica igual em todos os povos.'], 0, 'Muitos conhecimentos se desenvolvem em relações específicas com os territórios e são transmitidos entre gerações.'),
        createQuestion('Qual afirmação sobre os povos indígenas hoje é correta?', ['Eles fazem parte do Brasil contemporâneo e têm diferentes realidades e reivindicações.', 'Deixaram de existir depois da colonização.', 'Vivem todos da mesma maneira e no mesmo lugar.', 'Sua história termina nos livros sobre o período colonial.'], 0, 'Povos indígenas estão presentes hoje, com diversidade, direitos e experiências contemporâneas.'),
        createQuestion('A demarcação de terras indígenas está ligada, entre outros aspectos, a:', ['Direitos territoriais, modos de vida e proteção de comunidades.', 'Uma separação entre história e território.', 'A criação de fronteiras internacionais.', 'A proibição de qualquer cultura brasileira.'], 0, 'O território é importante para direitos, organização social e continuidade de comunidades indígenas.'),
        createQuestion('Ao estudar uma narrativa indígena, qual cuidado é importante?', ['Identificar o povo e o contexto, sem apresentar uma história como representação de todos.', 'Supor que todas as narrativas são iguais.', 'Tratá-la como se não tivesse autoria ou conhecimento.', 'Considerar que só fontes europeias podem contar o passado.'], 0, 'Contextualizar autoria e povo evita generalizações e amplia as perspectivas históricas.'),
      ],
    ),
    createTopic(
      'Brasil colonial: trabalho, encontros e resistência',
      'A colonização portuguesa transformou territórios e sociedades; também envolveu escravização, conflitos, resistência e criação cultural.',
      'Conheça diferentes experiências indígenas, africanas e europeias durante o período colonial.',
      'Brasil colonial povos indígenas africanos escravidão resistência aula história',
      [
        createQuestion('A produção de açúcar no Brasil colonial foi baseada principalmente:', ['No trabalho de pessoas escravizadas, sobretudo africanas, dentro de uma economia colonial.', 'No trabalho assalariado de todas as pessoas envolvidas.', 'Em fábricas movidas a eletricidade.', 'Em uma economia sem comércio com a Europa.'], 0, 'A produção açucareira colonial se apoiou na escravização, especialmente de africanos trazidos à força.'),
        createQuestion('Os quilombos foram importantes porque:', ['Reuniram pessoas que resistiam à escravidão e construíam formas próprias de organização.', 'Eram fábricas criadas pelo governo português.', 'Impediam qualquer forma de vida comunitária.', 'Existiram somente depois da abolição.'], 0, 'Quilombos foram espaços diversos de resistência e organização de pessoas que escapavam da escravidão e de seus descendentes.'),
        createQuestion('Como os povos indígenas reagiram à colonização?', ['De maneiras variadas, incluindo negociações, alianças, deslocamentos e resistências.', 'Todos aceitaram as mesmas regras sem conflito.', 'Deixaram de existir imediatamente.', 'Apenas participaram das decisões portuguesas.'], 0, 'As respostas foram diversas conforme povos, lugares e momentos históricos; não houve uma única experiência.'),
        createQuestion('A diáspora africana para as Américas aconteceu principalmente por:', ['Deslocamento forçado de pessoas escravizadas pelo tráfico atlântico.', 'Viagens turísticas voluntárias organizadas por governos.', 'Uma migração sem relação com o trabalho.', 'Mudanças causadas pela industrialização do século XX.'], 0, 'Milhões de africanos foram sequestrados e transportados à força pelo tráfico transatlântico de pessoas escravizadas.'),
        createQuestion('Qual exemplo mostra contribuições africanas e afro-brasileiras na formação cultural do país?', ['Expressões diversas na música, na culinária, nas religiões, nas línguas e nas festas.', 'A ausência de influência na sociedade brasileira.', 'Uma cultura única e igual em todas as regiões.', 'Somente práticas que começaram no século XXI.'], 0, 'Culturas africanas e afro-brasileiras contribuíram de muitas formas para a sociedade, com experiências variadas entre regiões e comunidades.'),
        createQuestion('Por que estudar a colonização a partir de diferentes fontes e grupos?', ['Para compreender relações de poder, experiências e resistências que narrativas únicas podem esconder.', 'Para concluir que todas as pessoas viveram a colonização da mesma forma.', 'Para apagar conflitos e desigualdades do período.', 'Para considerar apenas as decisões da Coroa portuguesa.'], 0, 'Diferentes fontes ajudam a reconhecer experiências e relações de poder variadas, inclusive de grupos pouco registrados por escrito.'),
      ],
    ),
    createTopic(
      'Independência, abolição e República',
      'A independência, o fim legal da escravidão e a Proclamação da República foram mudanças importantes, mas não eliminaram as desigualdades de uma vez.',
      'Organize datas e acontecimentos e reflita sobre a ampliação dos direitos no Brasil.',
      'independência abolição proclamação da república Brasil aula história',
      [
        createQuestion('Em que ano foi proclamada a Independência do Brasil?', ['1822.', '1888.', '1889.', '1930.'], 0, 'A Independência foi proclamada em 1822; o processo político teve disputas e não transformou toda a sociedade de imediato.'),
        createQuestion('A Lei Áurea, que aboliu legalmente a escravidão no Brasil, foi assinada em:', ['1822.', '1850.', '1888.', '1889.'], 2, 'A Lei Áurea foi assinada em 13 de maio de 1888, após séculos de escravização e muitas formas de resistência.'),
        createQuestion('A Proclamação da República aconteceu em:', ['1822.', '1888.', '1889.', '1932.'], 2, 'A República foi proclamada em 15 de novembro de 1889, um ano depois da abolição legal.'),
        createQuestion('Por que a abolição de 1888 não resolveu, por si só, as desigualdades raciais e sociais?', ['Porque a liberdade legal não veio acompanhada de igualdade de condições e reparação para a população liberta.', 'Porque a escravidão continuou sendo legal em todo o país.', 'Porque todas as pessoas receberam as mesmas terras e recursos.', 'Porque a população negra deixou de viver no Brasil.'], 0, 'O fim legal da escravidão não garantiu terra, renda ou igualdade; seus efeitos e desigualdades persistiram.'),
        createQuestion('Quem participou da luta contra a escravidão no Brasil?', ['Pessoas escravizadas e libertas, quilombolas, abolicionistas e diversos grupos sociais.', 'Somente a família imperial.', 'Apenas pessoas que viviam fora do Brasil.', 'Ninguém: a escravidão terminou sem resistência.'], 0, 'A abolição resultou de muitas lutas, fugas, organizações e mobilizações, com protagonismo de pessoas negras.'),
        createQuestion('Qual sequência coloca os acontecimentos em ordem cronológica?', ['Independência (1822), Abolição (1888), República (1889).', 'República (1822), Independência (1888), Abolição (1889).', 'Abolição (1822), República (1888), Independência (1889).', 'Independência (1889), República (1888), Abolição (1822).'], 0, 'A sequência correta é 1822, 1888 e 1889, respectivamente.'),
      ],
    ),
  ],
};

function renderStatus(status, questionIndex, level, correctStreak, score) {
  if (questionIndex >= totalQuestions) {
    status.textContent = `Tema concluído! ${score} de ${totalQuestions} acertos · Nível ${level}`;
    return;
  }

  const levelMessage = level === 3
    ? 'Nível máximo'
    : `${correctAnswersToAdvance - correctStreak} acerto${correctStreak === 1 ? '' : 's'} seguido${correctStreak === 1 ? '' : 's'} para subir`;
  status.textContent = `Questão ${questionIndex + 1} de ${totalQuestions} · Nível ${level} · ${levelMessage}`;
}

function setupActivity(activity) {
  const topics = topicBanks[activity.dataset.subject];
  const status = activity.querySelector('.activity-status');
  const progress = activity.querySelector('.progress-track');
  const progressFill = activity.querySelector('.progress-fill');
  const prompt = activity.querySelector('.question-prompt');
  const optionsContainer = activity.querySelector('.question-options');
  const feedback = activity.querySelector('.challenge-result');
  const continueButton = activity.querySelector('.quiz-continue');
  const activitySummaryLabel = activity.querySelector('.activity-summary-label');
  const summaryAction = activity.querySelector('.summary-action');
  const main = activity.closest('main');
  const topicTitle = main.querySelector('.topic-title');
  const topicOverview = main.querySelector('.topic-overview');
  const topicDirections = main.querySelector('.topic-directions');
  const lessonTitle = main.querySelector('.lesson-title');
  const lessonDescription = main.querySelector('.lesson-description');
  const lessonLink = main.querySelector('.lesson-link');
  const lessonCard = main.querySelector('.lesson-card');
  const activityInstructions = activity.querySelector('.activity-instructions');

  if (!topics || topics.length < 2 || topics.some((topic) => topic.questions.length !== totalQuestions)) {
    throw new Error(`Temas ou banco de questões inválidos para a matéria "${activity.dataset.subject}".`);
  }

  let topicIndex = 0;
  let currentTopic = topics[topicIndex];
  let questionIndex = 0;
  let level = 1;
  let correctStreak = 0;
  let score = 0;
  let continueAction = 'next-question';

  function renderTopic() {
    currentTopic = topics[topicIndex];
    topicTitle.textContent = currentTopic.title;
    topicOverview.textContent = currentTopic.overview;
    topicDirections.textContent = 'Assista à aula e depois abra a atividade. São 6 questões; a cada 2 acertos seguidos, você sobe de nível. Se errar, aparece uma explicação e você pode tentar de novo.';
    lessonTitle.textContent = `Antes da atividade: ${currentTopic.title}`;
    lessonDescription.textContent = currentTopic.lessonDescription;
    lessonLink.href = `https://www.youtube.com/results?search_query=${encodeURIComponent(currentTopic.videoSearch)}`;
    lessonLink.textContent = `Buscar aula de ${subjectLabels[activity.dataset.subject]} no YouTube ↗`;
    activityInstructions.textContent = `São 6 questões sobre ${currentTopic.title}. A cada 2 acertos seguidos, você avança de nível. Se errar, veja a explicação e tente outra vez.`;
  }

  function renderQuestion() {
    const question = currentTopic.questions[questionIndex];
    prompt.textContent = question.prompt;
    optionsContainer.replaceChildren();
    feedback.textContent = '';
    continueButton.hidden = true;
    progress.setAttribute('role', 'progressbar');
    progress.setAttribute('aria-valuemin', '0');
    progress.setAttribute('aria-valuemax', String(totalQuestions));
    progress.setAttribute('aria-valuenow', String(questionIndex));
    progressFill.style.width = `${(questionIndex / totalQuestions) * 100}%`;
    renderStatus(status, questionIndex, level, correctStreak, score);

    question.options.forEach((option, index) => {
      const button = document.createElement('button');
      button.className = 'answer-btn';
      button.type = 'button';
      button.textContent = option;
      button.addEventListener('click', () => checkAnswer(button, index, question));
      optionsContainer.append(button);
    });
  }

  function checkAnswer(selectedButton, selectedIndex, question) {
    const buttons = optionsContainer.querySelectorAll('.answer-btn');
    buttons.forEach((button) => {
      button.disabled = true;
    });

    if (selectedIndex !== question.correct) {
      correctStreak = 0;
      selectedButton.classList.add('wrong');
      feedback.textContent = `Ainda não. ${question.explanation} Tente mais uma vez; seu nível continua o mesmo.`;
      continueAction = 'retry';
      continueButton.textContent = 'Tentar de novo';
      continueButton.hidden = false;
      renderStatus(status, questionIndex, level, correctStreak, score);
      return;
    }

    selectedButton.classList.add('correct');
    score += 1;
    correctStreak += 1;
    let levelMessage = '';

    if (correctStreak === correctAnswersToAdvance && level < 3) {
      level += 1;
      correctStreak = 0;
      levelMessage = ` Você avançou para o nível ${level}!`;
    }

    feedback.textContent = `Acertou! ${question.explanation}${levelMessage}`;
    questionIndex += 1;
    renderStatus(status, questionIndex, level, correctStreak, score);
    progress.setAttribute('aria-valuenow', String(questionIndex));
    progressFill.style.width = `${(questionIndex / totalQuestions) * 100}%`;
    continueAction = questionIndex === totalQuestions ? 'show-result' : 'next-question';
    continueButton.textContent = questionIndex === totalQuestions ? 'Ver resultado' : 'Próxima questão';
    continueButton.hidden = false;
  }

  continueButton.addEventListener('click', () => {
    if (continueAction === 'retry') {
      continueAction = 'next-question';
      renderQuestion();
      return;
    }

    if (continueAction === 'show-result') {
      continueAction = 'next-topic';
      const nextTopicIndex = (topicIndex + 1) % topics.length;
      const nextTopic = topics[nextTopicIndex];
      feedback.textContent = `Você concluiu “${currentTopic.title}” com ${score} de ${totalQuestions} acertos. A próxima aula é “${nextTopic.title}”.`;
      activitySummaryLabel.textContent = `Tema concluído! Próximo: ${nextTopic.title}`;
      summaryAction.textContent = 'Ver aula';
      continueButton.textContent = topicIndex === topics.length - 1 ? 'Voltar ao primeiro tema' : 'Próximo tema';
      continueButton.hidden = false;
      return;
    }

    if (continueAction === 'next-topic') {
      topicIndex = (topicIndex + 1) % topics.length;
      questionIndex = 0;
      level = 1;
      correctStreak = 0;
      score = 0;
      continueAction = 'next-question';
      renderTopic();
      activitySummaryLabel.textContent = 'Depois da aula, pratique o que aprendeu';
      summaryAction.textContent = 'Começar';
      activity.open = false;
      renderQuestion();
      lessonCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    renderQuestion();
  });

  renderTopic();
  renderQuestion();
}

document.querySelectorAll('.activity-details').forEach(setupActivity);
