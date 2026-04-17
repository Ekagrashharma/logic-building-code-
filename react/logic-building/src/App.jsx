import './App.css'

const App = () => {

const [form, setform] = useState({name:"",email:""})
const [save, setsave] = useState(false)

  return (
    <div>
      <input className='h-1 w-2 text-black' type="text" value={value}placeholder='enter any text'  />
    </div>
  )
}

export default App
