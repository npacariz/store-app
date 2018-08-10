const customers = [

    {
        id:'001',
        firstName: 'Marko',
        lastName: 'Markovic' ,
        email: 'markomarkovic@gmail.com',
        products: []  
    },

    {
        id:'002',
        firstName: 'Petar',
        lastName: 'Petrovic' ,
        email: 'petarpetrovic@gmail.com',
        products: []  
    },

    {
        id:'003',
        firstName: 'Stefan',
        lastName: 'Stefanovic' ,
        email: 'stefanstefanovic@gmail.com',
        products: []  
    },

    {
        id:'004',
        firstName: 'Joe',
        lastName: 'Doe' ,
        email: 'joedoe@gmail.com',
        products: []  
    },
    
]



class Customers {

    list() {
        return customers
    }

    deleteCustomer(value) {
        let index = customers.indexOf(value)
        customers.splice(index, 1)
    }


    addCustomer(value) {
        customers.push(value)
    }


}


export  const customerService = new Customers()