// Em vendas = [{ cliente, total }, …], use reduce para gerar um objeto onde cada chave é um cliente e o valor é a soma de todos os seus total.

const vendas = [
  { cliente: 'Ana',    total: 120 },
  { cliente: 'Bruno',  total:  80 },
  { cliente: 'Ana',    total:  60 },
  { cliente: 'Carlos', total: 200 },
  { cliente: 'Bruno',  total:  40 }
];


let agrupaVendas = vendas.reduce((acc, venda) => {
    const { cliente, total } = venda
    
    if (!acc[cliente]) {
        acc[cliente] = 0
    }

    acc[cliente] += total

    return acc
}, {})


console.log(agrupaVendas)
