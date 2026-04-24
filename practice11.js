const users = [
  { name: "Rohit", age: 21, isActive: true },
  { name: "Aman", age: 16, isActive: true },
  { name: "Puja", age: 25, isActive: false },
  { name: "Raj", age: 30, isActive: true },
  { name: "Riya", age: 19, isActive: true }
]

let result=users.filter(user=>user.age>=18&&user.isActive===true&&user.name.startsWith("R")).map(user=>user.name)
console.log(result)
//filter method combined with map method for more detailed extraction of values