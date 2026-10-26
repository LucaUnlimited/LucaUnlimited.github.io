const languageButton = document.querySelector("#language-toggle");
const translatable = document.querySelectorAll("[data-en][data-es]");
const themeButton = document.querySelector("#theme-toggle");
const themeLabel = themeButton.querySelector(".theme-label");
let theme = localStorage.getItem("portfolio-theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

function setTheme(nextTheme) {
  theme = nextTheme;
  document.documentElement.dataset.theme = theme;
  const dark = theme === "dark";
  themeButton.setAttribute("aria-label", dark ? (language === "en" ? "Switch to light mode" : "Cambiar a modo claro") : (language === "en" ? "Switch to dark mode" : "Cambiar a modo oscuro"));
  themeLabel.textContent = dark ? (language === "en" ? "Light" : "Claro") : (language === "en" ? "Dark" : "Oscuro");
  localStorage.setItem("portfolio-theme", theme);
}
let language = localStorage.getItem("portfolio-language") || "en";

function setLanguage(nextLanguage) {
  language = nextLanguage;
  document.documentElement.lang = language;
  for (const element of translatable) {
    element.textContent = element.dataset[language];
  }
  languageButton.textContent = language === "en" ? "ES" : "EN";
  languageButton.setAttribute("aria-label", language === "en" ? "Cambiar a español" : "Switch to English");
  themeButton.setAttribute("aria-label", theme === "dark" ? (language === "en" ? "Switch to light mode" : "Cambiar a modo claro") : (language === "en" ? "Switch to dark mode" : "Cambiar a modo oscuro"));
  themeLabel.textContent = theme === "dark" ? (language === "en" ? "Light" : "Claro") : (language === "en" ? "Dark" : "Oscuro");
  localStorage.setItem("portfolio-language", language);
}

languageButton.addEventListener("click", () => setLanguage(language === "en" ? "es" : "en"));
themeButton.addEventListener("click", () => setTheme(theme === "dark" ? "light" : "dark"));
document.querySelector("#year").textContent = new Date().getFullYear();
setTheme(theme);
setLanguage(language);

