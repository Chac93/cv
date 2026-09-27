const jobs = document.querySelectorAll('.job');

const themeButton = document.querySelector('.theme-toggle');
const savedTheme = localStorage.getItem('cv-theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const isDark = theme === 'dark';
  if (themeButton) {
    themeButton.setAttribute('aria-label', isDark ? 'Activer le thème clair' : 'Activer le thème sombre');
    themeButton.setAttribute('title', isDark ? 'Activer le thème clair' : 'Activer le thème sombre');
    const icon = themeButton.querySelector('.theme-icon');
    if (icon) icon.textContent = isDark ? '☀' : '☾';
    const label = themeButton.querySelector('.theme-label');
    if (label) label.textContent = isDark ? 'Jour' : 'Nuit';
  }
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) metaTheme.content = isDark ? '#111a17' : '#f5f6fb';
}

if (themeButton) {
  setTheme(savedTheme || (prefersDark ? 'dark' : 'light'));
  themeButton.addEventListener('click', () => {
    const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('cv-theme', nextTheme);
    setTheme(nextTheme);
  });
} else {
  setTheme(savedTheme || (prefersDark ? 'dark' : 'light'));
}

const animElements = document.querySelectorAll('.job, .reveal-on-scroll');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible', 'is-visible');
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  animElements.forEach((el) => observer.observe(el));
} else {
  animElements.forEach((el) => el.classList.add('visible', 'is-visible'));
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
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  mobileMenuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mainNav.classList.contains('is-open')) {
      toggleMenu(false);
      mobileMenuToggle.focus();
    }
  });

  document.addEventListener('click', (e) => {
    if (mainNav.classList.contains('is-open') && !mainNav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
      toggleMenu(false);
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900 && mainNav.classList.contains('is-open')) {
      toggleMenu(false);
    }
  });
}
