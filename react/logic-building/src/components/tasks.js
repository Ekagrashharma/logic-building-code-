const tasks = [
  {id:1,completed:true },
  {id:2,completed:true }
];

const App = () => {

  const result = tasks.filter(task => task.completed).length;
  console.log(result.length)

  return (
    <div>
      <h4>the total completed tasks are {result.length}</h4>
    </div>
  )
}

export default App