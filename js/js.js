window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__menu'),
    menuItem = document.querySelectorAll('.header__item'),
    hamburger = document.querySelector('.header__hamb');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('header__active');
        menu.classList.toggle('header__active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('header__active');
            menu.classList.toggle('header__active');
        })
    })
})