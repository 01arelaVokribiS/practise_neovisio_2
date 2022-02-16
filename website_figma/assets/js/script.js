const header = document.querySelector('.header');
const headerMenu = document.querySelector('.header__menu');
const burger = document.querySelector('.header__burger');
const burgerClose = document.querySelector('.burger__close');
const menuLinks = document.querySelectorAll('.header__link');


window.onscroll = () => {
    if (window.pageYOffset > 50) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
};

burger.addEventListener('click', () => {
    headerMenu.classList.add('active');
});

burgerClose.addEventListener('click', () => {
    headerMenu.classList.remove('active');
});

if (window.innerWidth <= 767) {
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            headerMenu.classList.remove('active');
        });
    });
}