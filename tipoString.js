//tipo string

const texto1 = "Olá mundo!";
const texto2 = 'Olá mundo!';

const stringDeNumeros = "34567";

const citacao = 'O Leo disse "oi!"';
console.log(citacao)

//concatenação (+)

const exemplo = "Meu nome é ";
const meuNome = "Leonardo";
console.log(exemplo + meuNome)

//conversão 

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)

//padronização

const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true

//lenght 
const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres