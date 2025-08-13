/*

Classe - Estrutura que eu representar
  --> atributos (caracteristicas, propriedades)
  -->  metodos (ações, funcionalidades)
Objeto --> Insância da classe
*/

class Pessoa {
  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  } // fim constructor

  imc() {
    let imc = this.peso / (this.altura * this.altura);

    if (imc > 0 && imc < 18.5) {
      console.log(
        `Olá, ${this.nome}, seu peso é ${this.peso} e sua altura é ${this.altura}. Seu IMC atual é de: ${imc} e você está abaixo do peso ideal.`
      );
    } else if (imc >= 18.5 && imc < 25) {
      console.log(
        `Olá, ${this.nome}, seu peso é ${this.peso} e sua altura é ${this.altura}. Seu IMC atual é de: ${imc} e você está no peso ideal.`
      );
    } else if (imc >= 25 && imc < 30) {
      console.log(
        `Olá, ${this.nome}, seu peso é ${this.peso} e sua altura é ${this.altura}. Seu IMC atual é de: ${imc} e você está em sobrepeso.`
      );
    } else {
      console.log(
        `Olá, ${this.nome}, seu peso é ${this.peso} e sua altura é ${this.altura}. Seu IMC atual é de: ${imc} e você está obeso.`
      );
    }
  } // fim IMC
} // fim PEssoa

module.exports = Pessoa;
