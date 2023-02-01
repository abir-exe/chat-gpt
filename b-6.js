const header = document.querySelector('header');
const headerNav = header.querySelector('nav');
const menuToggle = document.querySelector('.menu-toggle');

window.addEventListener('resize', function() {
  if (window.innerWidth <= 800 && headerNav.classList.contains('expanded')) {
    headerNav.classList.remove('expanded');
    menuToggle.classList.remove('close');
  }
});

menuToggle.addEventListener('click', function() {
  headerNav.classList.toggle('expanded');
  menuToggle.classList.toggle('close');
});
