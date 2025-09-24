import { localStorage } from './localStorage.mjs'; 
import ALUNO from '../Aluno.js'; 
import Disciplina from '../Disciplina.js';

export default class AlunoDAO {

    #aluno;

    constructor(aluno) {
        if(aluno instanceof ALUNO){
            this.#aluno = aluno;
        }
    }

    toJSON() {
        // 10 // Constrói uma representação em JSON da instância 
        let fones = []; // 11 // Cria array para armazenar os telefones
        for (let fone of this.#aluno.getTelefones()) {
          // 12 // Itera sobre os telefones associados
          fones.push({
            // 13 // Adiciona ao array um objeto com DDD e número
            ddd: fone.getDdd(),
            numero: fone.getNumero(),
          });
        }
    
        return {
        
          nome: this.#aluno.getNome(),
          email: this.#aluno.getEmail(),
          cpf: this.#aluno.getCPF(),
          matricula: this.#aluno.getMatricula(),
          curso: this.#aluno.getCurso(),
          disciplina: this.#aluno.getDisciplina(),
          endereco: {
            logradouro: this.#aluno.getEndereco().getLogradouro(),
            cep: this.#aluno.getEndereco().getCep(),
          },
          telefone: fones,
        };
      }

      saveJSON() {
        // 30 // Método para salvar o objeto PJ em formato JSON no localStorage
        // transforma em string JSON usando stringify() e armazena
        localStorage.setItem('aluno', JSON.stringify(this.toJSON())); // 32
      }
    
      recoveryJSON() {
        // 34 // Método para recuperar os dados de PJ armazenados
        // recupera a string armazenada e transforma em JSON usando parse()
        return JSON.parse(localStorage.getItem('aluno')); // 36
      }


}// fim class AlunoDAO