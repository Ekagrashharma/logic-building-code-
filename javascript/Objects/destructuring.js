const destructureUser = {
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

const userCity =destructureUser?.address?.location?.city
const userZipcode =destructureUser?.address?.location?.zipcode

console.log(`the user city is ${userCity} and Zip code is ${userZipcode}`)
