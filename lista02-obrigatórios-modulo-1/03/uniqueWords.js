// 3. Palavras Únicas Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair todas as palavras únicas e exibi-las em um array.
const input = require("prompt-sync")()

const userWord = input("Digite uma Frase para ver as palavras únicas: ")
const uniqueWord = []
const wordsWithoutSpace = userWord.split(" ")


for (let i = 0; i < wordsWithoutSpace.length; i++){
    if (!uniqueWord.includes(wordsWithoutSpace[i])) {
        uniqueWord.push(wordsWithoutSpace[i])
    } else {
        continue
    }
    
}

console.log(uniqueWord)


