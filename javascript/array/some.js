const cart = [
    {id:1,stock:3 },
    {id:2,stock:3 }
]

const isStockIsEmpty = (cart)=> cart.stock == 0 ;



console.log(cart.some(isStockIsEmpty))