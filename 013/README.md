# Média Aritmética com Entrada Contínua

## Descrição
Programa em Node.js que recebe números decimais digitados pelo usuário em um loop contínuo.  
Quando o usuário digita `0`, o programa encerra a entrada e calcula a **média aritmética** de todos os números informados.

---

## Como Funciona
1. O programa solicita ao usuário um número decimal.
2. Enquanto o valor digitado for diferente de `0`, o número é armazenado.
3. Quando `0` é digitado, o programa:
   - Soma todos os valores armazenados.
   - Divide pela quantidade de números.
   - Exibe a média final com duas casas decimais.

---

## Tecnologias Utilizadas
- Node.js
- Biblioteca `prompt-sync` para entrada no console.

---

## Instruções de Execução
1. Instale a biblioteca:
   ```bash
   npm install prompt-sync
   ```
2. Execute o programa com:
   ```bash
   node nome-do-arquivo.js
   ```

---

## Exemplo de Uso
```bash
1° numero: 
Digite numeros para a média: 7.5
2° numero: 
Digite numeros para a média: 5
3° numero: 
Digite numeros para a média: 8.25
4° numero: 
Digite numeros para a média: 0
Média: 6.92
```

---

## Melhorias Futuras
- Validar se a entrada é realmente numérica.
- Exibir mensagem personalizada caso nenhum número válido tenha sido inserido.

---