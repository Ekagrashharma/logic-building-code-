const users = [
    {id:1,profile: {name:"A",city:"Delhi" }
    }
]

console.log(flaternUser(users))

function flaternUser(users){
    const flatUser = users.map(({profile ,id})=>({id,...profile}))
    return flatUser
}