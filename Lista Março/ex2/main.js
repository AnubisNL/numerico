function gausspivo(A, b) {
    const n = A.length;
    const Ab = new Array(n);
  
    // Combina matriz A com vetor b em uma matriz aumentada
    for (let i = 0; i < n; i++) {
      Ab[i] = [...A[i], b[i]];
    }
  
    // Eliminação de Gauss
    for (let i = 0; i < n; i++) {
      // Encontra o pivô
      let max = Math.abs(Ab[i][i]);
      let maxIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (Math.abs(Ab[j][i]) > max) {
          max = Math.abs(Ab[j][i]);
          maxIndex = j;
        }
      }
  
      // Troca as linhas se necessário
      if (maxIndex !== i) {
        [Ab[i], Ab[maxIndex]] = [Ab[maxIndex], Ab[i]];
      }
  
      // Zera elementos abaixo do pivô
      for (let j = i + 1; j < n; j++) {
        const factor = Ab[j][i] / Ab[i][i];
        for (let k = i; k <= n; k++) {
          Ab[j][k] -= factor * Ab[i][k];
        }
      }
    }
  
    // Retrosubstituição
    const x = new Array(n);
    for (let i = n - 1; i >= 0; i--) {
      let sum = 0;
      for (let j = i + 1; j < n; j++) {
        sum += Ab[i][j] * x[j];
      }
      x[i] = (Ab[i][n] - sum) / Ab[i][i];
    }
  
    return x;
  }
  function gauss(A, b) {
    const n = A.length;
    const Ab = new Array(n);
  
    // Combina matriz A com vetor b em uma matriz aumentada
    for (let i = 0; i < n; i++) {
      Ab[i] = [...A[i], b[i]];
    }
  
    // Eliminação de Gauss sem pivotamento
    for (let i = 0; i < n - 1; i++) {
      for (let j = i + 1; j < n; j++) {
        const factor = Ab[j][i] / Ab[i][i];
        for (let k = i; k <= n; k++) {
          Ab[j][k] -= factor * Ab[i][k];
        }
      }
    }
  
    // Retrosubstituição
    const x = new Array(n);
    for (let i = n - 1; i >= 0; i--) {
      let sum = 0;
      for (let j = i + 1; j < n; j++) {
        sum += Ab[i][j] * x[j];
      }
      x[i] = (Ab[i][n] - sum) / Ab[i][i];
    }
  
    return x;
  }
  function decomposeLU(A) {
    const n = A.length;
    const L = new Array(n).fill(null).map(() => new Array(n).fill(0));
    const U = new Array(n).fill(null).map(() => new Array(n).fill(0));
  
    // Inicializa L com a diagonal principal igual a 1
    for (let i = 0; i < n; i++) {
      L[i][i] = 1;
    }
  
    // Realiza a eliminação de Gauss com pivotamento parcial
    for (let i = 0; i < n; i++) {
      // Encontra o pivô máximo
      let maxRow = i;
      for (let j = i + 1; j < n; j++) {
        if (Math.abs(A[j][i]) > Math.abs(A[maxRow][i])) {
          maxRow = j;
        }
      }
  
      // Troca a linha atual com a linha do pivô máximo
      [A[i], A[maxRow]] = [A[maxRow], A[i]];
      [L[i], L[maxRow]] = [L[maxRow], L[i]];
  
      // Eliminação Gaussiana
      for (let j = i + 1; j < n; j++) {
        const factor = A[j][i] / A[i][i];
        L[j][i] = factor;
        for (let k = i; k < n; k++) {
          A[j][k] -= factor * A[i][k];
        }
      }
    }
  
    // Preenche U com a matriz triangular superior resultante
    for (let i = 0; i < n; i++) {
      for (let j = i; j < n; j++) {
        U[i][j] = A[i][j];
      }
    }
  
    return { L, U };
  }
  
  const A = [[0.4096, 0.1234, 0.3678,0.2943],
             [0.2246, 0.3872, 0.4015,0.1129],
             [0.3645, 0.1920, 0.3781,0.0643],
             [0.1784,0.4002,0.2786,0.3927]]
  const b = [0.4043, 0.1550, 0.4240,0.2557]
  const A1 = [[1,1,20**9],
              [1,-1,10**9],
              [2,2,0]]
  const b1 = [1,1,1]

  const x = gauss(A1, b1);
  console.log(x); // [ 2, 1, -1 ]
  const a = gausspivo(A1, b1);
  console.log(a); // [ 2, 1, -1 ]
  const { L, U } = decomposeLU(A1);
  console.log("L = ", L);
  console.log("U = ", U);