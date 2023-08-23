const notas = [7, 7, 8, 9];

const novasNotas = [...notas, 10]; ///adiciona um valor igual push

//nao modifica o array original
//é uma maneira de fazer uma cópida de um array 

novasNotas.push(10)

console.log(`As novas notas são ${novasNotas}`)
console.log(`As notas originais são ${notas}`)