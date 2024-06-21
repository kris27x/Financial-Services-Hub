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
      right: '20px',
      zIndex: '1000', // Ensuring the button is above other content
  });
  document.body.appendChild(backToTopBtn);

  /**
   * Debounce function to limit the rate of execution for the scroll event handler.
   */
  const debounce = (func, wait) => {
      let timeout;
      return (...args) => {
          clearTimeout(timeout);
          timeout = setTimeout(() => func.apply(this, args), wait);
      };
  };

  /**
   * Show or hide the 'Back to Top' button based on the scroll position.
   * Uses debounce for better performance.
   */
  const handleScroll = () => {
      const scrollY = window.scrollY;
      requestAnimationFrame(() => {
          backToTopBtn.style.display = scrollY > 300 ? 'block' : 'none';
      });
  };

  window.addEventListener('scroll', debounce(handleScroll, 50));

  /**
   * Smoothly scroll the window to the top when the 'Back to Top' button is clicked.
   */
  backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
