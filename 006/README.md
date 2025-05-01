# Verificador de Tipo de Triângulo

## Descrição

Programa que solicita ao usuário os três lados de um triângulo e:
1. Verifica se os lados formam um triângulo válido.
2. Classifica o triângulo como:
   - Equilátero
   - Isósceles
   - Escaleno

---

## Como Funciona

1. Solicita ao usuário o valor dos três lados (A, B, C).
2. Verifica se os valores são positivos.
3. Aplica a regra da existência de triângulo:
   - A < B + C  
   - B < A + C  
   - C < A + B
4. Se formar um triângulo, classifica:
   - `Equilátero` → três lados iguais
   - `Isósceles` → dois lados iguais
   - `Escaleno` → todos os lados diferentes

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
Digite o valor do lado A: 5
Digite o valor do lado B: 5
Digite o valor do lado C: 5
Triângulo Equilátero
```

---

## Melhorias Futuras

- Validar se a entrada é numérica.
- Permitir execução via menu interativo.

---
