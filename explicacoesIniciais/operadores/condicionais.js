//estruturas de ifs
// if (condicao) {
//  código a ser executado
// }

const num = 10;

if (num === null) {
    console.log('número não fornecido');
}
if (num !== null){
    console.log(`o número é ${num}`);
}

//and/e/(&&), or/ou/(||)
//&& as duas condicoes tem que ser verdadeiras
//||, pelo m enos uma condicao deve ser vardadeira 

const num1 = 11; 

if (num1 > 10 && num1 < 20) {
    console.log('número válido');
}

//if...else
function verificaNumero(numero) {
    if (numero > 10) {
        return 'número maior que 10';
    } else {
        return 'número não é maior que 10';
    }
}
console.log(verificaNumero(9)) //número não é maior que 10

//else if
const num2 = 15;
//numero entre dez e vinte
if (num2 >= 0 && num2 <= 10) {
    console.log('número entre zero e dez');
} else if (num2 > 10 && num2 <= 20) {
    console.log('número entre dez e vinte');
} else if (num2 > 20 && num2 <= 30) {
    console.log('número entre vinte e trinta');
} else {
    console.log('outro número');
}