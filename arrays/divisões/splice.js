//emendar

const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

nomes.splice(1, 2, "Rodrigo");

//1º - indice do elemento a ser removido      "Ana"
//2º - numero de elemntos a ser removidos contando com o primeiro  "Ana", "Caio"
//3º - caso for adicionar algo no lugar dos removidos     "Rodrigo"

console.log(nomes) // ["João", "Lara", "Rodrigo", "Marjorie", "Leo"]