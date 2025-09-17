// Objetivo de uma função =  definir um bloco de código reutilizavel.


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function somar(a, b) {
  rl.question('Digite o primeiro valor: ', function (valor1) {
    rl.question('Digite o segundo valor: ', function (valor2) {
      let x = Number(valor1);
      let y = Number(valor2);

      if (x < y) {
        soma = y + x;
        return console.log(`O valor de soma de ${y} + ${x} é: ${soma}`);
      } else {
        soma = x + y;
        console.log(`O valor de soma de ${x} + ${y} é: ${soma}`);
      }

      rl.close();
    });
  });
}

function subtrair(a, b) {
  rl.question('Digite o primeiro valor: ', function (valor1) {
    rl.question('Digite o segundo valor: ', function (valor2) {
      let x = Number(valor1);
      let y = Number(valor2);

      if (x > y) {
        let soma = x - y;
        return console.log(`O valor de subtração de ${x} - ${y} é: ${soma}`);
      } else {
        let soma = y - x;
        console.log(`O valor de subtração de ${y} - ${x} é: ${soma}`);
      }

      rl.close();
    });
  });
}

function dividir(a, b) {
  rl.question('Digite o primeiro valor: ', function (valor1) {
    rl.question('Digite o segundo valor: ', function (valor2) {
      let x = Number(valor1);
      let y = Number(valor2);
      let resultado = x / y;

      console.log(`O valor de divisão de ${x} / ${y} é: ${resultado}`);

      rl.close();
    });
  });
}

function multiplicar(a, b) {
  rl.question('Digite o primeiro valor: ', function (valor1) {
    rl.question('Digite o segundo valor: ', function (valor2) {
      let x = Number(valor1);
      let y = Number(valor2);
      let resultado = x * y;

      console.log(`O valor de multiplicação de ${x} * ${y} é: ${resultado}`);

      rl.close();
    });
  });
}


