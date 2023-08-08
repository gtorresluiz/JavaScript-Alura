// ordem dos paramêtros

function nomeIdade (nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}`
}
console.log(nomeIdade(18, "Gabriel"))

// paramêtros de funcao

function soma(num1, num2){
    return num1 + num2;
}

console.log(soma(2, 2))
console.log(soma(148, 62))
console.log(soma(-520, 20))

function multiplica(num1, num2){
    return num1 * num2;
}
                             //9    *     //6   = 54
console.log(multiplica(soma(4, 5), soma(3, 3)))

// funcao sem retorno com parametro

function cumprimentaPessoa(pessoa){
    console.log(`oi ${pessoa}!`)
}
cumprimentaPessoa('Stella')

//funcao com retorno sem parametro

function cumprimentar(){
    return 'Oi gente!'
} 

function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
}

cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”


