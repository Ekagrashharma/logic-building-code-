const formstate = {
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

const update = {
    field: "email",
    value: "test@mail.com"
}

const updatedUser = {
...formstate,
[update.field]:update.value
}

console.log(updatedUser)
console.log(formstate)