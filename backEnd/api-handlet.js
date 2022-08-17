import { firebaseConfig, DB_URL} from "./api";

export const getDiscounts = () => fetch(`${DB_URL}/discounts/.json`).then(response => response.json());
export const getRolls = () => fetch(`${DB_URL}/product/rolls/.json`).then(response => response.json());
export const getSet = () => fetch(`${DB_URL}/product/sets/.json`).then(response => response.json());
export const getNoodles= () => fetch(`${DB_URL}/product/Lapsha/.json`).then(response => response.json());
