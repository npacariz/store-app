const products = [

    {
        id:'1',
        title: 'telefon',
        quantity: 10,
    },
    {
        id:'2',
        title: 'automobil',
        quantity: 5,
    },
    {
        id:'3',
        title: 'avion',
        quantity: 2,
    },
    {
        id:'4',
        title: 'majica',
        quantity: 100,
    },
    {
        id:'5',
        title: 'trenerka',
        quantity: 20,
    },

    

    
]

let id = 6;


class Products {

    list() {
        return products
    }

    

}


export  const productsService = new Products()