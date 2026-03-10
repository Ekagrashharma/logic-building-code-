import './App.css'

const notifications = [
  {id:1,message:"Payment received",read:false },
  {id:2,message:"hello dear",read:true },
  {id:3,message:"hello dear niitn ",read:true }
];

const res = notifications.filter(item => item.read === true)
console.log(res)

const App = () => {
  return (
    <div>
      {res.map(item => 
        <ul key={item.id}>{item.message}</ul>
      )}
    </div>
  )
}

export default App
