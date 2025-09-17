const Endereco = require('./Endereco');
const Telefone = require('./Telefone');

class Pessoa {
  #nome;
  #email;
  #nacionalidade;

  // relacionamento n-1 Endereço
  #endereco;

  setEndereco(endereco) {
    if (endereco instanceof Endereco) {
      this.#endereco = endereco;
      endereco.setPessoa(this); // referencia cruzada
      return true;
    } else {
      return false;
    }
  }
  getEndereco() {
    return this.#endereco;
  }
  //================================================

  // relacionamento N - N com telefone
  #telefones = [];

  addTelefone(telefone) {
    if (telefone instanceof Telefone) {
      this.#telefones.push(telefone);
      telefone.setPessoa(this); // referencia cruzada
      return true;
    } else {
      return false;
    }
  }
  getTelefones() {
    return this.#telefones;
  }

  setNome(nome) {
    if (nome) {
      this.#nome = nome;
      return true;
    } else {
      return false;
    }
  }
  getNome() {
    return this.#nome;
  }

  setEmail(email) {
    if (email) {
      this.#email = email;
      return true;
    } else {
      return false;
    }
  }
  getEmail() {
    return this.#email;
  }

  setNacionalidade(nacionalidade) {
    if (nacionalidade) {
      this.#nacionalidade = nacionalidade;
      return true;
    } else {
      return false;
    }
  }
  getNacionalidade() {
    return this.#nacionalidade;
  }
} // fim pessoa

module.exports = Pessoa;


