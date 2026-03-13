import {use, useContext, useState} from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import { ThemeContext } from './components/themeContext'

// const user= {name:"Aman",role:"admin"}

const themes= {
 admin:{color:"red"},
 editor:{color:"blue"},
 viewer:{color:"green"}
}
const App = () => {
  const [user, setuser] = useState({name:"Aman",role:"user"})

  const theme = themes[user.role]

  const changerole =(role)=>{
    setuser({...user, role})
  }

  return (
    <ThemeContext.Provider value={theme}>
    <div>
      <h1>User :{user.name}</h1>

      <button onClick={()=>{changerole("admin")}} >Admin</button>
      <button onClick={()=>{changerole("editor")}} >Editor</button>
      <button onClick={()=>{changerole("user")}} >User</button>

    <Dashboard />
    </div>
    </ThemeContext.Provider>
  )
}

export default App
