<template>
  <div>
    <h1>AppProducts</h1>
    <input type="text" placeholder="Serach products" v-model='search'>
    <div class="list-group" v-for='(product, index) in filteredProducts' :key='index'>
      <p>Product: {{product.title}} , quantity: {{product.quantity}}</p>
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
