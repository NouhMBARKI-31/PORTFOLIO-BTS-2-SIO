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

// 🎯 GESTION D'UNE GALERIE ZOOMABLE POUR TRELL0
let currentGallery = [];
let currentIndex = 0;

const galleryImages = {
  trello: [
    "../images/trello1.png",
    "../images/trello2.png",
    "../images/trello3.png",
    "../images/trello4.png",
    "../images/trello5.png"
  ]
};

document.querySelectorAll(".zoomable-slider").forEach(img => {
  img.addEventListener("click", () => {
    const gallery = img.dataset.gallery;
    if (gallery && galleryImages[gallery]) {
      currentGallery = galleryImages[gallery];
      currentIndex = 0;
      modal.style.display = "block";
      modalImg.src = currentGallery[currentIndex];
    }
  });
});

// 🔁 Navigation avec les flèches du clavier
window.addEventListener("keydown", (e) => {
  if (modal.style.display === "block" && currentGallery.length > 1) {
    if (e.key === "ArrowRight") {
      currentIndex = (currentIndex + 1) % currentGallery.length;
      modalImg.src = currentGallery[currentIndex];
    } else if (e.key === "ArrowLeft") {
      currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
      modalImg.src = currentGallery[currentIndex];
    }
  }
});
