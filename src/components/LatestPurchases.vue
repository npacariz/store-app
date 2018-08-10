<template>
  <div>
      <div class="container">
        <div class="jumbotron">
            <h4>{{customer.firstName}} {{customer.lastName}} </h4> 
            <h5> {{customer.email}} </h5>
            <h6>Latest Purchases:</h6>
            <ul>
                <li v-for='(product, index) in customer.products' :key='index'>
                    {{product.title}}
                </li>
            </ul>
            <router-link class='btn btn-success'  to='/customers'>Back</router-link>
        </div>
        </div>
  </div>
</template>

<script>
import {customerService} from '../services/CustomerService.js'
export default {
  name: 'AppCustomers',
  props:['id'],
  data() {
    return {
        customer: customerService.singleCustomer(this.id)
    }
  },

  
}
</script>

<style>

</style>
