const input = require("prompt-sync")();

// * Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

function exibirMenu() {
  console.log(`Escolha uma opção: \n 
        1 - Informar valor inteiro: 
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
          const valor = Number(input("Digite o valor a ser impresso: "))
          if (isNaN(valor)) {
              console.log("Digite apenas numeros!")
              continue
          }
          for (let i = 0; i < 10; i++) {
              console.log(valor)
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
