import Vue from 'vue'
import VueRouter from 'vue-router'

import AppCustomers from '../components/AppCustomers.vue'
import AppProducts from '../components/AppProducts.vue'
import LatestPurchases from '../components/LatestPurchases.vue'
import SellProduct from '../components/SellProduct.vue'

Vue.use(VueRouter);


const routes = [
    {path: '/customers', component: AppCustomers},
    {path: '/products', component: AppProducts},
    {path: '/customers/:id', component: LatestPurchases,  name:'customersPurchas', props: true},
    {path: '/products/:id', component: SellProduct,  name:'sellProduct', props: true},
];


export const router = new VueRouter({
    routes,
    mode: 'history'
});