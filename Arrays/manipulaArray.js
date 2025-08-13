var frutas = ['maça', 'banana'];
console.log(frutas);

frutas.push('laranja'); // push adiciona ao final
frutas.unshift('uva'); // unshift adiciona ao início
console.log(frutas);
console.log('Tamanho: ', frutas.length); // length mostra o tamanho
console.log('Primeira fruta: ', frutas[0]);
console.log('Última fruta: ', frutas[frutas.length - 1]);

frutas.pop(); // remove laranja ( ultimo item do indice )
frutas.shift(); // remove uva ( primeiro item do indice )

console.log(frutas);
