import ALUNO from '../pessoas/Aluno.js'; // 02 // Importa a classe Aluno
import AlunoDAO from '../pessoas/DAOs/AlunoDAO.mjs'; // 03 // Importa a DAO que manipula objetos
import Endereco from '../pessoas/Endereco.js'; // 04 // Importa a classe Endereco
import Telefone from '../pessoas/Telefone.js'; // 05 // Importa a classe Telefone

const aluno = new ALUNO(); // 08 // Cria instância de Aluno
aluno.setNome('Emerson'); // 09 // Define o nome
aluno.setEmail('emeersontlsd@gmail.com'); // 10 // Define o e-mail com validação
aluno.setCPF('05773716143'); // 11 // Define o CPF com validação mínima de tamanho
aluno.setCurso("Front End com React");
aluno.setDisciplina("REACT JS");
aluno.setMatricula("20255986");

// ========== Endereço ==========

const end = new Endereco(); // 13 // Cria objeto endereço
end.setLogradouro('QNM 21'); // 14 // Define logradouro
end.setCep('72.215-213'); // 15 // Define CEP
aluno.setEndereco(end); // 16 // Associa endereço à Aluno

// ========== Telefones ==========

const fone = new Telefone(); // 18
fone.setDdd('61'); // 19 // Define DDD
fone.setNumero('98285-8372'); // 20 // Define número
aluno.addTelefone(fone); // 21 // Adiciona telefone ao array do aluno

const fone2 = new Telefone(); // 23
fone2.setDdd('62'); // 24
fone2.setNumero('98116-0418'); // 25
aluno.addTelefone(fone2); // 26

const alunoDAO = new AlunoDAO(aluno); // 34 // Cria DAO passando o objeto aluno

var x = alunoDAO.toJSON(); // 36 // Gera o JSON do objeto
alunoDAO.saveJSON(); // 37 // Salva no "localStorage" simulado

console.log(x); // 39 // Exibe o objeto JSON diretamente
console.log(JSON.stringify(x)); // 40 // Exibe o objeto convertido em string JSON
console.log(alunoDAO.recoveryJSON()); // 41 // Lê do localStorage e exibe a versão recuperada
