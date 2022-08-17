import { initializeApp } from "firebase/app";

export const firebaseConfig = {
    apiKey: "AIzaSyD8GRSzjBf_iDWkO6p423iVCRlKsNURWQo",
    authDomain: "metasushishop.firebaseapp.com",
    databaseURL: "https://metasushishop-default-rtdb.firebaseio.com",
    projectId: "metasushishop",
    storageBucket: "metasushishop.appspot.com",
    messagingSenderId: "150191045212",
    appId: "1:150191045212:web:ce11a80df8a48571c94499"
};
const app = initializeApp(firebaseConfig);

export const DB_URL = 'https://metasushishop-default-rtdb.firebaseio.com/';