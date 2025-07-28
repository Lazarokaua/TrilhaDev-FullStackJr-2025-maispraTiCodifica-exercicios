// Guardar 7 nomes e exibir em ordem inversa

const nomes: string[] = ['Lázaro', 'Kauã', 'João', 'Maria', 'Gasparzin', 'Felipe', 'Cristiano']


function inverterNomes(nomes: string[]): void {
    // console.log(nomes.reverse())

    for (let i = 1; i <= nomes.length; i++){

        console.log(nomes[nomes.length - i])
    }
}

inverterNomes(nomes)
