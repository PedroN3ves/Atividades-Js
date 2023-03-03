const prompt = require("prompt-sync")();

let n = parseFloat(prompt("Digite um número positivo ou negativo: "));

function returnNumber(n1, n2){
    if( n > 0){
        console.log(n1)
    } else if(n < 0){
        console.log(n2)
    } else if(n == 0 ) {
        console.log("0 é neutro burrão, escolha outro")
    } else {
        console.log("não é um número")
    }  
}
returnNumber(1, 0)