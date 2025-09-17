const prompt = require('prompt-sync')();
const Aluno = require('./escola/Aluno');

const aluno1 = new Aluno();

const nome = prompt('Insira o nome do aluno: ');
const matricula = prompt('Insira a matrícula do aluno: ');
const curso = prompt('Insira o nome do curso: ');
const escola = prompt('Insira o nome da escola: ');

aluno1.setNomeAluno(nome);
aluno1.setMatricula(matricula);
aluno1.setCurso(curso);
aluno1.setEscola(escola);

console.log(aluno1.getNomeAluno());
console.log(aluno1.getMatricula());
console.log(aluno1.getCurso());
console.log(aluno1.getEscola());

console.log(
  `O aluno ${aluno1.getNomeAluno()}, tem número de matrícula ${aluno1.getMatricula()} no curso ${aluno1.getCurso()}, ministrado pela instituição ${aluno1.getEscola()}.`
);
