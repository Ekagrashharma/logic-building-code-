import './App.css'

const theme = { primary : "blue" }

const App = () => {


  return (
    <div>
      {theme.primary === "blue" && (
        <div className='Isblue'>Admin is: {theme.primary}</div>
      )}
    </div>
  )
}

export default App

