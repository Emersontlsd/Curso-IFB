let frutas = ['maça', 'banana', 'laranja', 'uva', 'melancia'];

console.log('Laços Array FOR');
for(i = 0; i < frutas.length; i++) {
  console.log(`Fruta na posição ${i}: ${frutas[i]}`);
}

console.log('\nLaços Array WHILE');
j = 0;
while ( j < frutas.length) {
  console.log(`Fruta na posição ${j}: ${frutas[j]}`);
  j++;
}

console.log('\nLaços Array DO..WHILE');
k = 0;
do {
  console.log(`Fruta na posição ${k}: ${frutas[k]}`);
  k++;
}while (k < frutas.length);

console.log('\nFOR...OF');
for(let fruta of frutas) {
  console.log("Fruta: ", fruta);
}

console.log('\nMaior numero');
let numeros = [1,25,35,14,84,96,58,75,32,16];
let maiorNumero = numeros[0];
for(i = 0; i < numeros.length; i++) {
  console.log(`Numero do Array no indice: ${i}: ${numeros[i]}`);
  if (numeros[i] > maiorNumero) {
    maiorNumero = numeros[i];
  }
}
console.log("\nmaior numero: " + maiorNumero);