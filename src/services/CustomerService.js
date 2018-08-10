const customers = [

    {
        id:'1',
        firstName: 'Marko',
        lastName: 'Markovic' ,
        email: 'markomarkovic@gmail.com',
        products: []  
    },

    {
        id:'2',
        firstName: 'Petar',
        lastName: 'Petrovic' ,
        email: 'petarpetrovic@gmail.com',
        products: []  
    },

    {
        id:'3',
        firstName: 'Stefan',
        lastName: 'Stefanovic' ,
        email: 'stefanstefanovic@gmail.com',
        products: []  
    },

    {
        id:'4',
        firstName: 'Joe',
        lastName: 'Doe' ,
        email: 'joedoe@gmail.com',
        products: []  
    },
    
]

let id = 5;


class Customers {

    list() {
        return customers
    }

    deleteCustomer(value) {
        let index = customers.indexOf(value)
        customers.splice(index, 1)
    }


    addCustomer(value) {
        value.id = id
        value.products = [],
        customers.push(value)
        id++;
    }

    singleCustomer(value) {
       return customers.find(customer =>customer.id === value)
    }

}


export  const customerService = new Customers()