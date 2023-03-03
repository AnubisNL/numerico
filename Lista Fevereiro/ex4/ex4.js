function bissecao(h, a, b, eps) {
  if (h(a) * h(b) >= 0) {
      console.log("Intervalo inadequado.");
      return null;
  }
  
  while ((b - a) / 2 > eps) {
      let c = (a + b) / 2;
      if (h(c) === 0 || (b - a) / 2 < eps) {
          return c;
      } else if (h(a) * h(c) < 0) {
          b = c;
      } else {
          a = c;
      }
  }
  
  return (a + b) / 2;
}

function falsaPosicao(h, a, b, eps) {
  if (h(a) * h(b) >= 0) {
      console.log("Intervalo inadequado.");
      return null;
  }
  
  let c = a;
  while (Math.abs(h(c)) > eps) {
      c = (a * h(b) - b * h(a)) / (h(b) - h(a));
      if (h(a) * h(c) < 0) {
          b = c;
      } else {
          a = c;
      }
  }
  
  return c;
}
 // essa é a função f(x)-g()
 function h(x) {
    return x ** 3 - 3 * x;
}

console.log(bissecao(h,-2.-1,0.001))
console.log(falsaPosicao(h,-2.-1,0.001))


