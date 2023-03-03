const prompt = require("prompt-sync")();

let numbers = [];

for( let i = 0; i < 5; i++){
    numbers[i] = parseFloat(prompt(`Digite o ${1+i}° número: `))
}
console.log(`O maior número é ${Math.max(...numbers)} e o menor é ${Math.min(...numbers)}`);