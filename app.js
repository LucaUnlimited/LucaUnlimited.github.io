const languageButton = document.querySelector("#language-toggle");
const translatable = document.querySelectorAll("[data-en][data-es]");
let language = localStorage.getItem("portfolio-language") || "en";

function setLanguage(nextLanguage) {
  language = nextLanguage;
  document.documentElement.lang = language;
  for (const element of translatable) {
    element.textContent = element.dataset[language];
  }
  languageButton.textContent = language === "en" ? "ES" : "EN";
  languageButton.setAttribute("aria-label", language === "en" ? "Cambiar a español" : "Switch to English");
  localStorage.setItem("portfolio-language", language);
}

languageButton.addEventListener("click", () => setLanguage(language === "en" ? "es" : "en"));
document.querySelector("#year").textContent = new Date().getFullYear();
setLanguage(language);

