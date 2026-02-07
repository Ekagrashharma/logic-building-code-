import { access } from "fs"
import { User } from "./api/User"

const page = () => {

const  userValidation = User?.permissions?.admin?.dashboard === true
console.log(userValidation)
  return (
    <div>
      {userValidation?(
        <h1>welcome to the admin dashboard</h1>
      ):(
        <h1>access denied</h1>
      )}
    </div>
  )
}

export default page
