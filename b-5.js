window.addEventListener('resize', function() {
    const header = document.querySelector('header');
    const headerNav = header.querySelector('nav');
    if (window.innerWidth <= 800 && headerNav.classList.contains('expanded')) {
      headerNav.classList.remove('expanded');
    }
  });
  
  document.querySelector('.menu-toggle').addEventListener('click', function() {
    const headerNav = document.querySelector('header nav');
    headerNav.classList.toggle('expanded');
  });
  