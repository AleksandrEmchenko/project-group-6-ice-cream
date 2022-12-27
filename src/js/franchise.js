(() => {
  const refs = {
    openMapModalBtn: document.querySelector("[data-franchise-open]"),
    closeMapModalBtn: document.querySelector("[data-franchise-close]"),
    mapModal: document.querySelector("[data-franchise]"),
  };

  refs.openMapModalBtn.addEventListener("click", toggleMapModal);
  refs.closeMapModalBtn.addEventListener("click", toggleMapModal);

  function toggleMapModal() {
    refs.mapModal.classList.toggle("is-hidden");
  }
})();