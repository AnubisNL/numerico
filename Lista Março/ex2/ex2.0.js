function gaussElimination(matrix) {
  const n = matrix.length;
  for (let i = 0; i < n; i++) {
    // Encontre a linha com o maior elemento na coluna atual
    let maxRow = i;
    for (let j = i + 1; j < n; j++) {
      if (Math.abs(matrix[j][i]) > Math.abs(matrix[maxRow][i])) {
        maxRow = j;
      }
    }
    // Troque a linha atual pela linha com o maior elemento
    [matrix[i], matrix[maxRow]] = [matrix[maxRow], matrix[i]];
    // Faça a eliminação para tornar a coluna i inferior diagonal
    for (let j = i + 1; j < n; j++) {
      const factor = matrix[j][i] / matrix[i][i];
      for (let k = i; k < n + 1; k++) {
        matrix[j][k] -= factor * matrix[i][k];
      }
    }
  }
  // Resolva o sistema triangular superior
  const solution = new Array(n);
  for (let i = n - 1; i >= 0; i--) {
    let sum = 0;
    for (let j = i + 1; j < n; j++) {
      sum += matrix[i][j] * solution[j];
    }
    solution[i] = (matrix[i][n] - sum) / matrix[i][i];
  }
  return solution;
}

function gaussPivot(matrix) {
  const n = matrix.length;
  for (let i = 0; i < n; i++) {
    // Encontre a linha com o maior elemento em valor absoluto na coluna atual
    let maxRow = i;
    for (let j = i + 1; j < n; j++) {
      if (Math.abs(matrix[j][i]) > Math.abs(matrix[maxRow][i])) {
        maxRow = j;
      }
    }
    // Troque a linha atual pela linha com o maior elemento
    [matrix[i], matrix[maxRow]] = [matrix[maxRow], matrix[i]];
    // Faça a eliminação para tornar a coluna i inferior diagonal
    for (let j = i + 1; j < n; j++) {
      const pivot = matrix[i][i];
      if (pivot === 0) {
        throw new Error('Matrix is singular');
      }
      const factor = matrix[j][i] / pivot;
      for (let k = i; k < n + 1; k++) {
        matrix[j][k] -= factor * matrix[i][k];
      }
    }
  }
  // Resolva o sistema triangular superior
  const solution = new Array(n);
  for (let i = n - 1; i >= 0; i--) {
    let sum = 0;
    for (let j = i + 1; j < n; j++) {
      sum += matrix[i][j] * solution[j];
    }
    solution[i] = (matrix[i][n] - sum) / matrix[i][i];
  }
  return solution;
}

let x=[[1,2],[2,4]]

gaussPivot(x)

console.log(x)