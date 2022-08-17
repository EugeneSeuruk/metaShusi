import { ROUTES } from "../router/router";
import { DISCOUNT } from "./discount";
import { getDiscounts, getRolls, getSet, getNoodles } from "../backEnd/api-handlet";
import '../style/navigation.scss';

export const NAVIGATION = () => {
    const container = document.querySelector('.container');
    const home = document.querySelector('.home');
    const rolls = document.querySelector('.rolls');
    const sets = document.querySelector('.sets');
    const noodles = document.querySelector('.noodles');

    let arr = [];
    let arrDiscounts = [];

    home.onclick = async () => {
        await getDiscounts().then(res => {
            arr = Object.keys(res).map(key =>{
                return ({
                    id : key,
                    ...res[key]
                })
            })
        })
        arr.forEach(el => {
            arrDiscounts = new DISCOUNT(el);
            arrDiscounts.getAllDiscounts();
        })
    }

    rolls.onclick = async () => {
        await getRolls().then(res => {
            arr = Object.keys(res).map(key =>{
                return({
                    id: key,
                    ...res[key]
                })
            })
        })
        arr.forEach(el =>{
            arrDiscounts = new DISCOUNT(el);
            arrDiscounts.getProduct();
        }) 
    }

    sets.onclick = async () => {
        await getSet().then(res => {
            arr = Object.keys(res).map(key =>{
                return({
                    id: key,
                    ...res[key]
                })
            })
        })
        arr.forEach(el =>{
            arrDiscounts = new DISCOUNT(el);
            arrDiscounts.getProduct();
        }) 
    }
    
    noodles.onclick = async () => {
        await getNoodles().then(res => {
            arr = Object.keys(res).map(key =>{
                return({
                    id: key,
                    ...res[key]
                })
            })
        })
        arr.forEach(el =>{
            arrDiscounts = new DISCOUNT(el);
            arrDiscounts.getProduct();
        }) 
    }

}