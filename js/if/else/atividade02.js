const prompt = require("prompt-sync")();

let celsius = parseFloat(prompt("qual a temperatura em grau celsius? "));
let fahrenheit;
let kelvin;


fahrenheit = (celsius * 9/5)+32
kelvin = celsius + 273.15
console.log("Essa temperatura em Fahrenheit é de:", fahrenheit,"°F")
console.log("Essa temperatura em Kelvin é de:", kelvin, "K")