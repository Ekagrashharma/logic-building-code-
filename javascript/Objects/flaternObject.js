const input = { "user.profile.name": "A" }

const result ={}

function flaternObjects (input){

    for (let key in input) {
        const keys = key.split(".");
        let current = result;

        keys.forEach(( part, index )=> {
            if( index == keys.length -1) {
                current[part] = input[key];
            }else {
                if( !current[part] ){ current[part] = {} }

                current = current[part] }
        });
    }
    return result;
}

console.log(flaternObjects(input))