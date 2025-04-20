document.addEventListener("DOMContentLoaded", function () {
    /* 🕒 MISE À JOUR DE LA DATE ET HEURE EN DIRECT */
    function updateDateTime() {
        const now = new Date();
        const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
        const formattedDate = now.toLocaleDateString('fr-FR', options);
        const formattedTime = now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        document.getElementById("dateHeure").innerHTML = `${formattedDate} - ${formattedTime}`;
    }

    setInterval(updateDateTime, 1000);
    updateDateTime(); // Exécuter immédiatement

    /* 🎬 ANIMATION DES CARTES D'EXPÉRIENCES */
    const experienceCards = document.querySelectorAll(".experience-card");
    experienceCards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        setTimeout(() => {
            card.style.transition = "opacity 1s ease, transform 1s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 300 * index);
    });

    /* 🔍 AFFICHER/MASQUER LES DÉTAILS */
    function toggleDetails(id) {
        const details = document.getElementById(id);
        const button = document.querySelector(`button[onclick="toggleDetails('${id}')"]`);

        if (!details.classList.contains("show")) {
            details.classList.add("show");
            button.innerText = "Voir moins ⬆️";
        } else {
            details.classList.remove("show");
            button.innerText = "Voir plus ⬇️";
        }
    }

    window.toggleDetails = toggleDetails; // rendre accessible globalement

    /* 📥 FORCER LE TÉLÉCHARGEMENT DES RAPPORTS DE STAGE */
    function forceDownload(event, fileUrl) {
        event.preventDefault(); // Empêche l’ouverture du fichier dans un nouvel onglet
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = fileUrl.split("/").pop(); // Définit le nom du fichier
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    window.forceDownload = forceDownload;

    /* 🔼 BOUTON RETOUR EN HAUT */
    const topButton = document.getElementById("topButton");

    window.addEventListener("scroll", function () {
        topButton.style.display = window.scrollY > 300 ? "block" : "none";
    });

    topButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    /* 🖼️ GALERIE D’IMAGES POUR LES PROJETS SCOLAIRES */
    const toggles = document.querySelectorAll("[data-toggle-gallery]");

    toggles.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetId = btn.dataset.toggleGallery;
            const container = document.getElementById(targetId);
            if (container.classList.contains("show")) {
                container.classList.remove("show");
                container.style.display = "none";
                btn.innerText = "Voir la galerie ⬇️";
            } else {
                container.classList.add("show");
                container.style.display = "flex";
                btn.innerText = "Masquer la galerie ⬆️";
            }
        });
    });
});
