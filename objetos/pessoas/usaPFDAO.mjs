import PF from '../pessoas/PF.js'; 
import PFDAO from '../pessoas/DAOs/PFDAO.mjs'; 

import Endereco from '../pessoas/Endereco.js'; 
import Telefone from '../pessoas/Telefone.js'; 
import Titulo from '../pessoas/Titulo.js'; 

const pf = new PF();
pf.setNome('Emerson');
pf.setEmail('emersontlsd@gmail.com');
pf.setCPF('057.737.161-43');

const end = new Endereco();
end.setLogradouro('QNM 21');
end.setCep('72.215-213');
pf.setEndereco(end);

const fone1 = new Telefone();
fone1.setDdd('61');
fone1.setNumero('98285-8372');
pf.addTelefone(fone1);

const fone2 = new Telefone();
fone2.setDdd('61');
fone2.setNumero('98116-0418');
pf.addTelefone(fone2);

const titulo = new Titulo();
titulo.setNumero('1234-5678-9012');
titulo.setZona('Ceilandia ');
titulo.setSecao('CEF 04');
pf.setTitulo(titulo);

const pfdao = new PFDAO(pf);

var x = pfdao.toJSON();
pfdao.saveJSON();

console.log(x); // 39 // Exibe o objeto JSON diretamente
console.log(JSON.stringify(x)); // 40 // Exibe o objeto convertido em string JSON
console.log(pfdao.recoveryJSON()); // 41 // Lê do localStorage e exibe a versão recuperada


