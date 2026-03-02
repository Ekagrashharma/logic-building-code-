const users = [
  {id:1,name:"Aman" },
  {id:2,name:"Sara" }
];

const App = () => {
  const result = users.filter((item => item.name.includes("Aman")))

  return (
    <div >{result.map(item=> (
      <h4 key={item.id}>name is {item.name}</h4>
    ))}</div>
  )
}

export default App