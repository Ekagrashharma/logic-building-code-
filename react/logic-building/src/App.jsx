import './App.css'

const orders = [101,102,103];

const App = () => {

  
  return (
    <div>
      <ul>
        {orders.map(item => <li key={item} >{item}</li>
        )}
      </ul>
    </div>
  )
}

export default App

