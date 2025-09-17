console.log('Laços Repetição FOR');

for (i = 1; i < 6; i++) {
  console.log('Valor de i:' + i);
}

console.log('\nLaços Repetição WHILE');
let j = 1;
while (j <= 5) {
  console.log('valor de J: ' + j);
  j++;
}

console.log('\nLaços Repetição DO..WHILE');
let k = 5;
do {
  console.log('Valor de K: ' + k);
  k--;
} while (k > 0);

console.log('\n\nTabuada...');
for (n = 1; n < 11; n++) {
  console.log('\nTabuada de: ' + n);
  for (i = 1; i < 11; i++) {
    console.log(`${n} x ${i} = ${n * i} `);
  }
}
