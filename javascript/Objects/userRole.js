const Users = [
    { name: "A", role: "admin" },
    { name: "B", role: "user" }
]

function groupedUserByRole (Users){
const groupUser = {}

Users.forEach(user => {

const role = user.role

    if(!groupUser[role]){
            groupUser[role] =[];
        }

    groupUser[role].push(user)
    
    });
    
console.log(groupUser)
    return groupUser
}

groupedUserByRole(Users)