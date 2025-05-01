# Classificador de Nota

## Descrição

Programa de console que recebe uma nota (de 0 a 10) digitada pelo usuário e classifica a situação do aluno:

- Aprovado com Distinção
- Aprovado
- Recuperação
- Reprovado

Entrada e saída são interativas, com validação de dados. O programa se encerra quando o usuário digita `"s"`.

---

## Como Funciona

1. Solicita uma nota entre 0 e 10.
2. Se digitar `"s"` ou `"S"`, o programa é encerrado.
3. Se o valor for inválido (não numérico ou acima de 10), avisa e repete.
4. Classificação:
   - `nota === 10`: Aprovado com Distinção
   - `7 <= nota < 10`: Aprovado
   - `5 <= nota < 7`: Recuperação
   - `nota < 5`: Reprovado

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

## Exemplo De Uso

```bash
Digite sua nota de 0 - 10: ou 's' para sair: 10
Aprovado com Distinção!

Digite sua nota de 0 - 10: ou 's' para sair: 8
Aprovado

Digite sua nota de 0 - 10: ou 's' para sair: 6
Recuperação.

Digite sua nota de 0 - 10: ou 's' para sair: 3
Reprovado.

Digite sua nota de 0 - 10: ou 's' para sair: s
(Programa encerrado)

```
