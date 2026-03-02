import './App.css'

const stats = [
  {id:1,label:"Users",value:200 },
  {id:2,label:"Revenue",value:50000 }
];

function Card ({ stats }){
  return (
    stats.map(item => 
    <div key={item.id} className='itemCard'>
      <h5>{item.label}</h5>
      <p>{item.value}</p>
    </div>)
    
  )
}

const App = () => {
  return (
    <div>
      <Card stats={stats}></Card>
    </div>
  )
}

export default App