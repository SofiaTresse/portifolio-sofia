document.getElementById('year').textContent = new Date().getFullYear();

// Destaca a seção atual sem interferir nos links de navegação.
if ('IntersectionObserver' in window) {
  const links = [...document.querySelectorAll('nav a')];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(link => {
          if (link.getAttribute('href') === '#' + entry.target.id) {
            link.setAttribute('aria-current', 'location');
          } else {
            link.removeAttribute('aria-current');
          }
        });
      }
    });
  }, { rootMargin: '-15% 0px -45% 0px' });
  document.querySelectorAll('section[id]').forEach(section => observer.observe(section));
}
