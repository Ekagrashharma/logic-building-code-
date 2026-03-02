import './App.css'

const products = [
  {id:1,name:"Phone",price:11000 },
  {id:2,name:"Charger",price:500 }
];

const result = products.filter(item => item.price > 10000)
console.log(result)

const App = () => {
  return (
    <div>
      {result.map((item) => (
        <div key={item.id}>
        <h2>your product name is {item.name}</h2>
        <p>your price is {item.price}</p>
        </div>
      ) )}
    </div>
  )
}

export default App