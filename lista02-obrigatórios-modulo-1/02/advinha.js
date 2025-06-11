// Jogo de Adivinhação
// Gerar um número aleatório de 1 a 100 e pedir que o usuário adivinhe. Usar while até acertar, contando tentativas e mostrando “mais alto” ou “mais baixo” nos palpites errados. exercicios_obrigatorios…

const input = require("prompt-sync")()

// um numero aleatório de 1 a 100
let target = Math.floor(Math.random() * 100) + 1
let tentativas = 0
let acertou = false

while (acertou !== true) {

    const userInput = Number(input("Digite até acertar o alvo: "))


    if (userInput === target) {
        console.log(`Parabéns, você acertou o número: ${target} na ${tentativas}° tentativa`)
        acertou = true
    }

    if (userInput > target) {
        tentativas += 1
        console.log("Chute Alto.")
    } else if (userInput < target) {
        tentativas += 1
        console.log("Chute Baixo.")
    }

}

