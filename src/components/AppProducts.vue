<template>
  <div>
    <h1>AppProducts</h1>
    <div class="list-group" v-for='(product, index) in products' :key='index'>
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
    products: productsService.list()
  }
  } 
}
</script>

<style>

</style>
