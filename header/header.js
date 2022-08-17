import '../style/header.scss';

export const HEADER = () => {
    const menuIcon = document.querySelector('.menu-icon');
    const menuIconI = document.querySelector('.menu-icon i');
    const navigationMenu = document.querySelector('.navigation-menu');
    const btn = document.querySelector('.btn');
    const basket = document.querySelector('.basket')
    const divBasket = document.querySelector('.divBasket');

    menuIcon.onclick = () => {
        if (menuIcon.className === 'menu-icon') {
            menuIcon.classList.add('active');
            menuIconI.classList.add('fa-times');
            navigationMenu.classList.add('active');
        } else {
            menuIcon.className = 'menu-icon';
            menuIconI.className = 'fas fa-bars';
            navigationMenu.className = 'navigation-menu';
        }
        basket.className = 'basket';
        divBasket.className = 'divBasket';

    }
}

