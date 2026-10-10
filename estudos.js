(() => {
  const storageKey = 'estuda-em-casa-study-v1';
  const defaultState = {
    completed: {},
    mistakes: {},
    favorites: [],
    notes: '',
    goal: 25,
    dailyMinutes: {},
    studyDays: [],
    planner: [],
    flashcards: {},
    theme: 'light',
  };
  const feedback = document.querySelector('.study-feedback');
  let state = loadState();
  let activeTimeStartedAt = document.hidden ? null : Date.now();
  let accumulatedActiveMillis = 0;
  let lastRecordedMinute = 0;
  let catalogVisibleCount = 24;

  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || '{}');
      return { ...defaultState, ...saved };
    } catch (error) {
      if (feedback) feedback.textContent = 'Os dados de estudo salvos não puderam ser lidos. Um novo espaço de estudo foi iniciado neste navegador.';
      return { ...defaultState };
    }
  }

  function saveState() {
    try {
      localStorage.setItem(storageKey, JSON.stringify(state));
      if (feedback) feedback.textContent = 'Progresso salvo neste navegador.';
    } catch (error) {
      if (feedback) feedback.textContent = 'Não foi possível salvar. Confira se o navegador permite armazenamento local e se há espaço disponível.';
    }
    renderDashboard();
  }

  function getCatalog() {
    const banks = window.studyTopicBanks || {};
    const catalog = Object.entries(banks).flatMap(([subject, topics]) => topics.map((topic, index) => ({
      subject,
      subjectLabel: topic.subjectLabel || subjectLabels[subject] || subject,
      subjectFile: subjectFiles[subject] || `${subject}.html`,
      title: topic.title,
      overview: topic.overview,
      description: topic.lessonDescription,
      videoSearch: topic.videoSearch,
      questions: topic.questions,
      level: index + 1,
      key: `${subject}:${topic.title}`,
    })));
    return catalog.concat(essayTopics.map((topic, index) => ({
      ...topic,
      subject: 'redacao',
      subjectLabel: subjectLabels.redacao,
      subjectFile: subjectFiles.redacao,
      level: index + 1,
      key: `redacao:${topic.title}`,
    })));
  }

  const subjectLabels = {
    matematica: 'Matemática', portugues: 'Português', ciencias: 'Ciências',
    historia: 'História', geografia: 'Geografia', filosofia: 'Filosofia',
    sociologia: 'Sociologia', astronomia: 'Astronomia', python: 'Programação em Python',
    politica: 'Política', 'historia-brasil': 'História do Brasil', redacao: 'Redação ENEM',
  };
  const subjectFiles = {
    matematica: 'matematica.html', portugues: 'portugues.html', ciencias: 'ciencias.html',
    historia: 'historia.html', geografia: 'geografia.html', filosofia: 'filosofia.html',
    sociologia: 'sociologia.html', astronomia: 'astronomia.html', python: 'programacao-python.html',
    politica: 'politica.html', 'historia-brasil': 'historia-do-brasil.html', redacao: 'redacao-enem.html',
  };

  const essayTopics = [
    {
      title: 'Tema, tese e estrutura',
      overview: 'Interprete o recorte temático, delimite o problema e apresente uma tese que responda à proposta.',
      description: 'Planeje introdução e argumentos antes de começar a escrever.',
      videoSearch: 'professor redação ENEM interpretação de tema tese introdução estrutura',
      anchor: 'structure-heading',
      questions: [
        { prompt: 'O que a tese faz na redação?', options: ['Apresenta o ponto de vista central sobre o tema.', 'Repete a coletânea inteira.', 'Substitui a conclusão.', 'Lista apenas o título.'], correct: 0, explanation: 'A tese apresenta a ideia central que o texto vai defender.' },
        { prompt: 'Antes de redigir, uma boa primeira etapa é:', options: ['Ler a proposta e identificar seu recorte.', 'Escrever uma conclusão sem conhecer o tema.', 'Copiar frases da coletânea.', 'Escolher um repertório sem relação com o assunto.'], correct: 0, explanation: 'Identificar o recorte ajuda a responder exatamente ao que a proposta pede.' },
        { prompt: 'A introdução deve:', options: ['Apresentar o tema e encaminhar a tese.', 'Trazer todos os argumentos em detalhes.', 'Ser uma proposta de intervenção completa.', 'Fugir do tema para chamar atenção.'], correct: 0, explanation: 'A introdução situa o assunto e apresenta o ponto de vista do texto.' },
      ],
    },
    {
      title: 'Argumentação e coesão',
      overview: 'Desenvolva argumentos com explicações, evidências e relações claras entre as ideias.',
      description: 'Organize parágrafos que sustentem a tese e use conectivos com sentido.',
      videoSearch: 'professora redação ENEM desenvolvimento argumentação repertório coesão parágrafos',
      anchor: 'competencies-heading',
      questions: [
        { prompt: 'Um argumento bem desenvolvido deve:', options: ['Explicar por que uma razão sustenta a tese.', 'Apresentar uma opinião sem justificativa.', 'Mudar de assunto no mesmo parágrafo.', 'Depender apenas de um conectivo.'], correct: 0, explanation: 'É preciso explicar a relação entre a razão, a evidência e a tese.' },
        { prompt: 'Para usar um repertório sociocultural, é importante:', options: ['Explicar como ele se relaciona ao tema.', 'Citar um nome famoso sem contexto.', 'Usar a mesma referência em qualquer tema.', 'Substituir a própria argumentação.'], correct: 0, explanation: 'Uma referência só fortalece o texto quando é pertinente e articulada ao argumento.' },
        { prompt: 'A coesão ajuda o leitor a:', options: ['Acompanhar a ligação entre as ideias.', 'Ignorar a tese.', 'Trocar argumentos por frases prontas.', 'Eliminar a conclusão.'], correct: 0, explanation: 'Recursos de coesão mostram como frases e parágrafos se conectam.' },
      ],
    },
    {
      title: 'Intervenção e conclusão',
      overview: 'Proponha medidas relacionadas ao problema, explicando ação, agente, meio, finalidade e detalhamento.',
      description: 'Aprenda a concluir a redação com uma proposta viável e respeitosa aos direitos humanos.',
      videoSearch: 'professor redação ENEM proposta intervenção agente ação meio finalidade detalhamento direitos humanos',
      anchor: 'intervention-heading',
      questions: [
        { prompt: 'Qual item identifica quem deve realizar uma medida?', options: ['Agente.', 'Repertório.', 'Tese.', 'Conectivo.'], correct: 0, explanation: 'O agente é quem tem responsabilidade ou condições para executar a ação.' },
        { prompt: 'Uma proposta de intervenção deve:', options: ['Relacionar-se ao problema e respeitar os direitos humanos.', 'Defender violência ou retirada de direitos.', 'Ser vaga e sem finalidade.', 'Contradizer a discussão do texto.'], correct: 0, explanation: 'A proposta precisa enfrentar o problema e respeitar os direitos humanos.' },
        { prompt: 'O detalhamento serve para:', options: ['Tornar mais concreta e clara uma parte da proposta.', 'Repetir a tese sem acrescentar informação.', 'Apagar o agente da ação.', 'Substituir a explicação do problema.'], correct: 0, explanation: 'Um detalhe concreto esclarece como, por quem ou para quem a proposta pode funcionar.' },
      ],
    },
  ];

  function encodeTopicUrl(item) {
    if (item.subject === 'redacao') return `${item.subjectFile}#${item.anchor}`;
    return `${item.subjectFile}?tema=${encodeURIComponent(item.title)}`;
  }

  function getDailyMinutes() {
    return Number(state.dailyMinutes[localDateKey()] || 0);
  }

  function recordMinutes(minutes) {
    if (minutes <= 0) return;
    const today = localDateKey();
    state.dailyMinutes[today] = (state.dailyMinutes[today] || 0) + minutes;
    if (!state.studyDays.includes(today)) state.studyDays.push(today);
    saveState();
  }

  function localDateKey(date = new Date()) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  function renderDashboard() {
    const statMinutes = document.querySelector('[data-stat="minutes"]');
    if (!statMinutes) return;
    const allMinutes = Object.values(state.dailyMinutes).reduce((sum, minutes) => sum + minutes, 0);
    statMinutes.textContent = `${allMinutes} min`;
    document.querySelector('[data-stat="completed"]').textContent = String(Object.keys(state.completed).length);
    document.querySelector('[data-stat="mistakes"]').textContent = String(Object.keys(state.mistakes).length);
    document.querySelector('[data-stat="streak"]').textContent = `${calculateStreak()} ${calculateStreak() === 1 ? 'dia' : 'dias'}`;
    const goal = Math.max(5, Number(state.goal) || 25);
    const progress = Math.min(100, Math.round((getDailyMinutes() / goal) * 100));
    document.querySelector('.study-progress-fill').style.width = `${progress}%`;
    document.querySelector('.study-progress-track').setAttribute('aria-valuenow', String(progress));
    document.querySelector('.goal-progress-label').textContent = `${getDailyMinutes()} de ${goal} min hoje`;
    document.querySelector('.achievement-row').replaceChildren(...buildAchievements(allMinutes));
    renderSubjectProgress();
  }

  function renderSubjectProgress() {
    const list = document.querySelector('.subject-progress-list');
    if (!list) return;
    list.replaceChildren(...Object.entries(window.studyTopicBanks || {}).map(([subject]) => {
      const label = subjectLabels[subject] || subject;
      const topics = (window.studyTopicBanks || {})[subject] || [];
      const completed = topics.filter((topic) => state.completed[`${subject}:${topic.title}`]).length;
      const wrapper = document.createElement('article');
      wrapper.className = 'subject-progress-item';
      const heading = document.createElement('div');
      heading.className = 'resource-heading';
      const title = document.createElement('h3');
      title.textContent = label;
      const count = document.createElement('span');
      count.textContent = `${completed} de ${topics.length || 3} temas`;
      heading.append(title, count);
      const track = document.createElement('div');
      track.className = 'study-progress-track';
      track.setAttribute('role', 'progressbar');
      track.setAttribute('aria-label', `Progresso em ${label}`);
      const fill = document.createElement('span');
      fill.className = 'study-progress-fill';
      const percent = topics.length ? Math.round((completed / topics.length) * 100) : 0;
      fill.style.width = `${percent}%`;
      track.setAttribute('aria-valuemin', '0');
      track.setAttribute('aria-valuemax', '100');
      track.setAttribute('aria-valuenow', String(percent));
      track.append(fill);
      wrapper.append(heading, track);
      return wrapper;
    }));
  }

  function calculateStreak() {
    const days = new Set(state.studyDays);
    const cursor = new Date();
    if (!days.has(localDateKey(cursor))) cursor.setDate(cursor.getDate() - 1);
    let streak = 0;
    while (days.has(localDateKey(cursor))) {
      streak += 1;
      cursor.setDate(cursor.getDate() - 1);
    }
    return streak;
  }

  function buildAchievements(minutes) {
    const milestones = [
      ['Primeiro passo', state.studyDays.length > 0, 'Registre seu primeiro dia de estudo.'],
      ['Mão na massa', Object.keys(state.completed).length >= 1, 'Conclua seu primeiro tema.'],
      ['Uma semana de ritmo', calculateStreak() >= 7, 'Estude em sete dias seguidos.'],
      ['Hora de estudo', minutes >= 60, 'Some uma hora de estudo.'],
    ];
    return milestones.map(([title, unlocked, description]) => {
      const badge = document.createElement('span');
      badge.className = `achievement-badge${unlocked ? ' is-unlocked' : ''}`;
      badge.textContent = `${unlocked ? '★' : '☆'} ${title}`;
      badge.title = description;
      return badge;
    });
  }

  function renderCatalog() {
    const results = document.querySelector('.catalog-results');
    if (!results) return;
    const catalog = getCatalog();
    const subjectFilter = document.querySelector('.catalog-subject').value;
    const favoritesOnly = document.querySelector('.catalog-favorites').value === 'saved';
    const levelFilter = document.querySelector('.catalog-level').value;
    const formatFilter = document.querySelector('.catalog-format').value;
    const terms = document.querySelector('.catalog-search').value.trim().toLocaleLowerCase('pt-BR').split(/\s+/u).filter(Boolean);
    const filtered = catalog.filter((item) => {
      const haystack = `${item.subjectLabel} ${item.title} ${item.overview} ${item.description}`.toLocaleLowerCase('pt-BR');
      return (!subjectFilter || item.subject === subjectFilter)
        && (!levelFilter || String(item.level) === levelFilter)
        && (!favoritesOnly || state.favorites.includes(item.key))
        && (!terms.length || terms.every((term) => haystack.includes(term)))
        ;
    });
    const selectedFormat = formatFilter;
    const resources = filtered.flatMap((item) => (selectedFormat
      ? [selectedFormat]
      : ['texto', 'video', 'audio', 'pdf', 'infografico', 'flashcard'])
      .map((type) => ({ item, type })));
    const cards = resources.slice(0, catalogVisibleCount)
      .map(({ item, type }) => createResourceCards(item, type)[0]);
    document.querySelector('.catalog-result-count').textContent = `${resources.length} ${resources.length === 1 ? 'material encontrado' : 'materiais encontrados'}. Nível do tema: ${itemLevelLabel(levelFilter)}.`;
    results.replaceChildren(...cards);
    if (resources.length > cards.length) {
      const showMore = document.createElement('button');
      showMore.type = 'button';
      showMore.className = 'ghost-btn catalog-show-more';
      showMore.textContent = `Mostrar mais (${resources.length - cards.length} restantes)`;
      showMore.addEventListener('click', () => {
        catalogVisibleCount += 24;
        renderCatalog();
      });
      results.append(showMore);
    }
    if (!resources.length) {
      const empty = document.createElement('p');
      empty.className = 'empty-state';
      empty.textContent = 'Não encontrei materiais com esses filtros. Tente outra busca ou selecione “Todos”.';
      results.append(empty);
    }
  }

  function itemLevelLabel(level) {
    return level ? ['Básico', 'Intermediário', 'Avançado'][Number(level) - 1] : 'todos';
  }

  function createResourceCards(item, format) {
    const types = format ? [format] : ['texto', 'video', 'audio', 'pdf', 'infografico', 'flashcard'];
    return types.map((type) => {
      const card = document.createElement('article');
      card.className = 'resource-card';
      card.dataset.subject = item.subject;
      card.dataset.level = String(item.level);
      const heading = document.createElement('div');
      heading.className = 'resource-heading';
      const title = document.createElement('h3');
      title.textContent = item.title;
      const tag = document.createElement('span');
      tag.className = 'resource-format-tag';
      tag.textContent = formatLabels[type];
      heading.append(title, tag);
      const subject = document.createElement('p');
      subject.className = 'resource-subject';
      subject.textContent = `${item.subjectLabel} · ${itemLevelLabel(String(item.level))}`;
      const content = createFormatContent(item, type);
      card.append(heading, subject, content);
      const actions = document.createElement('div');
      actions.className = 'resource-actions';
      const openLink = document.createElement('a');
      openLink.href = encodeTopicUrl(item);
      openLink.className = 'resource-open';
      openLink.textContent = 'Abrir tema';
      const favorite = document.createElement('button');
      favorite.type = 'button';
      favorite.className = 'favorite-toggle ghost-btn';
      favorite.setAttribute('aria-pressed', String(state.favorites.includes(item.key)));
      favorite.textContent = state.favorites.includes(item.key) ? '★ Salvo' : '☆ Salvar';
      favorite.addEventListener('click', () => toggleFavorite(item.key));
      actions.append(openLink, favorite);
      card.append(actions);
      return card;
    });
  }

  const formatLabels = {
    texto: 'Texto curto', video: 'Vídeo', audio: 'Áudio', pdf: 'PDF',
    infografico: 'Infográfico', flashcard: 'Flashcards',
  };

  function createFormatContent(item, type) {
    if (type === 'video') {
      const link = document.createElement('a');
      link.href = `https://www.youtube.com/results?search_query=${encodeURIComponent(item.videoSearch)}`;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = `Buscar aula: ${item.description}`;
      return link;
    }
    if (type === 'audio') {
      const wrapper = document.createElement('div');
      const paragraph = document.createElement('p');
      paragraph.textContent = `${item.overview} ${item.description}`;
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'ghost-btn read-aloud';
      button.textContent = 'Ouvir resumo';
      button.addEventListener('click', () => speakText(`${item.title}. ${paragraph.textContent}`));
      wrapper.append(paragraph, button);
      return wrapper;
    }
    if (type === 'pdf') {
      const wrapper = document.createElement('div');
      const paragraph = document.createElement('p');
      paragraph.textContent = 'Abra a ficha de estudo e use a opção “Salvar como PDF” na janela de impressão.';
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'ghost-btn print-resource';
      button.textContent = 'Imprimir ou salvar como PDF';
      button.addEventListener('click', () => printStudySheet(item));
      wrapper.append(paragraph, button);
      return wrapper;
    }
    if (type === 'infografico') return createInfographic(item);
    if (type === 'flashcard') {
      const card = document.createElement('p');
      card.textContent = `${item.questions.length} cartões de revisão com perguntas e explicações.`;
      return card;
    }
    const paragraph = document.createElement('p');
    paragraph.textContent = `${item.overview} ${item.description}`;
    return paragraph;
  }

  function speakText(text) {
    if (!('speechSynthesis' in window)) {
      feedback.textContent = 'A leitura em voz alta não está disponível neste navegador.';
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-BR';
    window.speechSynthesis.speak(utterance);
  }

  function printStudySheet(item) {
    const sheet = document.createElement('section');
    sheet.className = 'print-sheet';
    const title = document.createElement('h1');
    title.textContent = `${item.subjectLabel} · ${item.title}`;
    const overview = document.createElement('p');
    overview.textContent = item.overview;
    const description = document.createElement('p');
    description.textContent = item.description;
    const questions = document.createElement('ol');
    item.questions.forEach((question) => {
      const entry = document.createElement('li');
      entry.textContent = question.prompt;
      questions.append(entry);
    });
    sheet.append(title, overview, description, questions);
    document.body.append(sheet);
    window.print();
    sheet.remove();
  }

  function createInfographic(item) {
    const steps = document.createElement('ol');
    steps.className = 'mini-infographic';
    [item.overview, item.description, 'Pratique com as questões do tema e confira as explicações.'].forEach((text) => {
      const step = document.createElement('li');
      step.textContent = text;
      steps.append(step);
    });
    return steps;
  }

  function toggleFavorite(key) {
    state.favorites = state.favorites.includes(key)
      ? state.favorites.filter((favorite) => favorite !== key)
      : [...state.favorites, key];
    saveState();
    renderCatalog();
  }

  function saveMistake(event) {
    const { subject, topic, prompt, explanation } = event.detail;
    const key = `${subject}:${topic}:${prompt}`;
    state.mistakes[key] = { subject, topic, prompt, explanation, lastWrongAt: Date.now() };
    saveState();
  }

  function saveTopicCompletion(event) {
    const { subject, topic } = event.detail;
    state.completed[`${subject}:${topic}`] = { completedAt: Date.now() };
    saveState();
  }

  function addStudyActivity() {
    const activeMillis = accumulatedActiveMillis
      + (activeTimeStartedAt === null ? 0 : Date.now() - activeTimeStartedAt);
    const totalMinutes = Math.floor(activeMillis / 60000);
    const minutesToRecord = totalMinutes - lastRecordedMinute;
    if (minutesToRecord > 0) {
      lastRecordedMinute = totalMinutes;
      recordMinutes(minutesToRecord);
    }
  }

  function updateActiveTime() {
    if (document.hidden && activeTimeStartedAt !== null) {
      accumulatedActiveMillis += Date.now() - activeTimeStartedAt;
      activeTimeStartedAt = null;
      addStudyActivity();
      const recordedMillis = lastRecordedMinute * 60_000;
      accumulatedActiveMillis -= recordedMillis;
      lastRecordedMinute = 0;
      return;
    }
    if (!document.hidden && activeTimeStartedAt === null) activeTimeStartedAt = Date.now();
  }

  function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    state.theme = theme;
    const toggle = document.querySelector('.theme-toggle');
    if (toggle) {
      toggle.setAttribute('aria-pressed', String(theme === 'dark'));
      toggle.textContent = theme === 'dark' ? 'Ativar tema claro' : 'Ativar modo escuro';
    }
  }

  function setupCatalog() {
    const subjectSelect = document.querySelector('.catalog-subject');
    const plannerSubject = document.querySelector('#planner-subject');
    const options = Object.entries(subjectLabels).map(([value, label]) => {
      const option = document.createElement('option');
      option.value = value;
      option.textContent = label;
      return option;
    });
    options.forEach((option) => {
      subjectSelect.append(option.cloneNode(true));
      plannerSubject.append(option.cloneNode(true));
    });
    document.querySelectorAll('.catalog-filters input, .catalog-filters select').forEach((control) => {
      const refreshCatalog = () => {
        catalogVisibleCount = 24;
        renderCatalog();
      };
      control.addEventListener('input', refreshCatalog);
      control.addEventListener('change', refreshCatalog);
    });
    renderCatalog();
  }

  function saveGoal() {
    state.goal = Math.min(300, Math.max(5, Number(document.querySelector('#daily-goal').value) || 25));
    document.querySelector('#daily-goal').value = String(state.goal);
    saveState();
  }

  function setupNotes() {
    const notes = document.querySelector('#study-notes');
    notes.value = state.notes;
    notes.addEventListener('input', () => {
      state.notes = notes.value;
      saveState();
    });
  }

  function renderPlanner() {
    const list = document.querySelector('.planner-list');
    list.replaceChildren();
    const existingReminder = document.querySelector('.planner-reminder');
    if (existingReminder) existingReminder.remove();
    state.planner.forEach((item, index) => {
      const row = document.createElement('li');
      const label = document.createElement('span');
      label.textContent = `${item.date} · ${subjectLabels[item.subject]}`;
      const remove = document.createElement('button');
      remove.type = 'button';
      remove.className = 'ghost-btn';
      remove.textContent = 'Remover';
      remove.setAttribute('aria-label', `Remover plano: ${label.textContent}`);
      remove.addEventListener('click', () => {
        state.planner.splice(index, 1);
        saveState();
        renderPlanner();
      });
      row.append(label, remove);
      list.append(row);
    });
    const today = localDateKey();
    const dueToday = state.planner.filter((item) => item.date === today);
    const reminder = document.createElement('p');
    reminder.className = 'planner-reminder';
    reminder.setAttribute('role', 'status');
    reminder.textContent = dueToday.length
      ? `Lembrete de hoje: ${dueToday.map((item) => subjectLabels[item.subject]).join(', ')}.`
      : 'Os planos marcados para hoje aparecem aqui como lembrete.';
    list.after(reminder);
  }

  function setupPlanner() {
    const dateInput = document.querySelector('#planner-date');
    dateInput.value = localDateKey();
    document.querySelector('.add-planner-item').addEventListener('click', () => {
      const date = dateInput.value;
      const subject = document.querySelector('#planner-subject').value;
      if (!date || !subject) {
        feedback.textContent = 'Escolha uma data e uma matéria para adicionar ao planner.';
        return;
      }
      state.planner.push({ date, subject });
      state.planner.sort((first, second) => first.date.localeCompare(second.date));
      saveState();
      renderPlanner();
    });
    renderPlanner();
  }

  function setupFlashcards() {
    const container = document.querySelector('.flashcard-review');
    const startButton = document.querySelector('.start-flashcards');
    let dueCards = [];
    let currentCard = null;
    let showingAnswer = false;
    startButton.addEventListener('click', () => {
      const now = Date.now();
      dueCards = getCatalog().flatMap((item) => item.questions.map((question, index) => {
        const key = `${item.subject}:${item.title}:${index}`;
        const schedule = state.flashcards[key] || { step: 0, nextReviewAt: 0 };
        return { item, question, index, key, schedule };
      })).filter(({ schedule }) => schedule.nextReviewAt <= now);
      container.hidden = false;
      showFlashcard();
    });

    function showFlashcard() {
      container.replaceChildren();
      if (!dueCards.length) {
        const done = document.createElement('p');
        done.textContent = 'Tudo revisado por enquanto. Volte mais tarde para a próxima rodada.';
        container.append(done);
        return;
      }
      currentCard = dueCards.shift();
      showingAnswer = false;
      const title = document.createElement('p');
      title.className = 'resource-subject';
      title.textContent = `${currentCard.item.subjectLabel} · ${currentCard.item.title}`;
      const prompt = document.createElement('p');
      prompt.className = 'flashcard-prompt';
      prompt.textContent = currentCard.question.prompt;
      const reveal = document.createElement('button');
      reveal.type = 'button';
      reveal.className = 'primary-btn';
      reveal.textContent = 'Mostrar resposta';
      reveal.addEventListener('click', () => {
        if (showingAnswer) return;
        showingAnswer = true;
        const answer = document.createElement('p');
        answer.className = 'flashcard-answer';
        answer.textContent = `${currentCard.question.options[currentCard.question.correct]} ${currentCard.question.explanation}`;
        container.insertBefore(answer, reveal);
        reveal.hidden = true;
        const actions = document.createElement('div');
        actions.className = 'tool-actions';
        actions.append(makeReviewButton('Ainda não lembrei', false), makeReviewButton('Lembrei', true));
        container.append(actions);
      });
      container.append(title, prompt, reveal);
    }

    function makeReviewButton(label, recalled) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = recalled ? 'primary-btn' : 'ghost-btn';
      button.textContent = label;
      button.addEventListener('click', () => {
        const step = recalled ? Math.min(4, currentCard.schedule.step + 1) : 0;
        const delays = [60_000, 600_000, 86_400_000, 259_200_000, 604_800_000];
        state.flashcards[currentCard.key] = { step, nextReviewAt: Date.now() + delays[step] };
        saveState();
        showFlashcard();
      });
      return button;
    }
  }

  function setupMockExam() {
    const container = document.querySelector('.mock-exam');
    let examQuestions = [];
    let index = 0;
    let score = 0;
    const startButton = document.querySelector('.start-mock-exam');
    startButton.addEventListener('click', () => {
      examQuestions = shuffle(getCatalog().flatMap((item) => item.questions.map((question) => ({ ...question, subject: item.subjectLabel, topic: item.title }))))
        .slice(0, 10);
      index = 0;
      score = 0;
      container.hidden = false;
      showMockQuestion();
    });

    function showMockQuestion() {
      container.replaceChildren();
      if (index >= examQuestions.length) {
        const result = document.createElement('p');
        result.textContent = `Simulado concluído: ${score} de ${examQuestions.length} acertos.`;
        container.append(result);
        return;
      }
      const question = examQuestions[index];
      const heading = document.createElement('p');
      heading.textContent = `Questão ${index + 1} de ${examQuestions.length} · ${question.subject} · ${question.topic}`;
      const prompt = document.createElement('p');
      prompt.textContent = question.prompt;
      container.append(heading, prompt);
      question.options.forEach((option, optionIndex) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'answer-btn';
        button.textContent = option;
        button.addEventListener('click', () => {
          const isCorrect = optionIndex === question.correct;
          if (isCorrect) score += 1;
          if (!isCorrect) window.dispatchEvent(new CustomEvent('study:mistake', {
            detail: { subject: question.subject, topic: question.topic, prompt: question.prompt, explanation: question.explanation },
          }));
          const explanation = document.createElement('p');
          explanation.className = 'challenge-result';
          explanation.textContent = `${isCorrect ? 'Acertou!' : 'Vamos revisar.'} ${question.explanation}`;
          const next = document.createElement('button');
          next.type = 'button';
          next.className = 'primary-btn';
          next.textContent = index === examQuestions.length - 1 ? 'Ver resultado' : 'Próxima questão';
          next.addEventListener('click', () => {
            index += 1;
            showMockQuestion();
          });
          container.append(explanation, next);
          container.querySelectorAll('.answer-btn').forEach((answerButton) => { answerButton.disabled = true; });
        });
        container.append(button);
      });
    }
  }

  function shuffle(items) {
    const shuffled = [...items];
    for (let index = shuffled.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
    }
    return shuffled;
  }

  function renderMistakes() {
    const container = document.querySelector('.mistake-review');
    container.replaceChildren();
    const mistakes = Object.entries(state.mistakes);
    if (!mistakes.length) {
      const empty = document.createElement('p');
      empty.textContent = 'Nenhum erro registrado por enquanto. As respostas erradas nos exercícios aparecem aqui.';
      container.append(empty);
    }
    mistakes.forEach(([key, mistake]) => {
      const entry = document.createElement('article');
      entry.className = 'mistake-entry';
      const title = document.createElement('h4');
      title.textContent = `${subjectLabels[mistake.subject] || mistake.subject} · ${mistake.topic}`;
      const prompt = document.createElement('p');
      prompt.textContent = mistake.prompt;
      const explanation = document.createElement('p');
      explanation.textContent = mistake.explanation;
      const clear = document.createElement('button');
      clear.type = 'button';
      clear.className = 'ghost-btn';
      clear.textContent = 'Marcar como revisado';
      clear.addEventListener('click', () => {
        delete state.mistakes[key];
        saveState();
        renderMistakes();
      });
      entry.append(title, prompt, explanation, clear);
      container.append(entry);
    });
    container.hidden = false;
  }

  function setupPomodoro() {
    const display = document.querySelector('.pomodoro-display');
    let secondsLeft = 25 * 60;
    let isBreak = false;
    let timerId = null;
    const renderTime = () => {
      display.textContent = `${String(Math.floor(secondsLeft / 60)).padStart(2, '0')}:${String(secondsLeft % 60).padStart(2, '0')}`;
    };
    document.querySelector('.pomodoro-start').addEventListener('click', (event) => {
      if (timerId) {
        window.clearInterval(timerId);
        timerId = null;
        event.currentTarget.textContent = 'Continuar';
        return;
      }
      event.currentTarget.textContent = 'Pausar';
      timerId = window.setInterval(() => {
        secondsLeft -= 1;
        renderTime();
        if (secondsLeft <= 0) {
          window.clearInterval(timerId);
          timerId = null;
          if (!isBreak) {
            isBreak = true;
            secondsLeft = 5 * 60;
            event.currentTarget.textContent = 'Começar pausa de 5 min';
            feedback.textContent = 'Boa! Sessão concluída. Faça uma pausa e, quando quiser, comece outra.';
          } else {
            isBreak = false;
            secondsLeft = 25 * 60;
            event.currentTarget.textContent = 'Começar';
            feedback.textContent = 'Pausa concluída. Quando quiser, comece uma nova sessão de foco.';
          }
          renderTime();
        }
      }, 1000);
    });
    document.querySelector('.pomodoro-reset').addEventListener('click', () => {
      if (timerId) window.clearInterval(timerId);
      timerId = null;
      isBreak = false;
      secondsLeft = 25 * 60;
      renderTime();
      document.querySelector('.pomodoro-start').textContent = 'Começar';
    });
  }

  function setup() {
    const themeToggle = document.querySelector('.theme-toggle');
    if (!themeToggle) return;
    setTheme(state.theme === 'dark' ? 'dark' : 'light');
    themeToggle.addEventListener('click', () => {
      setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
      saveState();
    });
    const goalInput = document.querySelector('#daily-goal');
    goalInput.value = String(state.goal);
    goalInput.addEventListener('change', saveGoal);
    setupCatalog();
    setupNotes();
    setupPlanner();
    setupFlashcards();
    setupMockExam();
    setupPomodoro();
    document.querySelector('.show-mistakes').addEventListener('click', renderMistakes);
    renderDashboard();
  }

  window.addEventListener('study:mistake', saveMistake);
  window.addEventListener('study:topic-complete', saveTopicCompletion);
  window.setInterval(addStudyActivity, 60_000);
  window.addEventListener('pagehide', addStudyActivity);
  document.addEventListener('visibilitychange', updateActiveTime);
  setTheme(state.theme === 'dark' ? 'dark' : 'light');

  if (document.querySelector('.study-hub')) {
    if (!window.studyTopicBanks) {
      feedback.textContent = 'A lista de temas não carregou. Atualize a página para tentar novamente.';
      return;
    }
    setup();
  }
})();
