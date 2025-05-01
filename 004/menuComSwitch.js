const input = require("prompt-sync")();

// * Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.

while (true) {
  let userInput = input(`Escolha entre as opções: \n 
    1 - PARA Imprimir sua data.
    2 - PARA Imprimir saudação.
    3 - PARA Imprimir saudação vulcana.
    4 - PARA Sair
    \n
    `);

  const opcao = Number(userInput);
  const data = new Date();

  switch (opcao) {
    case 1:
      console.log(`Sua data atual: ${data}`);
      break;
    case 2:
      console.log(`Seja bem-vindo(a) ao sistema!`);
      break;
    case 3:
      console.log(`Vida Longa e Prospera! 🖖`);
      break;
    case 4:
      console.log("Encerrando o programa...");
      process.exit();

    default:
      console.log("Opção Inválida.");
      continue;
  }
}
