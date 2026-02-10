const firstUser = {
        id: 101,
        name: "Ekagra",
        email: "ekagra@mail.com",
        age: 22,
        role: "admin",
        password: "secret123",
        token: "jwt-token",
        address: {
            location: {
            city: "Bareilly",
            zipcode: "243001",
            },
        },
        settings: {
            theme: "light",
            notifications: true,
        },
        permissions: {
            admin: ["dashboard", "users", "settings"],
            user: ["profile"],
        },
};
const secondUser = {
        id: 101,
        name: "Ekagrasharma",
        email: "ekagra@mailharungala.com",
        age: 245,
        role: "user",
        password: "secret346dfg123",
        token: "jwt-token",
        address: {
            location: {
            city: "Bareilly",
            zipcode: "243001",
            },
        },
        settings: {
            theme: "light",
            notifications: true,
        },
        permissions: {
            admin: ["dashboard", "users", "settings"],
            user: ["profile"],
        },
};

function compareUser (updatedUser , existingUser){
    // console.log(Object.keys(updatedUser))
const diff ={}

for (const keys of Object.keys(updatedUser)) {

const updatedValue = updatedUser[keys]
const existingValue = existingUser[keys]

//  console.log(existingValue)

        if (updatedValue !== existingValue) {
            diff[keys]={
                updatedValue,
                existingValue
            }
        //  console.log(diff)
        }
    } 
    return diff
}
const value = compareUser(secondUser , firstUser)
console.log(value)
// const value = updatedUser[keys]
// const existingValue = existingUser[keys]

//         if(existingValue == value){
//             console.log(value)
//         }