const PF = require('./PF');
const Disciplina = require('./Disciplina');

class Aluno extends PF {
  #matricula;
  #curso;
  #disciplina;

  setMatricula(matricula) {
    if (matricula) {
      if (matricula.length === 8 && matricula.startsWith('20')) {
        this.matricula = matricula;
        return true;
      } else {
        return false;
      }
    }
  }
  getMatricula() {
    return this.matricula;
  }

  setCurso(curso) {
    if (curso === 'ADS' || curso === 'SI') {
      this.curso = curso;
      return true;
    } else {
      return false;
    }
  }
  getCurso() {
    return this.curso;
  }

  setDisciplina(disciplina) {
    this.#disciplina = disciplina;
  }
  getDisciplina() {
    return this.#disciplina;
  }
} // fim classe

module.exports = Aluno;

/* 

const aluno = new Aluno();
aluno.setNome('Emerson');

const disciplina = new Disciplina();
disciplina.setNome('Front-End');

aluno.setDisciplina(disciplina);

console.log(aluno.getNome() + ' ' + aluno.getDisciplina().getNome());
console.log(aluno.getNome());

*/
