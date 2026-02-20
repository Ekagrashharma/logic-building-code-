import './App.css'
const employees = [ 
    {id:1,name:"Aman" }, 
    {id:2,name:"Sara" } 
  ];



const App = () => {
  return (
    <div>
      <ul>
      {employees.map((employee)=>(
        <li key={employee.id}>{employee.name}</li>
      ))}
    </ul>
    </div>
  )
}

export default App
