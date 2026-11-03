const languageToggle = document.getElementById("language-toggle");
let currentLanguage = "en";

languageToggle.addEventListener("click", () => {
  currentLanguage = currentLanguage === "en" ? "fr" : "en";
  document.documentElement.lang = currentLanguage;

  document.querySelectorAll("[data-en][data-fr]").forEach((element) => {
    element.textContent = element.dataset[currentLanguage];
  });

  languageToggle.textContent = currentLanguage === "en" ? "FR" : "EN";
});

document.getElementById("year").textContent = new Date().getFullYear();
