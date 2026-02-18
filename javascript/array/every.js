const fields = [
  {name:"email",value:"abc@mail.com" },
  {name:"password",value:"" }
]


function isUserIsempty(fields){

  const emptyField  = fields.every((field) =>( field.value !== "" ))
  return emptyField ? "fields are valid" : "fields are empty"

}

console.log(isUserIsempty(fields))