document.addEventListener('DOMContentLoaded', () => {
  const openMenuBtn = document.querySelector('.button-menu')
  const closeMenuBtn = document.querySelector('.close-button-menu');
  const mobileMenu = document.querySelector('.menu');


  function openMenu() {
    mobileMenu.classList.add('is-open');
  }
    
  function closeMenu() {
    mobileMenu.classList.remove('is-open');
  }
  openMenuBtn.addEventListener('click', openMenu);

  closeMenuBtn.addEventListener('click', closeMenu)

  document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', closeMenu)
  });
  function closeMenuKey(key) {
    if (key.code === 'Escape') {
      closeMenu()
    }
  }
  document.addEventListener('keydown', closeMenuKey)
});
