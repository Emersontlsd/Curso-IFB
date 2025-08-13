class Aluno {

  #nomeAluno; // atributo privado
  #matricula; // atributo privado
  #curso; // atributo privado
  #escola; // atributo privado

  setNomeAluno(nomeAluno) {
    this.#nomeAluno = nomeAluno;
  }
  getNomeAluno() {
    return this.#nomeAluno;
  }

  setMatricula(matricula) {
    this.#matricula = matricula;
  }
  getMatricula() {
    return this.#matricula;
  }

  setCurso(curso) {
    this.#curso = curso;
  }
  getCurso() {
    return this.#curso;
  }

  setEscola(escola) {
    this.#escola = escola;
  }
  getEscola() {
    return this.#escola;
  }
} // fim Aluno

module.exports = Aluno;
