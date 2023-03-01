const prompt = require("prompt-sync")();
var name;
name = prompt("Digite seu nome: ");


var nascimento;
nascimento = parseInt(prompt("Digite seu ano de nascimento: "));
var anoAtual;
anoAtual = parseInt(prompt("Digite o Ano atual: "));

var idade;
idade = parseInt(anoAtual - nascimento);


console.log("seu nome é: ",name);
console.log("sua idade é: ", idade);
if(idade >= 18){
    console.log("Você tem idade para votar e ter a habilitação");
}else if(idade >= 16){
    console.log("Você tem idade para votar, mas não pode ter a habilitação");
} else{
    console.log("Você não pode votar nem tirar habilitação");
}
