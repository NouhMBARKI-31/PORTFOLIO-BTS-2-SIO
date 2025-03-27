document.addEventListener("DOMContentLoaded", function () {
    
    /* 🕒 MISE À JOUR DE LA DATE ET HEURE EN DIRECT */
    function updateDateTime() {
        const now = new Date();
        const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
        const formattedDate = now.toLocaleDateString('fr-FR', options);
        const formattedTime = now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        document.getElementById("dateHeure").innerHTML = `${formattedDate} - ${formattedTime}`;
    }
    
    setInterval(updateDateTime, 1000); // Rafraîchir l'heure chaque seconde
    updateDateTime(); // Exécuter immédiatement la fonction une première fois

    /* 📥 BOUTON TÉLÉCHARGER LE CV */
    document.getElementById("downloadCV").addEventListener("click", function() {
        window.open("../pdf/CV_Nouh.pdf", "_blank");
    });

    /* 🎬 ANIMATION TIMELINE */
    const timelineBoxes = document.querySelectorAll(".timeline-box");
    timelineBoxes.forEach((box, index) => {
        box.style.opacity = "0";
        box.style.transform = "translateY(20px)";
        setTimeout(() => {
            box.style.transition = "opacity 1s ease, transform 1s ease";
            box.style.opacity = "1";
            box.style.transform = "translateY(0)";
        }, 300 * index);
    });

    /* 🔼 BOUTON RETOUR EN HAUT */
    const topButton = document.getElementById("topButton");

    // Afficher/Cacher le bouton au scroll (corrigé pour bien disparaître en haut)
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
