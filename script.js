(() => {
  const toggle = document.querySelector('.nav__toggle');
  const links = document.querySelector('#navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      const open = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        links.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });
})();
