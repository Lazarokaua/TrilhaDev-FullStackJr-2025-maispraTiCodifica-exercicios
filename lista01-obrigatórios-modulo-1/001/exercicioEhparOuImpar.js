const input = require("prompt-sync")();

// * Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.

while (true) {
  let userInput = Number(input(
    "Digite um numero inteiro: ou '0' para sair: "
  ));

  
  if (userInput === 0) {
      break
    }
    
    if (isNaN(userInput)) {
        console.log("digite um numero válido! ")
        continue
    }

  if (userInput % 2 === 0) {
    console.log("É par!");
  } else if (userInput % 2 !== 0) {
    console.log("É ímpar!");
  }
}
