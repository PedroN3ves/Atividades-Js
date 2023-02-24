const prompt = require("prompt-sync")();

let name = prompt("Digite seu nome: ");
let age = parseInt(prompt("digite sua idade: "));
let yearsWorked = parseInt(prompt("Quantos anos você tem de Contribuição: "));
let gender = prompt("Escolha seu gênero: M (masculino) ou F (feminino): ");


console.log("Seu nome:", name);
console.log("Sua idade:", age, "anos");
console.log("Seu tempo de contribuição é:", yearsWorked, "anos");


if(age < 0 || yearsWorked < 0){
    console.log("Algo deu errado, corrija suas informações");
}else if(gender == "M" || "m"){
    if(yearsWorked >= 15){
        if(age >= 65){
            console.log("Parabéns, você está apto(a) para se aposentar!");
        }else{
            console.log("Você precisa trabalhar ainda mais", 65-age, "anos para se aposentar");
        }
    } else{
        console.log("Você precisa trabalhar ainda mais", 15-yearsWorked, "anos pra se aposentar");
    }
}else if(gender == "F" || "f"){
    if(yearsWorked >= 15){
        if(age >= 62){
            console.log("Parabéns, você está apto(a) para se aposentar!");
        }else{
            console.log("Você precisa trabalhar ainda mais", 62-age, "anos para se aposentar");
        }
    } else{
        console.log("Você precisa trabalhar ainda mais", 15-yearsWorked, "anos pra se aposentar");
    }
}else{
    console.log("Algo deu errado, corrija suas informações");
}


