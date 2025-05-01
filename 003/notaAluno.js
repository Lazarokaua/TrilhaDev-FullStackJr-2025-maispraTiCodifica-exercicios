const input = require("prompt-sync")();

// * Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

while (true) {
  let userInput = input("Digite sua nota de 0 - 10: ou 's' para sair: ");

  if (userInput === "s" || userInput === "S") {
    break;
  }

  const nota = Number(userInput);

  if (isNaN(nota) || nota > 10) {
    console.log("digite uma nota válida! Precisa ser um numero entre 0 - 10");
    continue;
  }

  if (nota === 10) {
    console.log("Aprovado com Distinção!");
  } else if (nota >= 7 && nota < 10) {
    console.log("Aprovado");
  } else if (nota >= 5 && nota < 7) {
    console.log("Recuperação.");
  } else if (nota < 5) {
    console.log(`Reprovado.`);
  }
}
