const hamburger = document.querySelector('.Hamburger');
const show = document.querySelector('.ItemsNavigation');

hamburger.addEventListener('click', () =>{
    show.classList.toggle('Hide');
});