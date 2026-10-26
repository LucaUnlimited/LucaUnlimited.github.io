const themeButton = document.querySelector('#theme-toggle');
const language = document.documentElement.lang === 'es' ? 'es' : 'en';
let theme = localStorage.getItem('portfolio-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
function setTheme(nextTheme) {
  theme = nextTheme;
  document.documentElement.dataset.theme = theme;
  const label = theme === 'dark' ? (language === 'en' ? 'Switch to light mode' : 'Cambiar a modo claro') : (language === 'en' ? 'Switch to dark mode' : 'Cambiar a modo oscuro');
  themeButton.setAttribute('aria-label', label);
  themeButton.title = label;
  localStorage.setItem('portfolio-theme', theme);
}
themeButton.addEventListener('click', () => setTheme(theme === 'dark' ? 'light' : 'dark'));
document.querySelector('#year').textContent = new Date().getFullYear();
setTheme(theme);
