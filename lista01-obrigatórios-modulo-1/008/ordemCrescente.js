const input = require("prompt-sync")();

// * Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

function exibirMenu() {
  console.log(`Escolha uma opção: \n 
        1 - Informar valores
        2 - Sair
        \n
        `);
}

let continuar = true

while (continuar) {
  exibirMenu();

  const opcao = Number(input("Digite sua opção: "));

  switch (opcao) {
    case 1:
      let primeiroValor = parseFloat(input("Digite o primeiro numero: "));
      let segundoValor = parseFloat(input("Digite o segundo numero: "));

      if (primeiroValor === segundoValor) {
        console.log("Os Valores não podem ser iguais!");
        break;
      } else if (primeiroValor > segundoValor) {
        console.log(
          "Valores em ordem crescente: ",
          segundoValor,
          ", ",
          primeiroValor
        );
        break;
      } else {
        console.log(
          "Valores em ordem crescente: ",
          primeiroValor,
          ", ",
          segundoValor
        );
        break;
      }

    case 2:
          console.log("Encerrando o programa...");
          continuar = false
      process.exit();

    default:
      console.log("Opção Inválida.");
      continue;
  }
}
