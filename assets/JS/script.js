const menuBtn = document.querySelector('.menu-hamburger');
const navLinks = document.querySelector('.nav-links');
const navBar = document.querySelector('.navbar')
menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
     navBar.classList.toggle('open');
});

