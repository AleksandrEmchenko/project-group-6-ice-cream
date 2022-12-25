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
    openProductsModalBtn: document.querySelector("[data-products-modal-open]"),
    closeProductsModalBtn: document.querySelector("[data-products-modal-close]"),
    ProductsModal: document.querySelector("[data-products-modal]"),
  };

  refs.openProductsModalBtn.addEventListener("click", toggleProductsModal);
  refs.closeProductsModalBtn.addEventListener("click", toggleProductsModal);

  function toggleProductsModal() {
    refs.ProductsModal.classList.toggle("is-hidden");
  }
})();


(() => {
  const refs = {
    openIcecoffeeModalBtn: document.querySelector("[data-icecoffee-modal-open]"),
    closeIcecoffeeModalBtn: document.querySelector("[data-icecoffee-modal-close]"),
    IcecoffeeModal: document.querySelector("[data-icecoffee-modal]"),
  };

  refs.openIcecoffeeModalBtn.addEventListener("click", toggleIcecoffeeModal);
  refs.closeIcecoffeeModalBtn.addEventListener("click", toggleIcecoffeeModal);

  function toggleIcecoffeeModal() {
    refs.IcecoffeeModal.classList.toggle("is-hidden");
  }
})();


(() => {
  const refs = {
    openMilkshakesModalBtn: document.querySelector("[data-milkshakes-modal-open]"),
    closeMilkshakesModalBtn: document.querySelector("[data-milkshakes-modal-close]"),
    MilkshakesModal: document.querySelector("[data-milkshakes-modal]"),
  };

  refs.openMilkshakesModalBtn.addEventListener("click", toggleMilkshakesModal);
  refs.closeMilkshakesModalBtn.addEventListener("click", toggleMilkshakesModal);

  function toggleMilkshakesModal() {
    refs.MilkshakesModal.classList.toggle("is-hidden");
  }
})();