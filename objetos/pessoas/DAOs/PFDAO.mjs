import { localStorage } from './localStorage.mjs'; 
import PF from '../PF.js'; 
import Titulo from '../Titulo.js';

export default class PFDAO {

    #pf;

    constructor(pf) {
        if(pf instanceof PF) {
            this.#pf = pf;
        }
    }


    toJSON() {
        // 10 // Constrói uma representação em JSON da instância de PJ
        let fones = []; // 11 // Cria array para armazenar os telefones
        for (let fone of this.#pf.getTelefones()) {
          // 12 // Itera sobre os telefones associados à PJ
          fones.push({
            // 13 // Adiciona ao array um objeto com DDD e número
            ddd: fone.getDdd(),
            numero: fone.getNumero(),
          });
        }
    
        return {
        
          nome: this.#pf.getNome(),
          email: this.#pf.getEmail(),
          cpf: this.#pf.getCPF(),
          endereco: {
            logradouro: this.#pf.getEndereco().getLogradouro(),
            cep: this.#pf.getEndereco().getCep(),
          },
          telefone: fones,
          Titulo: {
            numero: this.#pf.getTitulo().getNumero(),
            secao: this.#pf.getTitulo().getSecao(),
            zona: this.#pf.getTitulo().getZona(),
          },
        };
      }

      saveJSON() {
        // 30 // Método para salvar o objeto PJ em formato JSON no localStorage
        // transforma em string JSON usando stringify() e armazena
        localStorage.setItem('pf', JSON.stringify(this.toJSON())); // 32
      }
    
      recoveryJSON() {
        // 34 // Método para recuperar os dados de PJ armazenados
        // recupera a string armazenada e transforma em JSON usando parse()
        return JSON.parse(localStorage.getItem('pf')); // 36
      }

}// fim class PFDAO