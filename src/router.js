import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Products from './views/Products.vue';
import ProductsNew from './views/ProductsNew.vue';
import ProductsEdit from "./views/ProductsEdit";
//import About from './views/About.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/products',
        name: 'products',
        component: Products
    },
    {
        path: '/products/new',
        name: 'ProductsNew',
        component: ProductsNew
    },
    {
        path: '/products/:id',
        name: 'ProductsEdit',
        component: ProductsEdit
    }
  ]
});
