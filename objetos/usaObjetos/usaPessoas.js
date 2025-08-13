function chamarPessoa() {
  console.log('==== Objeto Pessoa =====');

  const Pessoa = require('../pessoas/Pessoa.js');

  const x = new Pessoa();

  x.setNome('');
  resposta = x.getNome();
  console.log(resposta);

  if (resposta) {
    console.log(x.getNome());
  } else {
    console.log('Nome vazio');
  }

  resposta = x.setEmail('emersontlsd@gmail.com');
  console.log(resposta);

  if (resposta) {
    console.log(x.getEmail());
  } else {
    console.log('E-mail vazio');
  }
} // fim chamarPessoa

function chamarPF() {
  console.log('\n===== Objeto PF =====');

  const PF = require('../pessoas/PF');
  const y = new PF();

  resposta = y.setNome('');
  console.log(resposta);
  if (resposta) {
    console.log(y.getNome());
  } else {
    console.log('Nome vazio');
  }

  resposta = y.setNome('Souza');
  console.log(resposta);
  if (resposta) {
    console.log(y.getNome());
  } else {
    console.log('Nome vazio');
  }

  resposta = y.setEmail('');
  console.log(resposta);
  if (resposta) {
    console.log(y.getEmail);
  } else {
    console.log('E-mail vazio');
  }

  resposta = y.setEmail('emersontlsd@gmail.com');
  console.log(resposta);
  if (resposta) {
    console.log(y.getEmail());
  } else {
    console.log('E-mail vazio');
  }

  resposta = y.setCPF('');
  console.log(resposta);
  if (resposta) {
    console.log(y.getCPF());
  } else {
    console.log('CPF Inválido!');
  }

  resposta = y.setCPF('123456789110');
  console.log(resposta);
  if (resposta) {
    console.log(y.getCPF());
  } else {
    console.log('CPF Inválido!');
  }

  resposta = y.setEndereco('');
  console.log(resposta);
  if (resposta) {
    console.log(y.getEndereco());
  } else {
    console.log('Endereço vazio');
  }

  resposta = y.setEndereco('Qnm 40 Campus IFB');
  console.log(resposta);
  if (resposta) {
    console.log(y.getEndereco());
  } else {
    console.log('Endereço vazio');
  }

  resposta = y.setTelefone('');
  console.log(resposta);
  if (resposta) {
    console.log(y.getTelefone());
  } else {
    console.log('Telefone vazio');
  }

  resposta = y.setTelefone('61982858372');
  console.log(resposta);
  if (resposta) {
    console.log(y.getTelefone());
  } else {
    console.log('Telefone vazio');
  }

  resposta = y.setNacionalidade('');
  console.log(resposta);
  if (resposta) {
    console.log(y.getNacionalidade());
  } else {
    console.log('Nacionalidade vazio');
  }

  resposta = y.setNacionalidade('Brasileira');
  console.log(resposta);
  if (resposta) {
    console.log(y.getNacionalidade());
  } else {
    console.log('Nacionalidade vazio');
  }
} // fim chamarPF

function chamarCNPJ() {
  console.log('\n===== Pessoa PJ =====');
  const PJ = require('../pessoas/PJ');
  const z = new PJ();

  resposta = z.setNome('');
  console.log(resposta);
  if (resposta) {
    console.log(z.getNome());
  } else {
    console.log('Nome vazio');
  }

  resposta = z.setNome('Souza');
  console.log(resposta);
  if (resposta) {
    console.log(z.getNome());
  } else {
    console.log('Nome vazio');
  }

  resposta = z.setEmail('');
  console.log(resposta);
  if (resposta) {
    console.log(z.getEmail);
  } else {
    console.log('E-mail vazio');
  }

  resposta = z.setEmail('emersontlsd@gmail.com');
  console.log(resposta);
  if (resposta) {
    console.log(z.getEmail());
  } else {
    console.log('E-mail vazio');
  }

  resposta = z.setCNPJ('');
  console.log(resposta);
  if (resposta) {
    console.log(z.getCNPJ());
  } else {
    console.log('CNPJ vazio');
  }

  resposta = z.setCNPJ('123456789-10');
  console.log(resposta);
  if (resposta) {
    console.log(z.getCNPJ());
  } else {
    console.log('CNPJ vazio');
  }

  resposta = z.setEndereco('');
  console.log(resposta);
  if (resposta) {
    console.log(z.getEndereco());
  } else {
    console.log('Endereço vazio');
  }

  resposta = z.setEndereco('Qnm 40 Campus IFB');
  console.log(resposta);
  if (resposta) {
    console.log(z.getEndereco());
  } else {
    console.log('Endereço vazio');
  }

  resposta = z.setTelefone('');
  console.log(resposta);
  if (resposta) {
    console.log(z.getTelefone());
  } else {
    console.log('Telefone vazio');
  }

  resposta = z.setTelefone('61982858372');
  console.log(resposta);
  if (resposta) {
    console.log(z.getTelefone());
  } else {
    console.log('Telefone vazio');
  }

  resposta = z.setNacionalidade('');
  console.log(resposta);
  if (resposta) {
    console.log(z.getNacionalidade());
  } else {
    console.log('Nacionalidade vazio');
  }

  resposta = z.setNacionalidade('Brasileira');
  console.log(resposta);
  if (resposta) {
    console.log(z.getNacionalidade());
  } else {
    console.log('Nacionalidade vazio');
  }

  console.log('=================================');
  console.log('=================================');
  console.log('=================================');

  resposta = z.setEmail('');
  console.log(resposta);
  if (resposta) {
    console.log(z.getEmail);
  } else {
    console.log('E-mail vazio');
  }

  resposta = z.setEmail('emersontlsd@gmail.com');
  console.log(resposta);
  if (resposta) {
    console.log(z.getEmail());
  } else {
    console.log('E-mail vazio');
  }

  resposta = z.setCNPJ('12345678912345678');
  console.log(resposta);
  if (resposta) {
    console.log(z.getCNPJ());
  } else {
    console.log('CNPJ Inválido!');
  }

  resposta = z.setCNPJ('1234567891234567890');
  console.log(resposta);
  if (resposta) {
    console.log(z.getCNPJ());
  } else {
    console.log('CNPJ Inválido!');
  }
} // fim chamarCNPJ

function chamarAluno() {
  console.log('===== Objeto Aluno =====');
  const Aluno = require('../pessoas/Aluno');

  const w = new Aluno();

  resposta = w.setNome('Pedro');
  console.log(resposta);
  if (resposta) {
    console.log(w.getNome());
  } else {
    console.log('Nome vazio!');
  }

  resposta = w.setNome('');
  console.log(resposta);
  if (resposta) {
    console.log(w.getNome());
  } else {
    console.log('Nome vazio!');
  }

  resposta = w.setMatricula('20123456');
  console.log(resposta);
  if (resposta) {
    console.log(w.getMatricula());
  } else {
    console.log('Matrícula Inválida!');
  }

  resposta = w.setMatricula('12102564');
  console.log(resposta);
  if (resposta) {
    console.log(w.getMatricula());
  } else {
    console.log('Matrícula Inválida!');
  }

  resposta = w.setCurso('SI');
  console.log(resposta);
  if (resposta) {
    console.log(w.getCurso());
  } else {
    console.log('Curso Inválido!');
  }

  resposta = w.setCurso('SIS');
  console.log(resposta);
  if (resposta) {
    console.log(w.getCurso());
  } else {
    console.log('Curso Inválido!');
  }

  resposta = w.setCPF('');
  console.log(resposta);
  if (resposta) {
    console.log(w.getCPF());
  } else {
    console.log('CPF Inválido!');
  }
} // fim chamarAluno

chamarPessoa();
chamarPF();
chamarCNPJ();
chamarAluno();
