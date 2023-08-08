//conversao de dados

//implicita
const numero = 456;
const numeroStr = "456";

console.log(numero == numeroStr); //true
//console.log(numero === numeroStr); //false, pois compara o tipo e valor

console.log(numero + numeroStr); //456456

//Number()
console.log(numero + Number(numeroStr)); //912

//String()
 const telefone = 12345678;
 const frase = "O telefone dele é "
 console.log(frase + String(telefone)) //O telefone dele é 12345678