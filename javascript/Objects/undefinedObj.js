const user = {
    id: 1,
    name: "Ekagra",
    email: undefined,
    age: 22,
    phone: undefined
    }

const newObj = {}

for (let key in user) {
    if(user[key] !== undefined){
        newObj[key]=user[key];
    }
}
console.log(newObj)