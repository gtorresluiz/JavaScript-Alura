//expressao de funcao

const soma = function (num1, num2) {return num1 + num2}
console.log(soma(1, 1))

//diferença entre uma declaraçao normal e expressao

console.log(apresentar()) // "olá!" funciona corretamente
function apresentar(){
    return "olá!"
}

//error = nao pode acessar antes de inicializar = HOISTING
console.log(soma1(1, 1)) 
// funciona como const
const soma1 = function (num1, num2) {return num1 + num2}

//funcoes e var sao listadas no topo