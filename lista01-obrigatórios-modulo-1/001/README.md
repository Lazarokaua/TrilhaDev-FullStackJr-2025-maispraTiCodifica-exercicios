# Verificador de Número Par ou Ímpar

## Descrição
Programa interativo de console que solicita ao usuário a entrada de um número inteiro, verifica se o número é **par** ou **ímpar**, e exibe o resultado.  
O programa continua executando até que o usuário digite `0`, encerrando o loop.

Além disso, o programa valida se a entrada é realmente um número.

---

## Como Funciona
1. O programa pede ao usuário um número inteiro.
2. Se o usuário digitar `0`, o programa termina.
3. Se a entrada não for um número válido, o programa solicita uma nova entrada.
4. Se for um número válido:
   - Verifica se é par (`divisível por 2`).
   - Verifica se é ímpar (não divisível por 2).
5. Exibe o resultado no console.

---

## Tecnologias Utilizadas
- Node.js
- Biblioteca `prompt-sync` para entrada de dados via terminal.

---

## Instruções de Execução
1. Certifique-se de ter o Node.js instalado na máquina.
2. Instale o `prompt-sync` no projeto:
   ```bash
   npm install prompt-sync
   ```
3. Execute o arquivo JavaScript:
   ```bash
   node nome-do-arquivo.js
   ```

---

## Exemplo de Uso
```bash
Digite um número inteiro: ou '0' para sair: 5
É ímpar!

Digite um número inteiro: ou '0' para sair: 8
É par!

Digite um número inteiro: ou '0' para sair: abc
Digite um número válido!

Digite um número inteiro: ou '0' para sair: 0
(Programa encerrado)
```

---