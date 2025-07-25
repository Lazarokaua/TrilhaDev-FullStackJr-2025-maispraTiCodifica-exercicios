//  Crie um jogo de JoKenPo (Pedra-Papel-Tesoura-Lagarto-Spock).

const input = require("prompt-sync")()

const opcoes = ["pedra", "papel", "tesoura", "lagarto", "spock"]

// Pontuação
let alternativas;
let homemPontos = 0
let maquinaPontos = 0
while (alternativas !== 0) {


    console.log("Pedra-papel-tesoura-lagarto-Spock, Digite sua escolha contra a IA ou '0' para sair!")
    console.log(`
        1 -> Pedra \n
        2 -> Papel \n
        3 -> Tesoura \n
        4 -> Lagarto \n
        5 -> Spock \n
        6 -> Ver Regras \n
        7 -> Ver Pontuação \n
        0 -> Sair \n
        `)

    alternativas = Number(input())

    switch (alternativas) {
        case 1:
            homemVsMaquina(opcoes[0])
            break;
        case 2:
            homemVsMaquina(opcoes[1])
            break;
        case 3:
            homemVsMaquina(opcoes[2])
            break;
        case 4:
            homemVsMaquina(opcoes[3])
            break;
        case 5:
            homemVsMaquina(opcoes[4])
            break;
        case 6:
            showRules()
            break;
        case 7:
            showPontuacao()
            break;

        default:
            console.log("Opção inválida, Digite '0' para sair ou ")
            console.log(`
        1 -> Pedra \n
        2 -> Papel \n
        3 -> Tesoura \n
        4 -> Lagarto \n
        5 -> Spock \n
        6 -> Ver Regras \n
        0 -> Sair \n
        `)
            continue;
    }


}

function homemVsMaquina(homemOpc) {
    const indiceMaquina = Math.floor(Math.random() * 5)
    const escolhaMaquina = opcoes[indiceMaquina]

    console.log(`Você escolheu: ${homemOpc} | Máquina escolheu: ${escolhaMaquina}`)

    if (escolhaMaquina === homemOpc) {
        console.log("Deu empate!")
    } else if (
        (escolhaMaquina === 'pedra' && (homemOpc === 'tesoura' || homemOpc === 'lagarto'))
        || (escolhaMaquina === 'papel' && homemOpc === 'pedra')
        || (escolhaMaquina === 'tesoura' && (homemOpc === 'papel' || homemOpc === 'lagarto'))
        || (escolhaMaquina === 'lagarto' && homemOpc === 'papel')
        || (escolhaMaquina === 'spock' && homemOpc === 'pedra')
        || (escolhaMaquina === 'lagarto' && homemOpc === 'spock')
        || (escolhaMaquina === 'papel' && homemOpc === 'spock')
        || (escolhaMaquina === 'spock' && homemOpc === 'tesoura')
    ) {
        maquinaPontos += 1
        console.log("-> Máquina wins!\n")
        showPontuacao()
    } else {
        homemPontos += 1
        console.log("-> Você wins!\n")
        showPontuacao()
    }


}

function showPontuacao() {
    console.log(`Máquina: ${maquinaPontos} \n`)
    console.log(`Homem: ${homemPontos} \n`)
}


function showRules() {
    console.log(`
        Regras do Jogo:
        Tesoura decapita lagarto
        Lagarto come papel
        Papel refuta Spock
        Spock vaporiza pedra
        Pedra amassa tesoura
        Tesoura corta papel
        Papel cobre pedra
        Pedra esmaga lagarto
        Lagarto envenena Spock
        Spock quebra tesoura
        `
    )
}
