import './App.css'



function IsUserAdmin({user}){
    if(user.role == "admin"){
      return <div> admin is : {user.name}</div>
    } 
    return <h2>user is not admin !!</h2>
  
}


const App = () => {
  const user = {name:"ekagra",role:"user" };
  return (
      <IsUserAdmin
      user={user}
      />
  )
}

export default App
