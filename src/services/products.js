import axios from 'axios';
import { url } from "./api";

export async function productsIndex(){
    return await axios.get(url('/products'));
}

export async function productsShow(id){
    return await axios.get(url('/products/'+id));
}

export async function productsStore(data){
    return await axios.post(url('/products'), data);
}
