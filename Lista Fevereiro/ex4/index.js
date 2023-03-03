function bissecao(h, a, b, eps) {
  if (h(a) * h(b) >= 0) {
    window.alert("Intervalo inadequado.");
      
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
    window.alert("Intervalo inadequado.");
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

function calcular() {
      var res = document.getElementById('res')
      var res2 = document.getElementById('res2')
      var ra = document.getElementById('a')
      var rb = document.getElementById('b')
      var re = document.getElementById('e')

      var a1= Number(ra.value)
      var b1= Number(rb.value)
      var e1= Number(re.value)

      r = bissecao(h,a1,b1,e1)
      r2 = falsaPosicao(h,a1,b1,e1)

      res.innerHTML= 'o resultado usando o método de Bisseção é = ' + r
      res2.innerHTML= 'o resultado usando o método de Falsa Posição é = ' + r2 
}



