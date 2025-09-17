// 01: Criação de arrays com atribuições diretas de diferentes formas e tipos

// 02: Forma 1: Atribuição direta na declaração (valores mistos)
console.log('Forma 1');
let dadosAluno = ['João', 12345, true];
console.log('dadosAluno:', dadosAluno);
console.log('dadosAluno:', dadosAluno[0]);
console.log('--------------------------');

// 03: Forma 2: Criando array vazio e atribuindo por índice
console.log('\nForma 2');
let curso = [];
curso[0] = 'Análise de Sistemas';
curso[1] = 2025;
curso[2] = false;
console.log('curso: ', curso);
console.log('curso: ', curso[1]);
console.log('-------------------------');

// 04: Forma 3: Usando o construtor Array()
console.log('\nForma 3');
let notas = new Array(7.5, 8.0, 6.9);
console.log('notas: ', notas);
console.log('--------------------------');

// 05: Forma 4: Atribuição de múltiplos tipos diretamente com array literal
console.log('\nForma 4');
let infoSistema = ['Ativo', 3.2, false, 'Finalizado'];
console.log('infoSistema: ', infoSistema);
console.log('--------------------------');

// 06: Forma 5: Atualizando valores em um array existente
console.log('\nForma 5');
infoSistema[0] = 'Inativo';
infoSistema[2] = true;
console.log('infoSistema atualizado: ', infoSistema);
console.log('--------------------------');

// 07: Forma 6: Array com tipos uniformes (booleans)
console.log('\nForma 6');
let status = [true, false, true, true];
console.log('status: ', status);
console.log('status: ', status[3]);
console.log('--------------------------');

// 08: Forma 7: Array com strings (nomes de cursos)
console.log('\nForma 7');
let cursos = ['ADS', 'SI', 'Engenharia', 'Jogos'];
console.log('cursos: ', cursos);
console.log('--------------------------');
