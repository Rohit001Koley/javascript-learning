const products = [
  { name: "Phone", price: 10000 },
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 500 }
]
let result=products.map(prod=>({name : prod.name ,price : prod.price ,expensive : prod.price>10000}))
console.log(result)//map method using boolean ternary operator