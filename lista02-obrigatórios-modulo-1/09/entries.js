// Escreva duas funções: ○ paresParaObjeto(pares) recebe um array de pares [ [chave, valor], … ] e retorna o objeto equivalente. ○ objetoParaPares(obj) faz o inverso, retornando um array de pares.

function paresParaObjeto(arrPares) {
    if (!Array.isArray(arrPares)) {
        throw new Error("Precisa ser array válido de chave e valor!")
    }

    return arrPares.reduce((acc, par) => {
        const [chave, valor] = par
        
        acc[chave] = valor


        return acc

    }, {})
}


const pares = [['nome', 'Ana'], ['idade', 30]];
// console.log(paresParaObjeto(pares));

const myObject = paresParaObjeto(pares)

function objetoParaPares(obj) {
    if ((!typeof obj === "object" && obj !== null && !Array.isArray(obj))) {
        throw new Error("Não se trata de um objeto, entrada inválida. ")
    }

    return Object.keys(obj).map(k => [k, obj[k]])
}

console.log(objetoParaPares(myObject))
console.log(objetoParaPares({ nome: 'Ana', idade: 30 }));
