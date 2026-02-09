const payload = {
    name : "ekgar",
    email : "ekgara@gmail.com"
};

function isObjectIsEmpty(payload){

    console.log(Object.keys(payload).length)

    if(Object.keys(payload).length === 0){
        return "object is  empty"
    }else 
        return "object is not empty"
}
const object = isObjectIsEmpty(payload)
console.log(object)