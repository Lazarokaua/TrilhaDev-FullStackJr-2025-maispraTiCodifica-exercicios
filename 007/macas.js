const input = require("prompt-sync")();

let continuar = true;
let precoUnitario = 0;

while (continuar) {
  let quantidade = Number(
    input("Digite a quantidade de maçãs compradas (ou 0 para sair): ")
  );

  if (quantidade === 0) {
    continuar = false;
    console.log("Encerrando o programa...");
    break;
  }

  if (quantidade < 12) {
    precoUnitario = 0.3;
  } else if (quantidade >= 12) {
    precoUnitario = 0.25;
    }
    
    const total = quantidade * precoUnitario

    console.log(`Total: ${total.toFixed(2)}`)
}
