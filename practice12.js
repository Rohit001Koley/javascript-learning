
const products = [
  { name: "iPhone 13", price: 70000, category: "mobile", rating: 4.5, inStock: true },
  { name: "Samsung Galaxy", price: 40000, category: "mobile", rating: 4.2, inStock: false },
  { name: "MacBook Air", price: 90000, category: "laptop", rating: 4.8, inStock: true },
  { name: "Dell Inspiron", price: 50000, category: "laptop", rating: 4.1, inStock: true },
  { name: "Boat Headphones", price: 2000, category: "accessory", rating: 4.0, inStock: true },
  { name: "Sony Headphones", price: 8000, category: "accessory", rating: 4.6, inStock: false }
]

let result=products.filter(prod=>prod.inStock&&prod.rating>=4&&prod.category==="accessory").map(prod=>prod.name.toUpperCase()).sort()
console.log(result)//real world projects