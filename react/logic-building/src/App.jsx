import './App.css'
const employees = [ 
    {id:1,name:"Aman" }, 
    {id:2,name:"Sara" } 
  ];

function showEmployees(){
  return(
    <ul>
      {employees.map((employee)=>(
        <li key={employee.id}>{employee.name}</li>
      ))}
    </ul>
  )
}


const App = () => {
  return (
    <div>
      {showEmployees()}
    </div>
  )
}

export default App
