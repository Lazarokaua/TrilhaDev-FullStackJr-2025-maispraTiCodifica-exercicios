# Impressão Repetida de Valor

## Descrição

Programa em Node.js que solicita ao usuário um número inteiro e o imprime 10 vezes no console.  
O programa possui um menu interativo que permite repetir o processo ou encerrar.

---

## Como Funciona

1. Exibe um menu com duas opções:
   - `1`: Informar um número inteiro para ser impresso 10 vezes.
   - `2`: Encerrar o programa.
2. Valida se o número digitado é válido (numérico).
3. Imprime o número 10 vezes com um `for`.

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
Escolha uma opção:
1 - Informar valor inteiro:
2 - Sair

>> 1
Digite o valor a ser impresso: 7
7
7
7
7
7
7
7
7
7
7

>> 2
Encerrando o programa...

```
