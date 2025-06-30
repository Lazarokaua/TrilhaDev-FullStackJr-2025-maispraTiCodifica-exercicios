// Escreva um programa para calcular a redução do tempo de vida de um fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de vida um fumante perderá e exiba o total em dias.

// 1º coisa é lidar com input do usuario via cli
const input = require("prompt-sync")() 

let qtdePorDia = input("Me diga a quantidade de cigarros que fuma por dia: ")
let anosComoFumante = input("e quantos anos já vem fumando? ")


/**
 * input -> processamento -> output. 
 * 
 * Este programa calcula a redução do tempo de vida de um fumante com base na quantidade de cigarros fumados por dia e o número de anos como fumante.
 * 
 * 1. Recebe a quantidade de cigarros fumados por dia e os anos como fumante via CLI.
 * 2. Calcula o total de dias perdidos de vida considerando que cada cigarro reduz 10 minutos de vida.
 * 3. Exibe o resultado em dias.
 */

function calcularDiasPerdidosPorFumar(qtdePorDia, anosComoFumante) {
    const totalCigarrosVida = (qtdePorDia * 365) * anosComoFumante // dias totais como fumante

    // 1 cigarro -> 10 min perdidos de vida
    const minutosPerdidosDeVida = totalCigarrosVida * 10 // total de minutos perdidos


    // Um dia tem 1.440 minutos, que nada mais é que 24 horas x 60 minutos, então, para encontrar a quantidade de dias em uma determinada quantidade de minutos, você irá dividir os minutos por 60, após, dividir novamente por 24.
    const diasPerdidos = minutosPerdidosDeVida / (24 * 60)


    // -> exibir total em dias e total em anos.
    console.log(`Total de dias Perdidos como Fumante: ${Math.floor(diasPerdidos)} Dias.`)
    
}

console.log(calcularDiasPerdidosPorFumar(qtdePorDia, anosComoFumante))
