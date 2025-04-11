document.addEventListener("DOMContentLoaded", function () {
    // ✅ Affichage de la date et de l'heure dynamiques
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

    // ✅ Bouton retour en haut
    const topButton = document.getElementById("topButton");
    window.addEventListener("scroll", function () {
        topButton.style.display = window.scrollY > 300 ? "block" : "none";
    });
    topButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // ✅ Zoom modale pour les images
    const zoomables = document.querySelectorAll(".zoomable");
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const modalClose = document.querySelector(".modal-close");

    zoomables.forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "block";
            modalImg.src = img.src;
        });
    });

    modalClose.addEventListener("click", () => {
        modal.style.display = "none";
        modalImg.src = "";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
            modalImg.src = "";
        }
    });
});
