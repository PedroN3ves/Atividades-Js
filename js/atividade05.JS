const prompt = require("prompt-sync")();

let salario = parseFloat(prompt("Qual o seu salário? "));
let perCent = 30/100;
let aumento = salario*perCent;
let salario2 = salario + aumento;

if(salario > 500){
    console.log("Você não receberá um aumento.");
} else{
    console.log("Seu aumento será de ", aumento, "R$, e seu novo salário será de: ", salario2, "R$");
}
