// Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em Km.Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e R$ 0.45 para viagens mais longas.

const input = require("prompt-sync")()

const distanciaPercorrida = input("Digite a distância quer pretendes percorrer: ")

const calcularTotalViagem = (distanciaPercorrida) => {

    if (distanciaPercorrida <= 0) {
        console.log("Não aceitamos retrocessos aqui. Valor negativo ou 0 é um erro.")
        return
    }

    const processamento = distanciaPercorrida > 0 && distanciaPercorrida < 200 ? distanciaPercorrida * 0.5 : distanciaPercorrida * 0.45

    return console.log("Valor total a ser pago pela viagem: R$ " + processamento)
}

calcularTotalViagem(distanciaPercorrida)