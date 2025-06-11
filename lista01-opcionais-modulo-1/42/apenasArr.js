// Crie um objeto chamado dados que contém várias propriedades, incluindo números, strings e arrays. Escreva uma função que retorne um novo objeto apenas com as propriedades que são arrays.


const dados = {
  nome: "Lázaro",
  idade: 20,
  hobbies: ["programar", "ler"],
  notas: [10, 9, 8],
  ativo: true
}


function retornarArrays(obj) {
    const propertyArr = {}

    for (let index in obj) {
        Array.isArray(obj[index]) ? propertyArr[index] = obj[index] : null
    }

    return propertyArr
}

console.log(retornarArrays(dados))