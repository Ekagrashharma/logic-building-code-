const cart = [
  {id:1,price:1000,qty:2 },
  {id:2,price:500,qty:3 }
]

const initialPrice = 0
const totalPrice = cart.reduce((acc, item)=>{
    return acc + item.price ;
}, initialPrice)

console.log(totalPrice)