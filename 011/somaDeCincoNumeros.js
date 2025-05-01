const input = require("prompt-sync")();

// todo Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.

let numeros = [];
for (let i = 1; i <= 5; i++) {
  console.log(`${i}° numero: `);
  let valor = Number(input("Digite 5 numeros para soma: "));
  numeros.push(valor);
}

console.log(numeros.reduce((prev, current) => {
    return prev + current
}));
