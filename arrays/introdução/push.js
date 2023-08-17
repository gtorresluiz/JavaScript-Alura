const notas = [10, 6, 8];

notas.push(7); //[10, 6, 8, 7]
//adiciona um elemento no final do array

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas/length;
console.log(`A média é ${media}.`);