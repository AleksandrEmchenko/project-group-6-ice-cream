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

(() => {
  const refs = {
    openBuyModalBtn: document.querySelectorAll("[data-buy-modal-open]"),
    closeBuyModalBtn: document.querySelector("[data-buy-modal-close]"),
    buyModal: document.querySelector("[data-buy-modal]"),
    menu: document.querySelector("[data-menu]"),
    body: document.querySelector("body"),
  };

  refs.openBuyModalBtn.forEach(button => {
    button.addEventListener("click", toggleBuyModal)
  });
  refs.closeBuyModalBtn.addEventListener("click", toggleBuyModal);

  function toggleBuyModal() {
    refs.buyModal.classList.toggle("is-hidden");
    refs.menu.classList.remove("is-open");
    refs.body.classList.remove("no-scroll");
  }
})();
