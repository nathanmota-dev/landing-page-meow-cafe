const hamburger = document.querySelector('.icon');
const nav = document.querySelector('.nav-bar');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});