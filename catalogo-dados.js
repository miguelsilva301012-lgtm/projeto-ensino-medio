(() => {
  const filePath = 'catalogo-adicional.json';
  const appliedCatalogs = new WeakMap();

  async function loadAndApply(topicBanks) {
    if (appliedCatalogs.has(topicBanks)) return appliedCatalogs.get(topicBanks);

    const application = fetch(filePath, { cache: 'no-store' })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`O arquivo ${filePath} respondeu com HTTP ${response.status}.`);
        }
        return response.json();
      })
      .then((topics) => {
        validateTopics(topics, topicBanks);
        topics.forEach(({ subject, level, ...topic }) => {
          topicBanks[subject].push({ ...topic, level });
        });
        return topics.length;
      });

    appliedCatalogs.set(topicBanks, application);
    try {
      return await application;
    } catch (error) {
      appliedCatalogs.delete(topicBanks);
      throw error;
    }
  }

  function validateTopics(topics, topicBanks) {
    if (!Array.isArray(topics)) {
      throw new TypeError(`${filePath} precisa conter uma lista de temas.`);
    }

    const knownTitles = new Map(
      Object.entries(topicBanks).map(([subject, bank]) => [
        subject,
        new Set(bank.map((topic) => topic.title)),
      ]),
    );

    topics.forEach((topic, index) => {
      const itemNumber = index + 1;
      if (!topic || typeof topic !== 'object' || Array.isArray(topic)) {
        throw new TypeError(`O tema ${itemNumber} precisa ser um objeto.`);
      }
      if (!Object.hasOwn(topicBanks, topic.subject)) {
        throw new TypeError(`O tema ${itemNumber} usa uma matéria desconhecida: "${topic.subject}".`);
      }
      if (!Number.isInteger(topic.level) || topic.level < 1 || topic.level > 3) {
        throw new TypeError(`O tema ${itemNumber} precisa informar level como 1, 2 ou 3.`);
      }

      ['title', 'overview', 'lessonDescription', 'videoSearch'].forEach((field) => {
        if (typeof topic[field] !== 'string' || !topic[field].trim()) {
          throw new TypeError(`O tema ${itemNumber} precisa preencher "${field}".`);
        }
      });

      const titles = knownTitles.get(topic.subject);
      if (titles.has(topic.title)) {
        throw new TypeError(`O tema "${topic.title}" está repetido na matéria "${topic.subject}".`);
      }
      titles.add(topic.title);

      if (!Array.isArray(topic.questions) || topic.questions.length !== 6) {
        throw new TypeError(`O tema "${topic.title}" precisa ter exatamente 6 questões.`);
      }
      topic.questions.forEach((question, questionIndex) => {
        const validQuestion = question
          && typeof question.prompt === 'string'
          && question.prompt.trim()
          && Array.isArray(question.options)
          && question.options.length >= 2
          && question.options.every((option) => typeof option === 'string' && option.trim())
          && Number.isInteger(question.correct)
          && question.correct >= 0
          && question.correct < question.options.length
          && typeof question.explanation === 'string'
          && question.explanation.trim();
        if (!validQuestion) {
          throw new TypeError(`A questão ${questionIndex + 1} do tema "${topic.title}" está incompleta ou inválida.`);
        }
      });
    });
  }

  window.additionalCatalogData = { loadAndApply };
})();
