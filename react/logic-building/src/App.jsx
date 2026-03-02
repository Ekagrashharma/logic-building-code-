import './App.css'

const product = {name:"Laptop",stock:2};

function IsProductInStock ({product}){
  return (
    <div>
      <h3>Product name is {product.name}</h3>

      <button disabled={product.stock == 0}>Buy now</button>
      {product.stock === 0 && (<p> out of stock </p>)}
    </div>
  )
}

const App = () => {
  return (
    <div>
      <IsProductInStock product={product}></IsProductInStock>
    </div>
  )
}

export default App