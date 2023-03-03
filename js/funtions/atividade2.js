const prompt = require("prompt-sync")();

let nota1 = parseFloat(prompt("Digite sua primeira nota: "));
let nota2 = parseFloat(prompt("Digite sua segunda nota: "));
let nota3 = parseFloat(prompt("Digite sua terceira nota: "));

let media = prompt("Digite A para uma média aritmética e P para uma média ponderada: ");

if(media === "A" || media === "a" ){
    let mediaA = (nota1 + nota2 + nota3) / 3;
    mediaA > 10 ? console.log("Algo deu errado, confira os dados que você inseriu"): console.log(`Sua média aritmétrica ${mediaA.toFixed(2)} pontos`);
} else if(media === "P" || media === "p"){
    let mediaP = ((nota1 * 5) + ( nota2 * 3) + ( nota3 * 2)) / (5 + 3 + 2);
    mediaP > 10 ? console.log("Algo deu errado, confira os dados que você inseriu"): console.log(`Sua média aritmétrica ${mediaP.toFixed(2)} pontos`);
} else{
    console.log("Algo deu errado, confira os dados que você inseriu");
}