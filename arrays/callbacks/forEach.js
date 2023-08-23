const notas = [10, 6.5, 8, 7.5];

let somaDasNotas

notas.forEach(function (nota) {
    somaDasNotas += nota;
});

const media = somaDasNotas / notas.length

console.log(`A média das notas é ${media}`)
