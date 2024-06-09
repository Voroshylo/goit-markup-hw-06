document.addEventListener('DOMContentLoaded', () => {
  const openModalBtn = document.querySelector('.button');
  const closeModalBtn = document.querySelector('.close-button');
  const modalMenu = document.querySelector('.backdrop');

  function openMenu() {
    modalMenu.classList.add('is-open');
  }
  function closeMenu() {
    modalMenu.classList.remove('is-open')
  }

  openModalBtn.addEventListener('click', openMenu);
  closeModalBtn.addEventListener('click', closeMenu)

  document.querySelectorAll('.backdrop a').forEach(link => {
    link.addEventListener('click', closeMenu)
  });
  window.addEventListener('keydown', openModalKey)
  function openModalKey(key) {
    if (key.code === 'Escape') {
      closeMenu()
    }
  }
  })
