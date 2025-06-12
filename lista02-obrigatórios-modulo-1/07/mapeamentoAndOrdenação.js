// Dado um array produtos = [{ nome, preco }, …], crie uma função que retorne um novo array apenas com os nomes, ordenados por preço crescente, usando map, sort.

const produtos = [
    { name: "Camisa", price: 150 },
    { name: "Tênis", price: 450 },
    { name: "Tv 32 pol roku", price: 1299 },
    { name: "Andador confort baby", price: 259 },
    { name: "Pó Químico Seco", price: 300 }
]

function SaldaoQueimaDeEstoque(arrProdutos = [{}]) {
    const arrOrdenado = arrProdutos.sort((a, b) => {
        if (a.price > b.price) {
            return 1
        }

        if (a.price < b.price) {
            return -1
        }

        return 0
    })

    return arrOrdenado.map((product) => {
        console.log(product.name)
    })
}

SaldaoQueimaDeEstoque(produtos)

