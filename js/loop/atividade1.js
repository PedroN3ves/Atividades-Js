const prompt = require("prompt-sync")();

let choose = -Infinity; 

for (let i = 0; i < 10; i++) {
  const ordinal = i + 1;
  const number = parseFloat(prompt(`Digite o ${ordinal} º número:`));
  if (number > choose) {
    choose = number;
  }
}
console.log("O maior número digitado foi: ", choose);