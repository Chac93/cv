const jobs = document.querySelectorAll('.job');

const themeButton = document.querySelector('.theme-toggle');
const savedTheme = localStorage.getItem('cv-theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const isDark = theme === 'dark';
  themeButton.setAttribute('aria-label', isDark ? 'Activer le thème clair' : 'Activer le thème sombre');
  themeButton.setAttribute('title', isDark ? 'Activer le thème clair' : 'Activer le thème sombre');
  themeButton.querySelector('.theme-icon').textContent = isDark ? '☀' : '☾';
  themeButton.querySelector('.theme-label').textContent = isDark ? 'Jour' : 'Nuit';
  document.querySelector('meta[name="theme-color"]').content = isDark ? '#111522' : '#f5f6fb';
}

setTheme(savedTheme || (prefersDark ? 'dark' : 'light'));

themeButton.addEventListener('click', () => {
  const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('cv-theme', nextTheme);
  setTheme(nextTheme);
});

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  jobs.forEach((job) => observer.observe(job));
} else {
  jobs.forEach((job) => job.classList.add('visible'));
}

// Mobile navigation menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mainNav = document.getElementById('main-nav');

if (mobileMenuToggle && mainNav) {
  function toggleMenu(open) {
    const isOpen = open !== undefined ? open : !mainNav.classList.contains('is-open');
    mainNav.classList.toggle('is-open', isOpen);
    mobileMenuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    mobileMenuToggle.setAttribute('aria-label', isOpen ? 'Fermer le menu de navigation' : 'Ouvrir le menu de navigation');
  }

  mobileMenuToggle.addEventListener('click', () => toggleMenu());

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mainNav.classList.contains('is-open')) {
      toggleMenu(false);
      mobileMenuToggle.focus();
    }
  });
}
