import './App.css'
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

    return (
    <div>
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
