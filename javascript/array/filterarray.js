const users = [
    {id:1,name:"A",active:true,emailVerified:true },
    {id:2,name:"B",active:false,emailVerified:true },
    {id:3,name:"C",active:true,emailVerified:false }
]

const newuser = users.filter( users => users.active == true &&  users.emailVerified == true)
console.log(newuser)