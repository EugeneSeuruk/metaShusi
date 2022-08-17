import { HEADER } from "../header/header";
import { BASKET } from "./basket";

export class DISCOUNT {
    #text;
    #PROMOCODE;
    #nameproduct;
    #price;
    #composition;

    constructor({text, PROMOCODE, nameproduct, price, composition}){
        this.#text = text;
        this.#PROMOCODE = PROMOCODE;
        this.#nameproduct = nameproduct;
        this.#price = price;
        this.#composition = composition;
    }

    getAllDiscounts(){
        const discounts = document.createElement('div');
        const container = document.querySelector('.container');
        const ulTable = document.createElement('ul');
        const allNavigationRemove = document.querySelector('.navigation');

        ulTable.innerText = `${this.#text} Промокод: ${this.#PROMOCODE}`;
        ulTable.className = 'ulTable';
        discounts.className = 'discounts';

        discounts.append(ulTable);
        container.append(discounts);
        allNavigationRemove.innerHTML ='';
        
        return container;
    }

    getProduct(){
        const menuIcon = document.querySelector('.menu-icon');
        const fasFaBars = document.querySelector('.menu-icon i');
        const navigationMenu = document.querySelector('.navigation-menu');
        const container = document.querySelector('.container');
        const allNavigation = document.querySelector('.navigation');
        const productDiv = document.createElement('div');
        const productName = document.createElement('p');
        const productPrice = document.createElement('p');
        const productComposition = document.createElement('p');
        const productImgDiv = document.createElement('div');
        const productImg = document.createElement('img');
        const buyBtn = document.createElement('p');
        const minusBtn = document.createElement('p');
        const plusBtn = document.createElement('p');
        const productCounter = document.createElement('p');
        const removeDiscounts = document.querySelector('.discounts');
        let counter = 0;

        menuIcon.className = 'menu-icon';
        fasFaBars.className = 'fas fa-bars';
        navigationMenu.className = 'navigation-menu';
        productDiv.className = 'productDiv';
        productName.className = 'productName';
        productPrice.className = 'productPrice';
        productComposition.className = 'productComposition';
        productImgDiv.className = 'productImgDiv';
        productImg.className = 'productImg';
        buyBtn.className = 'buyBtn';
        minusBtn.className = 'minusBtn';
        plusBtn.className = 'plusBtn';
        productCounter.className = 'productCounter';

        productName.innerText = `${this.#nameproduct}`;
        productPrice.innerText = `${this.#price}`;
        productComposition.innerText = `${this.#composition}`;
        buyBtn.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>';
        minusBtn.innerHTML = '<i class="fa-solid fa-minus"></i>';
        plusBtn.innerHTML = '<i class="fa-solid fa-plus"></i>';
        productCounter.innerText = counter;

        minusBtn.onclick = () => {
            counter === 0 ? counter = 0 : counter--;
            productCounter.innerText = counter;
        }
        plusBtn.onclick = () => {
            counter++;
            productCounter.innerText = counter;
        }

        buyBtn.onclick = () => {
            const basket = document.querySelector('.basket')
            const divProductBasket = document.querySelector('.divProduct');
            const cardProduct = document.createElement('div');
            const cardName = document.createElement('p');
            const cardPrice = document.createElement('p');
            const cardAmount = document.createElement('p');
            const cardMinus = document.createElement('p');
            const cardPlus = document.createElement('p');
            let cardCounter = productCounter.innerText;

            cardPlus.className = 'cardPlus';
            cardMinus.className = 'cardMinus';
            cardProduct.className = 'cardProduct';
            cardName.className = 'cardName';
            cardPrice.className = 'cardPrice';
            cardAmount.className = 'cardAmount';

            cardPlus.innerHTML = '+';
            cardMinus.innerText = '-';
            cardPrice.innerText = `Стоимость: ${productPrice.innerText * cardCounter}BYN`;
            cardName.innerText = productName.innerText;
            cardAmount.innerText = ` Колличество: ${cardCounter}шт`;

            basket.className === 'basket' ? basket.classList.add('buy') : null;
                setTimeout(()=>{
                    basket.className = 'basket';
                }, 300);

            cardPlus.onclick = () => {
                cardCounter++
                cardAmount.innerText = ` Колличество: ${cardCounter}шт`;
                cardPrice.innerText = `Стоимость: ${productPrice.innerText * cardCounter}BYN`;
            }

            cardMinus.onclick = () => {
                cardCounter--
                cardAmount.innerText = ` Колличество: ${cardCounter}шт`;
                cardPrice.innerText = `Стоимость: ${productPrice.innerText * cardCounter}BYN`;
                cardCounter === 0 ? cardProduct.remove() : null;
            }

            productCounter.innerText = '0'
            cardProduct.append(cardName, cardPrice, cardPlus, cardAmount, cardMinus)
            divProductBasket.append(cardProduct);  
        }

        productImgDiv.append(productImg);
        productDiv.append(productName, productComposition, productPrice, buyBtn, minusBtn, productCounter, plusBtn);
        allNavigation.append(productDiv);
        container.append(allNavigation);

        removeDiscounts.remove();
        
        return container;
    }
}