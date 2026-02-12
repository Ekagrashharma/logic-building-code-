let array = ["name", "email", "role"]

// { name: "", email: "", role: "" }
const newObj = {}

array.forEach(key => {
        newObj[key] = "" ; 
});

    console.log(newObj)