const input = require("prompt-sync")();

// Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.

while (true) {
  let userInput = input(`Escolha uma opção: \n 
    1 - Calcular IMC
    2 - Sair
    \n
    `);

  const opcao = Number(userInput);

  switch (opcao) {
    case 1:
      let peso = parseFloat(input("Digite seu peso em kg: "));
      let altura = parseFloat(input("Digite sua altura em metros: "));
      let imc = peso / (altura * altura);
      let categoria;

      if (imc < 18.5) {
        categoria = "Baixo peso";
      } else if (imc < 25) {
        categoria = "Peso normal";
      } else if (imc < 30) {
        categoria = "Sobrepeso";
      } else {
        categoria = "Obesidade";
      }

      console.log(`Seu IMC é ${imc.toFixed(2)}, categoria: ${categoria}`);
      break;

    case 2:
      console.log("Encerrando o programa...");
      process.exit();

    default:
      console.log("Opção Inválida.");
      continue;
  }
}