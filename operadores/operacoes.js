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

module.exports = {
  somar: somar,
  subtrair: subtrair,
  dividir: dividir,
  multiplicar: multiplicar,
};
