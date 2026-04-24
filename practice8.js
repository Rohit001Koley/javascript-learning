const users = [
  { name: "Rohit", age: 17 },
  { name: "Amit", age: 22 },
  { name: "Sara", age: 15 },
  { name: "Lara", age: 30 }
]
let result=users.map(user=>({name : user.name , age : user.age, status : user.age<18?"Minor":"Adult"}))
console.log(result)//map method with complicated examples 