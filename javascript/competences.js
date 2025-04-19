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
    if (dateElement) {
        dateElement.textContent = now.toLocaleDateString('fr-FR', options);
    }

    // ✅ Bouton retour en haut
    const topButton = document.getElementById("topButton");
    if (topButton) {
        window.addEventListener("scroll", function () {
            topButton.style.display = window.scrollY > 300 ? "block" : "none";
        });
        topButton.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // ✅ Zoom pour .zoomable et .zoomable-slider
    const zoomables = document.querySelectorAll(".zoomable, .zoomable-slider");
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const modalClose = document.querySelector(".modal-close");
    const modalThumbnails = document.getElementById("modalThumbnails");

    let currentGallery = [];
    let currentIndex = 0;

    const galleryImages = {
        trello: [
            "../images/trello1.png",
            "../images/trello2.png",
            "../images/trello3.png",
            "../images/trello4.png",
            "../images/trello5.png"
        ],
        documentation: [
            "../images/documentation1.png",
            "../images/documentation2.png",
            "../images/documentation3.png",
            "../images/documentation4.png"
        ],
        dhcp: [
            "../images/dhcp1.png",
            "../images/dhcp2.png",
            "../images/dhcp3.png",
            "../images/dhcp4.png",
            "../images/dhcp5.png"
        ]
    };

    zoomables.forEach(img => {
        img.addEventListener("click", () => {
            const gallery = img.dataset.gallery;
            if (gallery && galleryImages[gallery]) {
                currentGallery = galleryImages[gallery];
                currentIndex = 0;
                modal.style.display = "block";
                modalImg.src = currentGallery[currentIndex];
                displayThumbnails(currentGallery, currentIndex);
                modalImg.style.maxWidth = "900px"; // même taille que GLPI
            } else {
                modal.style.display = "block";
                modalImg.src = img.src;
                currentGallery = [];
                modalThumbnails.innerHTML = "";
                modalImg.style.maxWidth = "500px"; // taille standard
            }
        });
    });

    // Navigation clavier
    window.addEventListener("keydown", (e) => {
        if (modal.style.display === "block" && currentGallery.length > 1) {
            if (e.key === "ArrowRight") {
                currentIndex = (currentIndex + 1) % currentGallery.length;
                modalImg.src = currentGallery[currentIndex];
                updateActiveThumbnail();
            } else if (e.key === "ArrowLeft") {
                currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
                modalImg.src = currentGallery[currentIndex];
                updateActiveThumbnail();
            }
        }
    });

    // Fermer modale
    modalClose.addEventListener("click", () => {
        modal.style.display = "none";
        modalImg.src = "";
        modalThumbnails.innerHTML = "";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
            modalImg.src = "";
            modalThumbnails.innerHTML = "";
        }
    });

    function displayThumbnails(images, activeIndex) {
        modalThumbnails.innerHTML = "";
        images.forEach((src, index) => {
            const thumb = document.createElement("img");
            thumb.src = src;
            thumb.classList.add("thumbnail");
            if (index === activeIndex) {
                thumb.classList.add("active");
            }
            thumb.addEventListener("click", () => {
                currentIndex = index;
                modalImg.src = currentGallery[currentIndex];
                updateActiveThumbnail();
            });
            modalThumbnails.appendChild(thumb);
        });
    }

    function updateActiveThumbnail() {
        const thumbnails = modalThumbnails.querySelectorAll("img");
        thumbnails.forEach((thumb, index) => {
            thumb.classList.toggle("active", index === currentIndex);
        });
    }
});
