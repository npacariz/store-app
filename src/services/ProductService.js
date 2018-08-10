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

    manipulateProducts(product, operator) {
        if(operator === '+') {
            product.quantity++
        }else if (operator === '-' && product.quantity>0) {
            product.quantity--
        }
    }

    

}


export  const productsService = new Products()