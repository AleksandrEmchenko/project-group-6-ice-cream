(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-franchise-open]'),
    closeMenuBtn: document.querySelector('[data-franchise-close]'),
    menu: document.querySelector('[data-franchise]'),
    body: document.querySelector('body'),
    menuList: document.querySelector('.menu-list'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.menuList.addEventListener('click', removeMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }

  function removeMenu() {
    refs.menu.classList.add('is-hidden');
    refs.body.classList.remove('no-scroll');
  }
})();