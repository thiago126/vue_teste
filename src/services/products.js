//productsIndex, productsDelete

import axios from "axios";
import {url} from "./api";

let products = [];

function setStorage () {
    localStorage.setItem('products', JSON.stringify(products));
}

function getStorage () {
    return JSON.parse(localStorage.getItem('products'));
}

function checkLocalStorage () {
    const productsStorage = localStorage.getItem('products');

    if (!productsStorage) {
        setStorage();
    } else {
        products = getStorage();
    }
}

export function productsIndex () {
    checkLocalStorage();
    return products;
}

export function productsShow (id) {
    checkLocalStorage();
    return products.find(product => product.id == id);
}

export async function productsStore(data){
    products = getStorage();

    products.push(data);

    setStorage();
    return products;
}

export function productsDelete () {

}

export function productsEdit (id, data) {
    let product = products.find(product => product.id == id);
    Object.assign(product, data);
    setStorage();
}
