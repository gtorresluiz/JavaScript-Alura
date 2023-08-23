//1 
const salarios = [2275, 2250, 1750, 1900, 2100, 1800, 2500, 2350, 2000, 1800];

const novosSalarios = salarios.map((salario) =>{
    if (salario <= 2000){
        return salario + (salario * 0.15)
    } else {
        return salario + (salario * 0.10)
    }
});
console.log(novosSalarios)

// 2 
const salariosAltos = novosSalarios.filter(item => item >= 2500);
console.log(`Os maiores sálarios após o aumento são: ${salariosAltos}`)

//3 
const somaSalarios = salariosAltos.reduce((acumulado, atual) => acumulado + atual);
console.log(`A soma desses sálarios equivale a ${somaSalarios}`)