import './App.css'

const cart = [
  {id:1,price:100 },
  {id:2,price:200 },
  {id:3,price:200 },
  {id:23,price:24600 },
];


    const totalPrice = cart.reduce((acc, item)=>{
      return acc+ item.price
    },0)

const App = () => {
  return (
    <div>
      <h2>the total is your cart is</h2>{totalPrice}</div>
  )
}

export default App