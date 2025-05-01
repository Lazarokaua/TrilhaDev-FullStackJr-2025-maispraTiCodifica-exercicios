# Soma de 5 Números

## Descrição

Programa que solicita ao usuário 5 números inteiros e calcula a soma total dos valores utilizando um loop `for` e o método `reduce()`.

---

## Como Funciona

1. O programa executa um loop de 5 iterações.
2. Em cada iteração:
   - Informa ao usuário qual número está sendo solicitado.
   - Armazena o valor em uma lista.
3. Ao final, utiliza `reduce()` para calcular e exibir a soma de todos os valores.

---

## Tecnologias Utilizadas

- Node.js
- Biblioteca `prompt-sync`

---

## Instruções de Execução

1. Instale a biblioteca:
   ```bash
   npm install
   ```

## Exemplo de Uso

```bash
1° numero:
Digite 5 numeros para soma: 5
2° numero:
Digite 5 numeros para soma: 10
3° numero:
Digite 5 numeros para soma: 2
4° numero:
Digite 5 numeros para soma: 3
5° numero:
Digite 5 numeros para soma: 5

25

```
---


## Melhorias Futuras

- [ ] Validar se cada entrada é realmente um número (isNaN()).

- [ ] Mostrar também a lista de números digitados.

- [ ] Tratar números decimais e negativos com mensagens diferenciadas.