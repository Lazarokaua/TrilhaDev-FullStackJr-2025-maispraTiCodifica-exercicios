import { Prompt } from "prompt-sync";

const input: Prompt = require("prompt-sync")()


function sortearNumero(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let min = Number(input("Digite o valor mínimo para o sorteio: "));
let max = Number(input("Digite o valor máximo para o sorteio: "));

let numeroSorteado = sortearNumero(min, max);
let tentativas = 0;
let acertou = false;

while (!acertou) {
  let palpite = Number(input("Tente adivinhar o número sorteado: "));
  tentativas++;

  if (palpite === numeroSorteado) {
    console.log(`Parabéns! Você acertou o número ${numeroSorteado} em ${tentativas} tentativas.`);
    acertou = true;
  } else if (palpite < numeroSorteado) {
    console.log("O número sorteado é maior. Tente novamente!");
  } else {
    console.log("O número sorteado é menor. Tente novamente!");
  }
}
