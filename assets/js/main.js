const hamburger = document.querySelector('.nav__hamburger');
const navLinks = document.querySelector('.nav__links');
const navItems = document.querySelectorAll('.nav__links li a');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});