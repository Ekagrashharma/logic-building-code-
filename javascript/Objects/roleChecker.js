        const user = {
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

const validUser = (user)=>{
    return user?.permissions?.admin.includes("dashboard") ?? false
}
const newValideUser = validUser(user)
console.log(newValideUser)