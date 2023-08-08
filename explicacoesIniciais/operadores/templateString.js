const nome = "ju";
const idade = 2023 - 1981;
const cidade = "São Paulo";

//concatenacao complexa
//const apresentacao = "meu nome é " + nome + ", minha idade é " + idade + " e nasci na cidade de " + cidade

const apresentacao = `meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidade}`
// utilizando a crase ````

console.log(apresentacao)

// praticando

const nome1 = "gabriel";
const idade1 = 18;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco"; 

const pedido = `${nome1} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido)