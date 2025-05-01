# Sequência de Fibonacci

## Descrição

Programa que gera e imprime os **10 primeiros números** da sequência de Fibonacci utilizando um loop `for`.  
O usuário interage com um menu para iniciar a geração ou sair do programa.

---

## Como Funciona

1. O programa exibe um menu com duas opções:
   - `1`: Gerar sequência de Fibonacci
   - `2`: Sair
2. Ao escolher `1`, o programa:
   - Define os dois primeiros valores da sequência: `0` e `1`.
   - Usa um loop `for` para calcular os próximos 8 números da sequência.
   - Exibe os 10 números no console.
3. O programa se repete até que o usuário escolha sair.

---

## Tecnologias Utilizadas

- Node.js
- Biblioteca `prompt-sync`

---

## Instruções de Execução

1. Instale a biblioteca:
   ```bash
   npm install prompt-sync
   ```
2. Execute com:
   ```bash
   node nome-do-arquivo.js
   ```

---

## Exemplo de Uso

```bash
Escolha uma opção:
1 - Gerar sequência de Fibonacci
2 - Sair

Digite sua opção: 1
0
1
1
2
3
5
8
13
21
34
```

---

## Melhorias Futuras

- Permitir ao usuário definir quantos números da sequência deseja gerar.
- Exibir todos os números em uma única linha separados por vírgula.

---

