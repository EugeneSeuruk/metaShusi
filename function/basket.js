import "../style/basket.scss";

export const BASKET = () => {
    const basketBtn = document.querySelector('.basket');
    const container = document.querySelector('.container');
    const menuIcon = document.querySelector('.menu-icon');
    const fasFaBars = document.querySelector('.menu-icon i');
    const navigationMenu = document.querySelector('.navigation-menu');

    basketBtn.onclick = () => {
        const divBasket = document.querySelector('.divBasket');


        basketBtn.className === 'basket' ? basketBtn.classList.add('active') : basketBtn.className = 'basket';
        divBasket.className === 'divBasket' ? divBasket.classList.add('active') : divBasket.className = 'divBasket';
        menuIcon.className === 'menu-icon active' ? menuIcon.className = 'menu-icon' : null;
        fasFaBars.className = 'fas fa-bars';
        navigationMenu.className = 'navigation-menu';
    }

}