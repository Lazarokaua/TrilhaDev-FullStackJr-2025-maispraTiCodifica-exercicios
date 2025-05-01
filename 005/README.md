# Calculadora de IMC

## Descrição

Programa de console que calcula o Índice de Massa Corporal (IMC) de uma pessoa com base no peso e altura informados.  
A classificação é feita conforme os critérios padrão da OMS.

---

## Como Funciona

1. O programa exibe um menu com duas opções:
   - `1`: Calcular IMC
   - `2`: Sair
2. Se o usuário escolher `1`, ele deve informar o peso (kg) e altura (m).
3. O IMC é calculado com a fórmula:  
   `IMC = peso / (altura * altura)`
4. A categoria de peso é determinada com base no resultado:
   - IMC < 18.5 → Baixo peso
   - 18.5 ≤ IMC < 25 → Peso normal
   - 25 ≤ IMC < 30 → Sobrepeso
   - IMC ≥ 30 → Obesidade

---

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
1 - Calcular IMC
2 - Sair

>> 1
Digite seu peso em kg: 70
Digite sua altura em metros: 1.75
Seu IMC é 22.86, categoria: Peso normal

>> 2
Encerrando o programa...

```
