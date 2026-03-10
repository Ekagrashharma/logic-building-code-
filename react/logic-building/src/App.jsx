
const menu = [
  {id:1,label:"Dashboard",roles: ["admin","editor"] },
  {id:2,label:"Users",roles: ["admin"] },
  {id:3,label:"Profile",roles: ["admin","editor","viewer"] }
];const currentUser = {role:"editor" };


const App = () => {
  return (
    <section className="flex bg-red-200">
      <div className="bg-blue-600">hello side bar </div>
    </section>
  )
}

export default App
