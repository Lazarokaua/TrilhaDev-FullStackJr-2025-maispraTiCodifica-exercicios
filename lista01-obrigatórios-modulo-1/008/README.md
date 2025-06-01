# Ordenador de Dois Valores

## Descrição

Programa que solicita dois valores distintos do usuário e os exibe em ordem crescente.  
Se os valores forem iguais, informa que devem ser diferentes e solicita novamente.

---

## Como Funciona

1. Exibe um menu com opções:
   - `1`: Informar dois valores
   - `2`: Sair
2. O usuário digita dois números:
   - Se forem diferentes, o programa exibe em ordem crescente.
   - Se forem iguais, o programa informa que os valores devem ser distintos.
3. O programa repete até que a opção de sair seja selecionada.

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
1 - Informar valores
2 - Sair

>> 1
Digite o primeiro numero: 8
Digite o segundo numero: 3
Valores em ordem crescente: 3, 8

>> 1
Digite o primeiro numero: 5
Digite o segundo numero: 5
Os valores não podem ser iguais!

>> 2
Encerrando o programa...

```
