function createTridiagonalMatrix(n) {
    // Inicializa a matriz com todos os elementos iguais a 0
    let matrix = Array(n).fill().map(() => Array(n).fill(0));
  
    // Adiciona os elementos da diagonal principal
    for (let i = 0; i < n; i++) {
      matrix[i][i] = 5;
    }
  
    // Adiciona os elementos nas diagonais superior e inferior
    for (let i = 0; i < n - 1; i++) {
      // Adiciona -1 nas posições acima e abaixo da diagonal principal
      if (matrix[i][i + 1] !== -1) {
        matrix[i][i + 1] = -1;
      }
      if (matrix[i + 1][i] !== -1) {
        matrix[i + 1][i] = -1;
      }
    }
  
    return matrix;
  }
  
  const matrix = createTridiagonalMatrix(5);
  console.log(matrix);
    