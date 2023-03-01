const prompt = require("prompt-sync")();

let choose = -Infinity; 

for (let i = 0; i < 10; i++) {
  const numero = parseFloat(prompt(`Digite o ${i+1}º número:`));
  
  if (numero > choose) {
    choose = numero;
  }
}

console.log("O maior número digitado foi: ",choose);