import { user } from "./api/user"
import { sanitizeUser } from "./utils/sanitizeUser"

const page = () => {
  console.log("original user",user)

  

  const cleanUser = sanitizeUser(user)
  console.log(cleanUser)

  return (
    <div>
      hello world
    </div>
  )
}

export default page

