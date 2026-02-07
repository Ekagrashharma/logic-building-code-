    export  const user = {
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

