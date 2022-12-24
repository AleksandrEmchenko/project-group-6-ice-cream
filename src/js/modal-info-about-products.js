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