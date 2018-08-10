<template>
  <div>
    <h4>Add New Customer</h4>
    <form class='center_div' @submit.prevent>
        <div class="input-group">
          <input id="email" type="text" class="form-control" v-model="newUser.firstName" placeholder="Firsname">
        </div>
        <div class="input-group">
          <input id="email" type="text" class="form-control" v-model="newUser.lastName"  placeholder="Lastname">
        </div>
       <div class="input-group">
          <input id="email" type="text" class="form-control" v-model="newUser.email"  placeholder="Email">
        </div>
        <button @click='addCustomer' class='btn btn-success'>Add Customer</button>
    </form>


    <h1>Customers</h1>

    <div class="list-group" v-for='(customer, index) in customers' :key='index'>
      <p>Customer: {{customer.id}} {{customer.firstName}} {{customer.lastName}}</p>
      <p>Email: {{customer.email}}</p>
      <button class='btn btn-danger' @click='deleteCustomer(customer)'>Delete</button>
       <router-link class='btn btn-success'  :to="{ name:'customersPurchas',  params: {id: customer.id}}">Latest Purchasesr</router-link>
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
      newUser: {
        
      }
    }
  },

  methods: {
    deleteCustomer(customer) {
      customerService.deleteCustomer(customer)
    },
    addCustomer() {
      
     customerService.addCustomer(this.newUser)
      this.newUser = {
   
      }
      
    }
  }
}
</script>

<style>
.center_div{
    margin: 0 auto;
    width: 20%
}
</style>
