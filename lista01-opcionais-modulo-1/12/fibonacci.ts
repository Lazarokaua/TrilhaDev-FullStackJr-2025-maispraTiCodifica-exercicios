import {Prompt} from 'prompt-sync'

const input: Prompt = require("prompt-sync")();

let continuar: boolean = true;

while (continuar) {
  console.log(`\nEscolha uma opção:
1 - Mostrar os 10 primeiros termos da sequência.
2 - Sair\n`);

  const opcao: number = Number(input("Digite sua opção: "));

  switch (opcao) {
    case 1:
          let a = 0;
          let b = 1;

          console.log(a)
          console.log(b)

          for (let i = 1; i <= 8; i++){
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
