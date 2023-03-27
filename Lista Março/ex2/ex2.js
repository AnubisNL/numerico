function eliminacaoDeGauss(A, b) {
  const n = A.length;
  
  // Eliminação gaussiana
  for (let k = 0; k < n-1; k++) {
    for (let i = k+1; i < n; i++) {
      const fator = A[i][k] / A[k][k];
      for (let j = k+1; j < n; j++) {
        A[i][j] -= fator * A[k][j];
      }
      b[i] -= fator * b[k];
    }
  }

  // Retrosubstituição
  const x = new Array(n);
  for (let i = n-1; i >= 0; i--) {
    let soma = 0;
    for (let j = i+1; j < n; j++) {
      soma += A[i][j] * x[j];
    }
    x[i] = (b[i] - soma) / A[i][i];
  }

  return x;
}


  function eliminacaoDeGaussComPivotamento(A, b) {
    const n = A.length;
  
    // Eliminação gaussiana com pivotamento parcial
    for (let k = 0; k < n - 1; k++) {
      // Encontra o índice do maior elemento em valor absoluto na coluna k
      let maxIndex = k;
      let maxAbsValue = Math.abs(A[k][k]);
      for (let i = k + 1; i < n; i++) {
        if (Math.abs(A[i][k]) > maxAbsValue) {
          maxIndex = i;
          maxAbsValue = Math.abs(A[i][k]);
        }
      }
  
      // Se o maior elemento não está na diagonal principal, troca as linhas
      if (maxIndex !== k) {
        [A[k], A[maxIndex]] = [A[maxIndex], A[k]];
        [b[k], b[maxIndex]] = [b[maxIndex], b[k]];
      }
  
      // Eliminação gaussiana na coluna k
      for (let i = k + 1; i < n; i++) {
        const fator = A[i][k] / A[k][k];
        for (let j = k + 1; j < n; j++) {
          A[i][j] -= fator * A[k][j];
        }
        b[i] -= fator * b[k];
        A[i][k] = 0; // Zera elementos abaixo da diagonal principal
      }
    }
  
    // Retrosubstituição
    const x = new Array(n);
    for (let i = n - 1; i >= 0; i--) {
      let soma = 0;
      for (let j = i + 1; j < n; j++) {
        soma += A[i][j] * x[j];
      }
      x[i] = (b[i] - soma) / A[i][i];
    }
  
    return x;
  }
  
  

  let x=[[0.4096, 0.1234, 0.3678,0.2943],
  [0.2246, 0.3872, 0.4015,0.1129],
  [0.3645, 0.1920, 0.3781,0.0643],
  [0.1784,0.4002,0.2786,0.3927]]
  let r=[[0.4043], [0.1550], [0.4240,0.2557]]

  


console.log(eliminacaoDeGauss(x,r))
console.log(eliminacaoDeGaussComPivotamento(x,r))