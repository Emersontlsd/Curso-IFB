const prompt = require('prompt-sync')();
const Pessoa = require('./Pessoa.js');

nome = prompt('informe seu nome: ');
peso = prompt('Informe seu peso: ');
altura = prompt('informe sua altura: ');

const pessoaN = new Pessoa(nome, peso, altura);
console.log(pessoaN.imc());

const maria = new Pessoa('Maria', 68, 1.59);
console.log(maria.imc());

const joao = new Pessoa('João', 90, 1.9);
console.log(maria.imc()"\n");

const carlos = new Pessoa();
carlos.peso = 77;
carlos.altura = 1.70;
console.log(maria.imc());


