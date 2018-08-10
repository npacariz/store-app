<template>
  <div>
    <h1>Products</h1>
    <input type="text" placeholder="Serach products" v-model='search'>
    <div class="list-group" v-for='(product, index) in filteredProducts' :key='index'>
      <p>Product: {{product.title}} , quantity: {{product.quantity}}</p>
      <button @click="manipulateProduct(product, '-')">-</button> <button @click="manipulateProduct(product, '+')">+</button>
      <router-link  class='btn btn-success'  :to="{name:'sellProduct', params: {id: product.id}}">Sell</router-link>

    </div>
  </div>
</template>

<script>
import {productsService} from '../services/ProductService.js'

export default {
  name: 'AppProducts',
  data(){
    return {
    products: productsService.list(),
    search: '',
    }
  },
  methods: {
    manipulateProduct(product, value){
        productsService.manipulateProducts(product, value)
    }
  },
  computed: {
    filteredProducts() {
      return this.products.filter(product => {
         return product.title.match(this.search)
      })
    }
  } 
}
</script>

<style>

</style>
