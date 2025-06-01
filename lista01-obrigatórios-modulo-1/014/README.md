# Cálculo de Fatorial

## Descrição

Programa que calcula o fatorial de um número inteiro não negativo fornecido pelo usuário, utilizando estrutura de repetição (`for`).  
Inclui menu interativo para continuar ou sair do programa.

---

## Como Funciona

1. O programa exibe um menu com duas opções:
   - `1`: Calcular fatorial
   - `2`: Sair
2. Ao selecionar `1`, o usuário informa um número inteiro não negativo.
3. O programa calcula o fatorial desse número usando um `for` decrescente.
4. Exibe o resultado na tela.

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
1 - Calcular fatorial
2 - Sair

Digite sua opção: 1
Digite o número para calcular seu fatorial: 5
O fatorial de 5 é 120

Digite sua opção: 2
Encerrando o programa...
```

---

## Melhorias Futuras

- Tratar entradas como `"abc"`, `""` ou `-1.5` com mensagens específicas.
- Implementar versão recursiva como comparação.

---

