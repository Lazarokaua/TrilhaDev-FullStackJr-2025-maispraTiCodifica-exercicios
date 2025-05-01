# Lista de Exercícios - JavaScript com Node.js

Este repositório contém 15 exercícios resolvidos com foco em lógica de programação utilizando JavaScript no ambiente Node.js.  
Todos os scripts utilizam `prompt-sync` para entrada de dados no terminal e foram finalizados com validação, menu interativo e boas práticas.

---

## Checklist de Exercícios

1. [x] Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if. ✅ 2025-04-29  
2. [x] Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else. ✅ 2025-04-29  
3. [x] Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if. ✅ 2025-04-30  
4. [x] Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada. ✅ 2025-04-30  
5. [x] Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else. ✅ 2025-04-30  
6. [x] Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.  
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B  
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)  
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)  
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C) ✅ 2025-05-01  
7. [x] As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra. ✅ 2025-05-01  
8. [x] Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente. ✅ 2025-05-01  
9. [x] Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console utilizando um loop for. ✅ 2025-05-01  
10. [x] Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes. ✅ 2025-05-01  
11. [x] Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for. ✅ 2025-05-01  
12. [x] Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for. ✅ 2025-05-01  
13. [x] Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números. ✅ 2025-05-01  
14. [x] Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while. ✅ 2025-05-01  
15. [x] Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for. ✅ 2025-05-01  

---

## Execução

1. Instale a dependência:
   ```bash
   npm install prompt-sync
   ```

2. Execute o arquivo desejado:
   ```bash
   node nome-do-exercicio.js
   ```

---

## Observações

Todos os exercícios utilizam entrada via terminal com validação e foco no aprendizado de estruturas de repetição, condições, cálculos matemáticos e menus interativos.
