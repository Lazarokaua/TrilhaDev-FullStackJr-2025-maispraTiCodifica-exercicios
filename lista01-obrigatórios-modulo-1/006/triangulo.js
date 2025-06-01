const input = require("prompt-sync")();

function verificarTriangulo() {
    // Ler os três lados do triângulo
    const A = Number(input("Digite o valor do lado A: "));
    const B = Number(input("Digite o valor do lado B: "));
    const C = Number(input("Digite o valor do lado C: "));

    // Verificar se todos são números positivos
    if (A <= 0 || B <= 0 || C <= 0) {
        console.log("Erro: Todos os lados devem ser números positivos!");
        return;
    }

    // Verificar condição de existência do triângulo
    const formaTriangulo = (A < B + C) && (B < A + C) && (C < A + B);
    
    if (!formaTriangulo) {
        console.log("Os valores fornecidos NÃO formam um triângulo!");
        return;
    }

    // Determinar o tipo de triângulo
    if (A === B && B === C) {
        console.log("Triângulo Equilátero");
    } else if (A === B || A === C || B === C) {
        console.log("Triângulo Isósceles");
    } else {
        console.log("Triângulo Escaleno");
    }
}

verificarTriangulo();