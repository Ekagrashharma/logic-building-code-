const patchUser = {
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

const payload = {
    email: "hooloow@gmailpglu.com",
    age: 231,
    };


function patchUpdate (patchUser, payload){
    return {
        ...patchUser,
        ...payload
    }
}
const newUser = patchUpdate(patchUser, payload)
console.log(newUser)