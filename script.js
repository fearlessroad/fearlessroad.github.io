document.addEventListener("DOMContentLoaded", () => {
  // Search Modal Toggle
  const searchBtn = document.getElementById("search-btn");
  const searchModal = document.getElementById("search-modal");
  const closeModal = document.querySelector(".close-modal");

  if (searchBtn && searchModal && closeModal) {
    searchBtn.addEventListener("click", () => {
      searchModal.style.display = "block";
    });

    closeModal.addEventListener("click", () => {
      searchModal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
      if (event.target === searchModal) {
        searchModal.style.display = "none";
      }
    });
  }
});