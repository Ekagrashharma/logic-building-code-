import { updateForm } from "./utils/updateForm";

const page = () => {

let formState = {
  name: "",
  email: "",
  password: ""
}



const payload= { 
  field: "email", 
  value: "test@mail.com"
  }

// formState={
//   ...formState,
//   [payload.field]:payload.value
// }
// console.log(formState)

formState= updateForm(formState, "name", "ekagra")
formState= updateForm(formState, "email", "ekagrasharma!@#")
console.log(formState.password)

  return (
    <div>
      hello world
    </div>
  )
}

export default page

