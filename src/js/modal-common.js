(() => {
  const refs = {
    openMapModalBtn: document.querySelector("[data-map-modal-open]"),
    closeMapModalBtn: document.querySelector("[data-map-modal-close]"),
    mapModal: document.querySelector("[data-map-modal]"),
  };

  refs.openMapModalBtn.addEventListener("click", toggleMapModal);
  refs.closeMapModalBtn.addEventListener("click", toggleMapModal);

  function toggleMapModal() {
    refs.mapModal.classList.toggle("is-hidden");
  }
})();

(() => {
  const refs = {
    openReadModalBtn: document.querySelector("[data-read-modal-open]"),
    closeReadModalBtn: document.querySelector("[data-read-modal-close]"),
    readModal: document.querySelector("[data-read-modal]"),
  };

  refs.openReadModalBtn.addEventListener("click", toggleReadModal);
  refs.closeReadModalBtn.addEventListener("click", toggleReadModal);

  function toggleReadModal() {
    refs.readModal.classList.toggle("is-hidden");
  }
})();