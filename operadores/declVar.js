console.log()

var x = 6;
console.log(x)
{
  var y = 5;
  x = 11;
  let w = 8; // var let é declarada localmente
  console.log(w);
} // fim do bloco

console.log(y);

const z = 10; // ela é imutavel


console.log(x);
console.log(z);
z = 15;
console.log(z);