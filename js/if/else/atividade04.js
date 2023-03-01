const prompt = require("prompt-sync")();

let weight = parseFloat(prompt("Informe seu peso em quilogramas: "));
let height = parseFloat(prompt("Informe sua altura em metros: "));

let imc = weight / (height ** 2);
console.log(imc);

if(imc <= 16.9){
    console.log("Você está muito abaixo do peso");
} else if( imc >= 17 && imc <= 18.4 ){
    console.log("Você está abaixo do peso");
} else if( imc >= 18.5 && imc <= 24.9){
    console.log("Você está com peso normal");
} else if( imc >= 25 && imc <= 29.9){
    console.log("Você está acima do peso");
} else if( imc >= 30 && imc <= 34.9){
    console.log("Você está com obesidade grau I");
} else if( imc >= 35 && imc <= 40){
    console.log("Você está com obesidade grau II");
} else if( imc >= 40){
    console.log("Você está com obesidade grau III");
}