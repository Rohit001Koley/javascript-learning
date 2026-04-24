const products = [
  { name: "Phone", price: 10000 },
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 500 }
]
result=products.map(prod=>({name:prod.name ,price:prod.price, expensive: prod.price>10000,
    label:prod.price===10000?'Moderate':prod.price<10000?'Cheap':'Expensive'}))
    console.log(result)//map using multiple conditions                                  