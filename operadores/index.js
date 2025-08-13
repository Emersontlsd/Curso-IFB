// run `node index.js` in the terminal

var x = 3;
var y = 8;
var soma = x + y;
console.log(soma);
console.log('-------------------------');

function somar(a, b) {
  if (x < y) {
    return y + x;
  } else {
    return x + y;
  }
}

function subtrair(a, b) {
  if (x < y) {
    return y - x;
  } else {
    return x - y;
  }
}

function dividir(a, b) {
  if (x < y) {
    return y / x;
  } else {
    return x / y;
  }
}

function multiplicar(a, b) {
  if (x < y) {
    return y * x;
  } else {
    return x * y;
  }
}

// console.log(`O valor de soma de ${x} + ${y} é: ${soma}`);
// console.log(`O valor de subtração de ${x} - ${y} é: ${subtracao}`);
// console.log(`O valor de divisão de ${x} / ${y} é: ${divisao}`);
// console.log(`O valor de multiplicação de ${x} * ${y} é: ${multiplicacao}`);

console.log(somar());
console.log(subtrair());
console.log(dividir());
console.log(multiplicar());
