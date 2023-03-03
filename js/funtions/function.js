// const prompt = require("prompt-sync")();

// -> função simples
// function functionName(n1, n2){
//    console.log(n1, n2); 
// }
// functionName(1, 2);


// // -> função anônima
// const description = function(text) {
//     console.log(text);
// }
// description("função anônima!!");


// -> função return
// function returnValue(value01, value02){
//     const sum = value01 + value02;

//     console.log(sum);
//     return sum;
// }
// returnValue(4,6)


// Arrow Function
// const newFunction = () => {
//     console.log(name);
// }
// console.log(newFunction("Arrow function here!")); 


// Callback
const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
    console.log("callback here");
}) ;