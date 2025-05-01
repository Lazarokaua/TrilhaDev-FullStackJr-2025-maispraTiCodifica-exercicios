# Menu Interativo com Switch-Case

## Descrição

Programa em Node.js que apresenta um menu interativo ao usuário no console.  
Ao escolher uma das opções, uma ação específica é executada com base em uma estrutura `switch-case`.

---

## Como Funciona

1. Exibe o seguinte menu:
   - `1`: Exibir data atual.
   - `2`: Exibir saudação comum.
   - `3`: Exibir saudação vulcana.
   - `4`: Encerrar o programa.
2. O programa continua até o usuário selecionar a opção `4`.
3. Se o usuário digitar uma opção inválida, recebe um aviso.

---

## Tecnologias Utilizadas

- Node.js
- Biblioteca `prompt-sync`

---

## Instruções de Execução

1. Instale o `prompt-sync`:
   ```bash
   npm install
   ```

## Exemplo de Uso

```bash
Escolha entre as opções:
1 - PARA Imprimir sua data.
2 - PARA Imprimir saudação.
3 - PARA Imprimir saudação vulcana.
4 - PARA Sair

>> 2
Seja bem-vindo(a) ao sistema!

>> 3
Vida Longa e Prospera! 🖖

>> 1
Sua data atual: Wed Apr 30 2025 20:00:00 GMT-0300 (GMT-3)

>> 4
Encerrando o programa...

```
