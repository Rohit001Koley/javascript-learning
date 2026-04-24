function selectItems(item) {

let price=0

//switch case statement to determine the price of the item selected by the user

switch (item) {
    case 'coffee':
    price=2
    break


 

case 'sandwitches':
    price=5
    break





case 'salad':
price=4
break

  

case 'lemon cake':
    price=3
    break

    default:
    return `item not found, we dont sell ${item}`
}
return `you selected ${item}.that will be $${price} dollars`     


}
console.log(selectItems('kutta'))