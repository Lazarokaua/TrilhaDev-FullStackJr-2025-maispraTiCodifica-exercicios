//  Crie um jogo de JoKenPo (Pedra-Papel-Tesoura-Lagarto-Spock).

const input = require("prompt-sync")()

let alternativas = Number(input)

const opcoes = ["Pedra", "Papel", "Tesoura", "Lagarto", "Spock"]

// Pontuação

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
    maquinaOpc = Math.floor(Math.random() * 5)


    // Máquina ganhando
    // Pedra esmaga lagarto
    if (opcoes[maquinaOpc] === opcoes[0] && homemOpc === opcoes[3]) {
        console.log(`Pedra esmaga lagarto. maquina++`);
    }

    // Papel cobre pedra
    else if (opcoes[maquinaOpc] === opcoes[1] && homemOpc === opcoes[0]) {
        console.log("Papel Cobre Pedra")
    }
    // Tesoura corta papel
    else if (opcoes[maquinaOpc] === opcoes[2] && homemOpc === opcoes[1]) {
        console.log("Tesoura corta papel")
    }
}


// As regras de Pedra-papel-tesoura-lagarto-Spock são:


// Lagarto envenena Spock
// Spock esmaga (ou derrete) tesoura
// Tesoura decapita lagarto
// Lagarto come papel
// Papel refuta Spock
// Spock vaporiza pedra
// Pedra amassa tesoura
