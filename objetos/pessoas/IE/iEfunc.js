// Inscrição Estadual - IE

const PJ = require('../PJ');

// Factory para IE usando apenas funções e closure ( sem classe )
function IE() {
  let dados = {
    numero: null,
    estado: null,
    dataRegistro: null,
    pj: null,
  };

  function setNumero(numero) {
    if (numero) {
      dados.numero = numero;
      return true;
    }
  }
  function getNumero() {
    return dados.numero;
  }

  function setEstado(estado) {
    if (estado) {
      dados.estado = estado;
      return true;
    }
  }
  function getEstado() {
    return dados.estado;
  }

  function setDataRegistro(data) {
    if (data instanceof Date) {
      dados.dataRegistro = data;
      return true;
    }
  }
  function getDataRegistro() {
    return dados.dataRegistro;
  }

  return {
    setNumero,
    getNumero,
    setEstado,
    getEstado,
    setDataRegistro,
    getDataRegistro,
    setPJ,
    getPJ,
  };
} // fim function IE()

const pj = new PJ();

pj.setCNPJ('12345678');

const ie = IE();

ie.setNumero();
ie.setEstado();
ie.setDataRegistro(new Date());
ie.setPJ();

console.log(ie.getNumero());
console.log(ie.getEstado());
