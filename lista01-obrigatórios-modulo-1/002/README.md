# Classificador de Idade

## Descrição
Programa de console que solicita ao usuário sua idade e classifica em uma das categorias:
- Criança
- Adolescente
- Adulto
- Idoso
- Matusalém
- Idade fora do padrão (erro)

O programa valida a entrada para garantir que seja um número inteiro e positivo, e continua pedindo novas idades até que o usuário digite `0` para sair.

---

## Como Funciona
1. Solicita a idade do usuário.
2. Se digitar `0`, o programa termina.
3. Se a entrada for inválida (não número ou negativa), pede novamente.
4. Classifica a idade nas faixas correspondentes:
   - `0 < idade <= 12`: Criança
   - `13 <= idade <= 17`: Adolescente
   - `18 <= idade <= 64`: Adulto
   - `65 <= idade < 100`: Idoso
   - `100 <= idade < 969`: Matusalém
   - Fora disso: Idade incomputável.

---

## Tecnologias Utilizadas
- Node.js
- Biblioteca `prompt-sync` para entrada de dados via terminal.

---

## Instruções de Execução
1. Certifique-se de ter Node.js instalado.
2. Instale o `prompt-sync`:
   ```bash
   npm install prompt-sync
   ```
3. Execute o programa:
   ```bash
   node nome-do-arquivo.js
   ```

---

## Exemplo de Uso
```bash
Digite sua idade: ou '0' para sair: 10
fala campeão(a), você é uma criança ainda, com sonhos, grande imaginação, futuro da nação!

Digite sua idade: ou '0' para sair: 16
Temos aqui um(a) adolescente, como está a preparação para vida adulta? fica tranquilo(a). Vai dar tudo certo!

Digite sua idade: ou '0' para sair: 35
Fala sangue bom! você é um(a) adulto(a). Muitas responsabilidades, certo? fica tranquilo(a), você não está sozinho(a)!

Digite sua idade: ou '0' para sair: 70
Bença vô(ó)! Amamos muito você! você já é um(a) idoso(a)!

Digite sua idade: ou '0' para sair: 250
Temos um(a) matusalém. 🖖 Vida Longa e Prospera!

Digite sua idade: ou '0' para sair: 969
Sua idade não foi possível ser computada, 📡 Data estelar -298674.0 🖖

Digite sua idade: ou '0' para sair: 0
(Programa encerrado)
```

---