/* Smooth scroll */
document.addEventListener('DOMContentLoaded', function() {
  var scrollLinks = document.querySelectorAll('a[data-scroll-target]');
  
  scrollLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      var target = document.querySelector(this.getAttribute('data-scroll-target'));
      
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
});


/* Boton hacia arriba */
window.addEventListener('scroll', function() {
  var scrollToTopBtn = document.getElementById('scrollToTopBtn');
  if (window.pageYOffset > 100) {
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}