function cholesky(A) {
    const n = A.length;
    const L = Array(n).fill().map(() => Array(n).fill(0));
  
    for (let i = 0; i < n; i++) {
      for (let j = 0; j <= i; j++) {
        let sum = 0;
        for (let k = 0; k < j; k++) {
          sum += L[i][k] * L[j][k];
        }
  
        if (i === j) {
          L[i][j] = Math.sqrt(A[i][i] - sum);
        } else {
          L[i][j] = (A[i][j] - sum) / L[j][j];
        }
      }
    }
  
    return L;
  }
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
  
 
  const A = [
    [5, -1, 0, 0, 0],
    [-1, 5, -1, 0, 0],
    [0, -1, 5, -1, 0],
    [0, 0, -1, 5, -1],
    [0, 0, 0, -1, 5]
  ];
  

  console.log(cholesky(matrix));
  