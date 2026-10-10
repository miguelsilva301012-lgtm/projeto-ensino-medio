(() => {
  const toggle = document.querySelector('.nav-menu-toggle');
  const navigation = document.getElementById('primary-navigation');

  if (!(toggle instanceof HTMLButtonElement) || !(navigation instanceof HTMLElement)) {
    return;
  }

  const mobileViewport = window.matchMedia('(max-width: 599px)');

  const closeMenu = (returnFocus = false) => {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu de navegação');
    navigation.classList.remove('is-open');

    if (returnFocus) {
      toggle.focus();
    }
  };

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Abrir menu de navegação' : 'Fechar menu de navegação');
    navigation.classList.toggle('is-open', !isOpen);
  });

  navigation.addEventListener('click', (event) => {
    if (event.target instanceof Element && event.target.closest('a')) {
      closeMenu();
    }
  });

  document.addEventListener('click', (event) => {
    if (
      mobileViewport.matches
      && toggle.getAttribute('aria-expanded') === 'true'
      && event.target instanceof Node
      && !toggle.contains(event.target)
      && !navigation.contains(event.target)
    ) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      closeMenu(true);
    }
  });

  const handleViewportChange = (event) => {
    if (!event.matches) {
      closeMenu();
    }
  };

  if (typeof mobileViewport.addEventListener === 'function') {
    mobileViewport.addEventListener('change', handleViewportChange);
  } else {
    mobileViewport.addListener(handleViewportChange);
  }
})();
