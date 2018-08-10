<template>
  <div>
    <div class="container">
        <div class="jumbotron">
             <h4>Product: {{product.title}}</h4> 
            <div v-if="this.product.quantity>0" >
            <form @submit.prevent>
                <select v-model='buyer'>
                    <option v-for='(customer,index) in customers' :key='index' :value='customer'>{{customer.firstName}} {{customer.lastName}}</option>
                </select>
                <button @click='buyProduct' >Buy product</button >
            </form>
                <router-link class='btn btn-success'  to='/products'>Cancle</router-link>
           </div>
            <div v-else>
                <h5>There is no products on stocks</h5>
                    <router-link class='btn btn-success'  to='/products'>Go Back to Products</router-link>
                </div>
        
        </div>
        </div>
  </div>
</template>

<script>
import {productsService} from '../services/ProductService.js'
import {customerService} from '../services/CustomerService.js'

export default {

    props: ['id'],
    data() {
        return {
            product: productsService.singleProduct(this.id),
            customers: customerService.list(),
            buyer:{}
        }
    },
    
    methods: {
        buyProduct() {
            if(!this.buyer.id){
                alert('Please select buyer')
            }else {
                customerService.addProduct(this.buyer, this.product)
                productsService.manipulateProducts(this.product, '-')
                this.buyer = {}
            }
        }
    }
    
 
}
</script>

<style>

</style>
