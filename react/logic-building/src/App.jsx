import './App.css'
const employees = [ 
    {id:1,name:"Aman" }, 
    {id:2,name:"Sara" } 
  ];

const isLoggedIn =false;

const App = () => {
  return (
    <div>
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
