// Crie um programa que leia o tamanho de três segmentos de reta. Analise seus comprimentos e diga se é possível formar um triângulo com essas retas. Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada lado deve ser menor que a soma dos outros dois.

const seguimentoOne = 200
const seguimentoTwo = 50
const seguimentoTree = 20

function analisarSeguimentos(seg1, seg2, seg3) {
    // criar uma verificação para cada lado -> 1 < (2 + 3), 2 < (1 + 3), 3 < (1 + 2) se todas forem verdadeira ai sim forma triangulo
    let ehTriangulo = false
    if (seg1 < (seg2 + seg3)) {
        return ehTriangulo = true
    } else {
        return ehTriangulo = false
    }

}

console.log(analisarSeguimentos(seguimentoOne, seguimentoTwo, seguimentoTree))
