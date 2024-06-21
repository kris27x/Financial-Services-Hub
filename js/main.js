document.addEventListener('DOMContentLoaded', () => {
  /**
   * Toggle the visibility of the menu when the menu toggler is clicked.
   */
  const menuToggler = document.getElementById('menuToggler');
  const menu = document.getElementById('menu');

  menuToggler.addEventListener('click', () => {
      menu.classList.toggle('open');
  });

  /**
   * Create and style the 'Back to Top' button.
   */
  const backToTopBtn = document.createElement('button');
  backToTopBtn.textContent = 'Back to Top';
  backToTopBtn.classList.add('back-to-top');
  Object.assign(backToTopBtn.style, {
      display: 'none',
      position: 'fixed',
      bottom: '20px',
      right: '20px'
  });
  document.body.appendChild(backToTopBtn);

  /**
   * Show or hide the 'Back to Top' button based on the scroll position.
   */
  window.addEventListener('scroll', () => {
      backToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  });

  /**
   * Smoothly scroll the window to the top when the 'Back to Top' button is clicked.
   */
  backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
