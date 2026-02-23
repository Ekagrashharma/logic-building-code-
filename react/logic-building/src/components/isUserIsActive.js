import { act } from 'react';
import './App.css'

const users = [
  {id:1,name:"A",active:true },
  {id:2,name:"B",active:false },
  {id:2,name:"s",active:true },
  {id:2,name:"f",active:true }
];

  const activeUser = users.filter(user => user.active)




const App = () => {
  return ( 
   <>
    <h2>these users are active right now </h2>
    <div>
    {
    activeUser.map(user =>
      <li key={user.id}>{user.name}</li>
    )
      }</div></>
  )
}

export default App