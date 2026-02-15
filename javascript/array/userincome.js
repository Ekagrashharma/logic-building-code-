const products = [
    {id:1,name:"Laptop",price:50000 },
    {id:2,name:"Mouse",price:500 }
]

const uiproducts =products.map(p=>({
    ...p,
    price :` $${p.price}`
}))

console.log(uiproducts)