const Pessoa = require('./Pessoa');

class PJ extends Pessoa {
  #cnpj;

  setCNPJ(cnpj) {
    if (cnpj) {
      if (cnpj.length < 18) {
        return false;
      }
      this.#cnpj = cnpj;
      return true;
    } else {
      return false;
    }
  }
  getCNPJ() {
    return this.#cnpj;
  }

  setEmail(email) {
    /*
      Operadores de comparação:
      ==   : igualdade frouxa
      ===  : igualdade estrita
      !=   : diferença frouxa
      !==  : diferença estrita
    */

    if (email !== '') {
      if (email.includes('@')) {
        super.setEmail(email); // chama o metodo original classe base/Pai
        return true;
      } else {
        return false;
      }
    }
  }
} // fim PJ

module.exports = PJ;
