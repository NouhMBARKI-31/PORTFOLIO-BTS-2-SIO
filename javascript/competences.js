document.addEventListener("DOMContentLoaded", function () {
    // Afficher la date dynamique
    const dateElement = document.getElementById("dateHeure");
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      };
      
    dateElement.textContent = now.toLocaleDateString('fr-FR', options);

    // Bouton retour en haut
    const topButton = document.getElementById("topButton");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }
    });

    topButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Afficher la date dynamique
    const dateElement = document.getElementById("dateHeure");
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      };
      
    dateElement.textContent = now.toLocaleDateString('fr-FR', options);

    // Bouton retour en haut
    const topButton = document.getElementById("topButton");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }
    });

    topButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
