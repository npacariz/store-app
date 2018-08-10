<template>
  <div>
    <h1>AppCustomers</h1>

    <div class="list-group" v-for='(customer, index) in customers' :key='index'>
      <p>Customer: {{customer.firstName}} {{customer.lastName}}</p>
      <p>Email: {{customer.email}}</p>
      <button class='btn btn-danger' @click='deleteCustomer(customer)'>Delete</button>
    </div>
  </div>
</template>

<script>
import {customerService} from '../services/CustomerService.js'
export default {
  name: 'AppCustomers',

  data() {
    return {
      customers: customerService.list(),
      
    }
  },

  methods: {
    deleteCustomer(customer) {
      customerService.deleteCustomer(customer)
    }
  }
}
</script>

<style>

</style>
