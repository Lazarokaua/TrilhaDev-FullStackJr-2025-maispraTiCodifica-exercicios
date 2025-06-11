// Escreva uma função que conte quantas propriedades do tipo string existem em um objeto e retorne esse número.


const pessoa = {
    nome: "Kaua",
    idade: 20,
    cidade: "Curitiba",
    ativo: true
}

function countStringsAtObject(obj) {

    let totalStringsProperty = 0

    for (let index in obj) {
        if (typeof obj[index] === "string") {
            totalStringsProperty += 1
        }


    }

    return totalStringsProperty
}

console.log(countStringsAtObject(pessoa))

