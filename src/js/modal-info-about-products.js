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

