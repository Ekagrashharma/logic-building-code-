const users = [
  {id:1,loggedIn:true },
  {id:2,loggedIn:true },
  {id:3,loggedIn:false },
  {id:4,loggedIn:true }
]
// you can use find for first and singal objects and filter for every true object 
 const loggedInUser= users.filter((user)=>(
    user.loggedIn == true
))
console.log(loggedInUser)