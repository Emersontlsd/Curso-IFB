class Pessoa {
  #nome;
  #email;
  #endereco;
  #telefone;
  #nacionalidade;

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

  setEndereco(endereco) {
    if (endereco) {
      this.#endereco = endereco;
      return true;
    } else {
      return false;
    }
  }
  getEndereco() {
    return this.#endereco;
  }

  setTelefone(telefone) {
    if (telefone) {
      this.#telefone = telefone;
      return true;
    } else {
      return false;
    }
  }
  getTelefone() {
    return this.#telefone;
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
