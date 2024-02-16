function toggleMenu() {
    var navLinks = document.querySelector('.nav-links');
    var menuToggle = document.querySelector('.menu-toggle');

    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
}