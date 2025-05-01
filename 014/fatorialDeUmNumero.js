const input = require("prompt-sync")();

let continuar = true;

while (continuar) {
  console.log(`\nEscolha uma opção:
1 - Calcular fatorial
2 - Sair\n`);

  const opcao = Number(input("Digite sua opção: "));

  switch (opcao) {
    case 1:
      let numero = Number(input("Digite o número para calcular seu fatorial: "));
      
      // Validação da entrada
      if (numero < 0 || !Number.isInteger(numero)) {
        console.log("Erro: Digite um número inteiro não negativo!");
        break;
      }
      
      // Cálculo do fatorial
      let fatorial = 1;
      for (let i = numero; i > 1; i--) {
        fatorial *= i;
      }
      
      console.log(`O fatorial de ${numero} é ${fatorial}`);
      break;

    case 2:
      console.log("Encerrando o programa...");
      continuar = false;
      break;

    default:
      console.log("Opção inválida. Tente novamente.");
  }
}