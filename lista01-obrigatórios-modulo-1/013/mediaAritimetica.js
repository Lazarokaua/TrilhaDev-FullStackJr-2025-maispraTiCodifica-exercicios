const input = require("prompt-sync")();
// todo Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

let numeros = [];
let continuar = true;
let i = 1;

while (continuar) {
  console.log(`${i}° numero: `);
  let valor = Number(
    input("Digite numeros para a média: (digite '0' para finalizar)")
  );

  if (valor === 0) {
    continuar = false;

    let soma = numeros.reduce((a, b) => a + b, 0);
    let media = soma / numeros.length;

    console.log(`Média: ${media.toFixed(2)}`);
  }

  numeros.push(valor);
  i++;
}
