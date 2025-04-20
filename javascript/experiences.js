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

    window.toggleDetails = toggleDetails;

    /* 📥 TÉLÉCHARGEMENT DE FICHIER PDF */
    function forceDownload(event, fileUrl) {
        event.preventDefault();
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = fileUrl.split("/").pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    window.forceDownload = forceDownload;

    /* 🔼 RETOUR EN HAUT */
    const topButton = document.getElementById("topButton");

    window.addEventListener("scroll", function () {
        topButton.style.display = window.scrollY > 300 ? "block" : "none";
    });

    topButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    /* 🖼️ GESTION DE LA GALERIE : afficher les images après clic sur la première */
    const galleries = document.querySelectorAll(".gallery");

    galleries.forEach(gallery => {
        const mainImg = gallery.querySelector(".main-img");
        const hiddenContainer = gallery.querySelector(".gallery-hidden");

        if (mainImg && hiddenContainer) {
            mainImg.addEventListener("click", () => {
                gallery.classList.toggle("show"); // ✅ Affiche le reste de la galerie
            });

            const allImgs = hiddenContainer.querySelectorAll("img");

            allImgs.forEach(img => {
                img.addEventListener("click", () => {
                    openModalWithImage(img.src);
                });
            });
        }
    });

    /* 📸 MODALE POUR ZOOM */
    const modal = document.createElement("div");
    modal.classList.add("modal-img-viewer");
    const modalImg = document.createElement("img");
    modal.appendChild(modalImg);
    document.body.appendChild(modal);

    function openModalWithImage(src) {
        modalImg.src = src;
        modal.classList.add("active");
    }

    modal.addEventListener("click", () => {
        modal.classList.remove("active");
        modalImg.src = "";
    });
});
