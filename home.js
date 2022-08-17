import { getDiscounts } from "./backEnd/api-handlet";
import { HEADER } from "./header/header";
import { PATHNAMES, ROUTES } from "./router/router";
import { DISCOUNT } from "./function/discount";
import { BASKET } from "./function/basket";
import { NAVIGATION } from "./function/navugation";
import "./style/home.scss";

let a1 = [];
let blabla=[];

const ROUTERMAP = new Map([
    [PATHNAMES.main, () => window.location.href = ROUTES.home],
    [PATHNAMES.home,() => HEADER()]
])

window.onload = () => {
    const pathname = window.location.pathname;

    ROUTERMAP.get(pathname)();
}

const aaa = async () => {
    await getDiscounts().then(res => {
        a1 = Object.keys(res).map(key =>{
            return ({
                id : key,
                ...res[key]
            })
        })
    })
    a1.forEach(el => {
        blabla = new DISCOUNT(el);
        blabla.getAllDiscounts();
    })
}
aaa()
BASKET()
NAVIGATION()