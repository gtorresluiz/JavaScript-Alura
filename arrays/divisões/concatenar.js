//juntar 

const salaJS = ["Evaldo", "Camis", "Mari"];
const salaPython = ["Ju", "Leo", "Raquel"];

const salasUnidas = salaJS.concat(salaPython); //junta duas arrays
console.log(salasUnidas);

// ["Evaldo","Camis","Mari","Ju","Leo","Raquel"]

const salasUnidas2 = salaPython.concat(salaJS); //respeita a ordem que foi concatenada
console.log(salasUnidas2)

// ["Ju","Leo","Raquel","Evaldo","Camis","Mari"]