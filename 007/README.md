# Cálculo de Valor Total da Compra de Maçãs

## Descrição

Programa que calcula o valor total da compra de maçãs com base na quantidade informada pelo usuário.  
O valor unitário da maçã depende da quantidade comprada:
- Menos de 12 unidades: R$ 0,30 cada
- 12 ou mais unidades: R$ 0,25 cada

---

## Como Funciona

1. O programa solicita ao usuário a quantidade de maçãs.
2. Enquanto a quantidade for diferente de 0:
   - Aplica a regra de preço unitário conforme a quantidade.
   - Calcula e exibe o valor total da compra.
3. Ao digitar `0`, o programa encerra.

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
2. Execute o programa:
   ```bash
   node nome-do-arquivo.js
   ```

---

## Exemplo de Uso

```bash
Digite a quantidade de maçãs compradas (ou 0 para sair): 5
Total: 1.50

Digite a quantidade de maçãs compradas (ou 0 para sair): 12
Total: 3.00

Digite a quantidade de maçãs compradas (ou 0 para sair): 0
Encerrando o programa...
```

---

## Melhorias Futuras

- Validar se o valor digitado é um número positivo.
- Exibir quantas maçãs foram compradas junto com o total.

---

## Desafio Extra

Adicione suporte para múltiplas frutas com preços distintos e descontos personalizados.
