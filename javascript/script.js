document.addEventListener("DOMContentLoaded", function() {

    /* 🕒 MISE À JOUR DE LA DATE ET HEURE EN DIRECT */
    function updateDateTime() {
        const dateHeureElement = document.getElementById("dateHeure");
        const now = new Date();
        const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
        const formattedDate = now.toLocaleDateString('fr-FR', options);
        const formattedTime = now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        dateHeureElement.innerHTML = `${formattedDate} - ${formattedTime}`;
    }

    setInterval(updateDateTime, 1000); // Mise à jour chaque seconde
    updateDateTime();

    /* 🔼 BOUTON RETOUR EN HAUT */
    const topButton = document.getElementById("topButton");

    // Afficher/Cacher le bouton au scroll (corrigé comme CV)
    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none"; // Disparaît quand on est tout en haut
        }
    });

    // Remonter en haut avec animation fluide
    topButton.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

});
