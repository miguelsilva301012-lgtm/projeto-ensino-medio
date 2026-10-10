(() => {
  const phoneNumber = '5519990068102';
  const currentPage = document.querySelector('.section-heading h2, .essay-heading h1');
  const pageName = document.getElementById('materias')
    ? 'página inicial'
    : currentPage
      ? currentPage.textContent.trim()
      : 'site';
  const message = `Olá! Preciso de ajuda com o site Estuda em Casa. Estou na página ${pageName}.`;

  const widget = document.createElement('aside');
  widget.className = 'support-widget';
  widget.setAttribute('aria-label', 'Ajuda e atendimento');

  const chat = document.createElement('details');
  chat.className = 'support-chat';

  const toggle = document.createElement('summary');
  toggle.className = 'support-chat-toggle';
  toggle.textContent = 'Ajuda e atendimento';

  const panel = document.createElement('div');
  panel.className = 'support-chat-panel';
  panel.setAttribute('role', 'region');
  panel.setAttribute('aria-label', 'Converse com a equipe');

  const title = document.createElement('h2');
  title.className = 'support-chat-title';
  title.textContent = 'Como podemos ajudar?';

  const description = document.createElement('p');
  description.className = 'support-chat-description';
  description.textContent = 'Fale com a equipe pelo WhatsApp se tiver dúvida sobre uma matéria ou atividade.';

  const link = document.createElement('a');
  link.className = 'support-chat-link';
  link.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.textContent = 'Conversar pelo WhatsApp';

  const note = document.createElement('p');
  note.className = 'support-chat-note';
  note.textContent = 'O WhatsApp abre em outra aba. A mensagem só será enviada quando você confirmar por lá.';

  panel.append(title, description, link, note);
  chat.append(toggle, panel);
  widget.append(chat);
  document.body.append(widget);
})();
