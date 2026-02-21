import './App.css'
import Laptop from './components/Laptop';
const employees = [ 
    {id:1,name:"Aman" }, 
    {id:2,name:"Sara" } 
  ];

  
const isLoggedIn =false;

function Usercard({user}){
  return (
  <div>
    <h1>{user.name}</h1>
    <p>Role:{user.role}</p>
  </div>)
}

const App = () => {

    const user = {name:"John",role:"Admin" };
const product = {name:"Laptop",price:50000 };
    return (
      <div>
      <Laptop product={product}/>
      <Usercard user={user}/>
      <p>{isLoggedIn ? "user is  login , Welcome back " : "user is not logged in , please first login"}</p>
      <ul>
      {employees.map((employee)=>(
        <li key={employee.id}>{employee.name}</li>
      ))}
    </ul>
    </div>
  )
}

export default App
