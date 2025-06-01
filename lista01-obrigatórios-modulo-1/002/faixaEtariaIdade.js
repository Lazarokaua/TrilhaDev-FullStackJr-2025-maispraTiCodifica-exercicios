const input = require("prompt-sync")();

// * Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.

while (true) {
  let userInput = Number(input("Digite sua idade: ou '0' para sair: "));

  if (userInput === 0) {
    break;
  }

  if (isNaN(userInput)) {
    console.log("digite uma idade válida! ");
    continue;
    }
    
    if (userInput < 0) {
        console.log("Sua idade precisa ser inteira, não negativa!")
        continue
    }

  if (userInput > 0 && userInput <= 12) {
    console.log(
      "fala campeão(a), você é uma criança ainda, com sonhos, grande imaginação, futuro da nação!"
    );
  } else if (userInput > 12 && userInput <= 17) {
    console.log(
      "Temos aqui um(a) adolescente, como está a preparação para vida adulta? fica tranquilo(a). Vai dar tudo certo!"
    );
  } else if (userInput >= 18 && userInput <= 64) {
    console.log(
      "Fala sangue bom! você é um(a) adulto(a). Muitas responsabilidades, certo? fica tranquilo(a), você não está sozinho(a)!"
    );
  } else if (userInput >= 65 && userInput < 100) {
    console.log("Bença vô(ó)! Amamos muito você! você já é um(a) idoso(a)!");
  } else if (userInput > 100 && userInput < 969) {
    console.log("Temos um(a) matusalém. 🖖 Vida Longa e Prospera!");
  } else {
      console.log("Sua idade não foi possível ser computada, 📡 Data estelar -298674.0 🖖")
  }
}
