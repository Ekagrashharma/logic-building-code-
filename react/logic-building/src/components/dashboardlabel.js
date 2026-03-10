import './App.css'

const menu = [
  {id:1,label:"Dashboard",roles:["admin","editor"]},
  {id:2,label:"Users",roles:["admin"]},
  {id:3,label:"Profile",roles:["admin","editor","viewer"]}
];

const currentUser = {role:"editor"};

const App = () => {

  function renderMenu(user){
    return menu
      .filter(item => item.roles.includes(user.role))
      .map(item => (
        <li key={item.id}>{item.label}</li>
      ))
  }

  return (
    <section className="flex justify-between">
      
      <div className="bg-blue-600 h-screen w-2xs">
        <ul>
          {renderMenu(currentUser)}
        </ul>
      </div>

      <div>main content</div>

    </section>
  )
}

export default App