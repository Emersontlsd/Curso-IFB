const prompt = require('prompt-sync')();

class Calculadora {
  somar(a, b) {
    return a + b;
  }

  subtrair(a, b) {
    return a - b;
  }

  dividir(a, b) {
    if (b === 0) {
      return `Erro: divisão por zero`;
    }
    return a / b;
  }

  multiplicar(a, b) {
    return a * b;
  }

  potenciar(base, expoente) {
    return base ** expoente;
  }

  raizQuadrada(numero) {
    if (numero < 0) {
      return `Erro: número negativo`;
    }
    return Math.sqrt(numero);
  }
} // fim class

const calc = new Calculadora();

while (true) {
  console.log('\n=== CALCULADORA =====');
  console.log('|  1 - Somar        |');
  console.log('|  2 - Subtrair     |');
  console.log('|  3 - Multiplicar  |');
  console.log('|  4 - Dividir      |');
  console.log('|  5 - Potenciação  |');
  console.log('|  6 - Raiz Quadrada|');
  console.log('|  0 - Sair         |');
  console.log('=====================');

  const opcao = prompt('\nEscolha uma Opção: ');

  let x, y;
  if (opcao === `6`) {
    x = parseFloat(prompt(`Digite o número: `));
  } else if (opcao === `0`) {
    console.log('Encerrando...');
    break;
  } else {
    x = parseFloat(prompt('Digite o primeiro número: '));
    y = parseFloat(prompt('Digite o segundo número: '));
  }

  let resultado;

  switch (opcao) {
    case `1`:
      resultado = calc.somar(x, y);
      break;
    case `2`:
      resultado = calc.subtrair(x, y);
      break;
    case `3`:
      resultado = calc.multiplicar(x, y);
      break;
    case `4`:
      resultado = calc.dividir(x, y);
      break;
    case `5`:
      resultado = calc.potenciar(x, y);
      break;
    case `6`:
      resultado = calc.raizQuadrada(x, y);
      break;
    default:
      console.log(`Opção inválida!`);
      continue;
  }

  console.log(`\nO resultado é: ${resultado}`);
}
