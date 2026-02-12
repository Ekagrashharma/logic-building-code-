const response = { 
    email: ["invalid"], 
    password: ["too short"] 
    }

const newresponse ={}

Object.entries(response).forEach(([feild,message]) => {
    newresponse[feild] = message[0]
});

console.log(newresponse)