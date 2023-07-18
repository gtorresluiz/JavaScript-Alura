//conversao de dados

//implicita
const numero = 456;
const numeroStr = "456";

console.log(numero == numeroStr); //true
//console.log(numero === numeroStr); //false, pois compara o tipo e valor

console.log(numero + numeroStr); //456456

console.log(numero + Number(numeroStr)); //912