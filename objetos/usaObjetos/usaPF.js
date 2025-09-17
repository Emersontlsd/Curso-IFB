const Telefone = require('../pessoas/Telefone.js');
const Endereco = require('../pessoas/Endereco.js');
const Titulo = require('../pessoas/Titulo.js');
const PF = require('../pessoas/PF.js');

const end = new Endereco();
const fone1 = new Telefone();
const fone2 = new Telefone();

end.setLogradouro('Qnm 40');
fone1.setNumero('1234-5678');
fone2.setNumero('1255-5578');

const titulo = new Titulo();
titulo.setNumero('1234156');
titulo.setSecao('DF');

const titulo2 = new Titulo();
titulo2.setNumero('11223344');
titulo2.setSecao('GO');

const obj = new PF();
obj.setNome('Jose');
obj.setEndereco(end); // vincula endereço a PF
obj.addTelefone(fone1); // vincula telefone a PF
obj.addTelefone(fone2); // vincula outro telefone a PF
obj.setTitulo(titulo); // vincula titulo a PF

const obj2 = new PF();
obj2.setNome('Maria');
obj2.setEndereco(end); // vincula endereço a PF
obj2.addTelefone(fone1); // vincula telefone a PF
obj2.addTelefone(fone2); // vincula outro telefone a PF
obj2.setTitulo(titulo2); // vincula titulo a PF

console.log(obj.getNome());
console.log(obj.getEndereco().getLogradouro());
console.log(obj.getTelefones());
// ============================================
for (let x of obj.getTelefones()) {
  console.log('Número: ', x.getNumero());
}
// ===========================================
console.log(obj.getTitulo().getNumero());
console.log(obj.getTitulo().getSecao());
// verificando as referencias cruzadas
console.log('verificando as referencias cruzadas');
console.log(end.getPessoas());
for (let x of end.getPessoas()) {
  console.log('Donos do Endereço: ', x.getNome());
}
// ==========TELEFONES+++++++++++++++
console.log(fone1.getPessoas());
for (let x of fone1.getPessoas()) {
  console.log('Donos do telefone: ', x.getNome());
}
// ==========TITULO+++++++++++++++
console.log(titulo.getPF().getNome());
console.log(titulo2.getPF().getNome());
