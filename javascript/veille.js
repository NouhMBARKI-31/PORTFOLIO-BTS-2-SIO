document.addEventListener("DOMContentLoaded", function () {
    // 🕒 Date & Heure dynamique
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
  
    // 🔼 Bouton retour en haut
    const topButton = document.getElementById("topButton");
    if (topButton) {
      window.addEventListener("scroll", () => {
        topButton.style.display = window.scrollY > 300 ? "block" : "none";
      });
  
      topButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  
    // 🔍 Zoom sur les images (class="zoomable")
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
  