document.addEventListener("DOMContentLoaded", () => {
  const sections = [
    "👋 Bonjour, je m'appelle Jérémy SIMON.",
    "🎓 Je suis étudiant en 2ème année de BTS SIO, option SISR.",
    "💼 Je suis alternant au service informatique du District Urbain de Faulquemont.",
    "🛠️ Je travaille sur des projets comme Xibo CMS, Grav CMS, et Symfony.",
    "📦 Mon portfolio est conteneurisé avec Docker et hébergé sur GitHub Pages.",
    "🚀 Merci de visiter mon portfolio !"
  ];

  const container = document.createElement("div");
  container.style.padding = "20px";
  container.style.fontSize = "1.2em";
  container.style.lineHeight = "1.6";
  document.body.appendChild(container);

  let index = 0;

  function showNextLine() {
    if (index < sections.length) {
      const p = document.createElement("p");
      p.textContent = sections[index];
      container.appendChild(p);
      index++;
      setTimeout(showNextLine, 1500);
    }
  }

  showNextLine();
});