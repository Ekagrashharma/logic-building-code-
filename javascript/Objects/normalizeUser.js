let User = [
    { id: 1, name: "Amit", role: "admin" },
    { id: 2, name: "Riya", role: "user" },
    { id: 3, name: "Karan", role: "user" },
];

normalUser = {}

User.forEach( User =>(
    normalUser[User.id]=User
))
console.log(normalUser)
