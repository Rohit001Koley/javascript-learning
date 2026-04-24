function logAnswer(answer,points){
    console.log(`The answer is ${answer} If you got that right,give yourself ${points} points. `)
}
console.log('what is rhe capital of India')
//Settimeout function 
setTimeout(logAnswer,3000,'Delhi',10);