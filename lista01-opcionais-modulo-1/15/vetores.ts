// Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No final, mostre quais são os números pares que foram digitados e em que
// posições eles estão armazenados.

const numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numeros.map((num, index) => {
    if (num % 2 === 0) {
        // numero par encontrado
        const i = index
        const pares: number[] = []
        pares.push(num)

        console.log(`Numero par encontrado: ${pares}\n      na posição ${i}`)
    }


})
