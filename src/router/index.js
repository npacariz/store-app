import Vue from 'vue'
import VueRouter from 'vue-router'

import AppCustomers from '../components/AppCustomers.vue'
import AppProducts from '../components/AppProducts.vue'

Vue.use(VueRouter);


const routes = [
    {path: '/customers', component: AppCustomers},
    {path: '/products', component: AppProducts},
];


export const router = new VueRouter({
    routes,
    mode: 'history'
});