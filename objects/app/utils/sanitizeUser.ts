import{ user } from "../api/user"

export function sanitizeUser (user: user | null) {

    if(!user)
        return console.log("user not find")

    const {password, token ,...cleanUser}= user
    return cleanUser
    } 