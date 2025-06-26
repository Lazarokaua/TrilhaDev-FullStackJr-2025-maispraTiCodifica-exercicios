// 43. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência sobre as do obj1 em caso de conflitos.

/**
 * Combina as propriedades de dois objetos.
 * Propriedades de obj2 sobrescrevem as de obj1 em caso de conflito.
 * @param {Object} obj1 - Primeiro objeto
 * @param {Object} obj2 - Segundo objeto
 * @returns {Object} Novo objeto combinado
 */
function mergeObjects(obj1, obj2) {
    // Usa spread operator para mesclar os objetos
    let obj3 = { ...obj1, ...obj2 }
    return obj3
}

// Exemplos de objetos para teste
let obj1 = { a: 1, b: 2, c: 6 };
let obj2 = { a: 12, b: 2, c: 3 };

// Exibe o resultado da função no console
console.log(mergeObjects(obj1, obj2))

