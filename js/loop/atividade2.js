const prompt = require("prompt-sync")();


const number = parseInt(prompt("Digite um número: "));

for (let i = 1; i <= number; i++) {
  number % i == 0 ? console.log(i): ''
}