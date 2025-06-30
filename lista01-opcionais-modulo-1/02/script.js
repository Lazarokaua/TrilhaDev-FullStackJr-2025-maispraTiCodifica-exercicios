// Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km h-1, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.

const input = require("prompt-sync")()

let velocidadeCarro = Number(input("Digite sua velocidade: "))

let limiteDeVelocidade = 80

if (velocidadeCarro <= 0 || velocidadeCarro > 400) {
    console.log("Não são permitidos valores negativos. Também não pode exceder 400 km")
} else if (velocidadeCarro > limiteDeVelocidade) {
    let multa = (velocidadeCarro - limiteDeVelocidade) * 5
    console.log(`Você foi multado! Valor da multa: ${multa}`)
} else {
    
    console.log("Passou certo cidadão! ")
}

