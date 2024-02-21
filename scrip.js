function toggleMenu() {
    var navLinks = document.querySelector('.nav-links');
    var menuToggle = document.querySelector('.menu-toggle');

    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

function scrollToAbout() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  }