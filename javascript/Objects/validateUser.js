const user = {
    id: 101,
    name: "Ekagra",
    email: "email.com",
    age: 19,
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



    if(!user.email || user["email"] == ""){
        return console.error("email field is required");   
    }
    else if(user.age <= 18) {
        return console.error("age should be greater than 18")
    }else{
        return console.log("user is valide")
    }
