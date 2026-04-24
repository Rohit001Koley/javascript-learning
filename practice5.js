let currentTicketNumber = 1
function getNExtTicketNumber() {


    return currentTicketNumber++
}
//increment of data type a++
console.log(`Guest 1, your ticket numner is: ${getNExtTicketNumber()}`)
console.log(`Guest 2, your ticket numner is: ${getNExtTicketNumber()}`)
console.log(`Guest 3, your ticket numner is: ${getNExtTicketNumber()}`)



let currentTicketNumbers = 1
function getNExtTicketNumbers() {


    return ++currentTicketNumbers
}
//increment of data type ++a
console.log(`Guest 1, your ticket numner is: ${getNExtTicketNumbers()}`)
console.log(`Guest 2, your ticket numner is: ${getNExtTicketNumbers()}`)
console.log(`Guest 3, your ticket numner is: ${getNExtTicketNumbers()}`)