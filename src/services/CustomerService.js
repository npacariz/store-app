const customers = [

    {
        id:'001',
        firstName: 'Marko',
        lastName: 'Markovic' ,
        email: 'markomarkovic@gmail.com',
        products: []  
    },

    {
        id:'001',
        firstName: 'Petar',
        lastName: 'Petrovic' ,
        email: 'petarpetrovic@gmail.com',
        products: []  
    },

    {
        id:'001',
        firstName: 'Stefan',
        lastName: 'Stefanovic' ,
        email: 'stefanstefanovic@gmail.com',
        products: []  
    },

    {
        id:'001',
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


}


export  const customerService = new Customers()