// Mobile menu toggle
(() => {
  const toggle = document.querySelector('#rnSiteHeaderNavButton');
  const menu = document.querySelector('#rnSiteHeaderNavMenu');
  
  if (toggle && menu) {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      menu.classList.toggle('is-open');
    });
    
    // Close menu when clicking a link
    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        menu.classList.remove('is-open');
      });
    });
  }
  
  // Update year
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
})();
