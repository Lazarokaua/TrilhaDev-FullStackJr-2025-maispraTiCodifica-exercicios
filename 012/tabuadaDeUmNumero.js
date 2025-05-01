const input = require("prompt-sync")();
// TODO Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.

function exibirMenu() {
  console.log(`Escolha uma opção: \n 
        1 - Informar valor inteiro: 
        2 - Sair
        \n
        `);
}

let continuar = true;

while (continuar) {
  exibirMenu();

  const opcao = Number(input("Digite sua opção: "));

  switch (opcao) {
    case 1:
      const valor = Number(
        input("Digite um numero de 1 a 10 para ver sua tabuada: ")
      );

      if (isNaN(valor)) {
        console.log("Digite apenas numeros!");
        continue;
      }

      if (valor > 0 && valor <= 10) {
        for (let i = 1; i < 11; i++) {
          console.log(`${valor} X ${i} = ${valor * i}`);
        }
      } else {
        console.log("Apenas valores de 1 a 10 são permitidos! ");
        continue;
      }
      break;
    case 2:
      console.log("Encerrando o programa...");
      continuar = false;
      process.exit();

    default:
      console.log("Opção Inválida.");
      continue;
  }
}
