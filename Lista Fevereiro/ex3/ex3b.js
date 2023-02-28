// Definindo as matrizes A, B e C como arrays de arrays
let A = [[1.00, 0], [1.99, 4]];
let B = [[4.00, 0], [0, -1.33]];
let C = [[4, 2], [-8, 0.1]];

// Função para multiplicar duas matrizes de ordem 2
function multiplicarMatrizes(matriz1, matriz2) {
  let resultado = [[0, 0], [0, 0]];
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      for (let k = 0; k < 2; k++) {
        resultado[i][j] += matriz1[i][k] * matriz2[k][j];
      }
    }
  }
  return resultado;
}

// Calculando a matriz resultante da multiplicação A * B
let AB = multiplicarMatrizes(A, B);

// Subtraindo a matriz C da matriz resultante A * B
let resultado = [[0, 0], [0, 0]];
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) {
    resultado[i][j] = AB[i][j] - C[i][j];
  }
}

// Imprimindo a matriz resultado
console.log(resultado);
