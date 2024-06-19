document.addEventListener('DOMContentLoaded', function() {
    const menuToggler = document.getElementById('menuToggler');
    const menu = document.getElementById('menu');
  
    menuToggler.addEventListener('click', function() {
      menu.classList.toggle('open');
    });
});
const backToTopBtn = document.createElement('button');
backToTopBtn.textContent = 'Back to Top';
backToTopBtn.classList.add('back-to-top');
backToTopBtn.style.display = 'none';
backToTopBtn.style.position = 'fixed';
backToTopBtn.style.bottom = '20px';
backToTopBtn.style.right = '20px';
document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});