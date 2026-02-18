const users = [
    {name:"A",role:"admin" },
    {name:"B",role:"user" },
    {name:"C",role:"admin" }
]

const groups = Object.groupBy(users, (obj) => obj.role);
console.log(groups)
// users.reduce((user)=>{
//     user.role
// })
