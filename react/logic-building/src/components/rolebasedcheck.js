import './App.css'


const menu = [
  { id: 1, label: "Dashboard", roles: ["admin", "editor"] },
  { id: 2, label: "Settings", roles: ["admin"] },
  { id: 3, label: "Profile", roles: ["admin", "editor", "viewer"] }
];
const role ="editor";

// const allowedMenu = menu.filter( item => item.roles.includes(role))

// const App = ()=>{
//   return <div>
//     <h2>Allowed Label are :</h2>
//     {allowedMenu.map(item => 
//     <ol>{item.label}</ol>
//   )}</div>
// }

// export default App 

const App = () => {
  return ( 
    <>
    <h4>the allowedMenu are </h4>
    <ul>
      {menu.filter(item => item.roles.includes(role))
            .map(item => 
              <li key={item.id}>{item.label}</li>
            )}
    </ul>
    </>
  )
}

export default App