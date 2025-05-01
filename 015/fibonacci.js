const input = require("prompt-sync")();

let continuar = true;

while (continuar) {
  console.log(`\nEscolha uma opção:
1 - Gerar sequência de Fibonacci
2 - Sair\n`);

  const opcao = Number(input("Digite sua opção: "));

  switch (opcao) {
    case 1:
          let a = 0;
          let b = 1;

          console.log(a)
          console.log(b)

          for (let i = 0; i <= 7; i++){
              let proximo = a + b

              a = b
              b = proximo
              console.log(proximo)
          }
      break;

    case 2:
      console.log("Encerrando o programa...");
      continuar = false;
      break;

    default:
      console.log("Opção inválida. Tente novamente.");
  }
}
c