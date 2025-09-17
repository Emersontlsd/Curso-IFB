const PJ = require('../PJ');

setNumero() {
  if(numero) {
    this.#numero = numero;
    return true
  } else {
    return false;
  }
}
getNumero() {
  return this.#numero;
}

setEstado() {
  if(estado) {
    this.#estado = estado;
    return true
  } else {
    return false;
  }
}
getEstado() {
  return this.#estado;
}

setDataRegistro() {

}
getDataRegistro() {
  
}

setPJ(pj) {
  if(pj) {
    this.#pj = pj;
    return true
  } else {
    return false;
  }
}
getPJ() {
  return this.#PJ;
}

// manipulando o IE(JSON)
IE.setNumero("");
IE.setEstado("");
IE.setDataRegistro(new Date());

console.log("Número IE: ", IE.getNumero());
console.log("Estado: ", IE.getEstado());
console.log("Data Registro: ", IE.getDataRegistro());
console.log("PJ vínculada: ", IE.getPJ());

const iejson = JSON.stringify(IE);
console.log(iejson);