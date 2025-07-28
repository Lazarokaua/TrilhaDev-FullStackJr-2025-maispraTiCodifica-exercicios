import { Prompt } from "prompt-sync";

const input: Prompt = require("prompt-sync")();

function calcularPA(primeiroTermo: number, razao: number): {
    termos: number[], soma: number
} {
  const termos: number[] = [];
  let soma = 0;

  for (let i = 0; i < 10; i++) {
    const termoAtual = primeiroTermo + i * razao;
    termos.push(termoAtual);
    soma += termoAtual;
  }

  return { termos, soma };
}

let primeiroTermo = Number(input("Digite o primeiro termo da PA: "));
let razao = Number(input("Digite a razão da PA: "));

const resultadoPA = calcularPA(primeiroTermo, razao);

console.log("Os 10 primeiros termos da PA são:");
console.log(resultadoPA.termos.join(", "));
console.log(`A soma de todos os valores da sequência é: ${resultadoPA.soma}`);
