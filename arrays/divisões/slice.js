//fatiar

const alunos = [
    "João",
    "Juliana",
    "Ana",
    "Caio",
    "Lara",
    "Marjorie",
    "Guilherme",
    "Aline",
    "Fabiana",
    "Andre",
    "Carlos",
    "Paulo",
    "Bia",
    "Vivian",
    "Isabela",
    "Vinícius",
    "Renan",
    "Renata",
    "Daisy",
    "Camilo"
]
//nao altera o array original
//deve criar outra const
const sala1 = alunos.slice(0, alunos.length /2); //do primeiro até metade
const sala2 = alunos.slice(alunos.length /2); // sem o segundo elemento vai até o final
                            
console.log(sala1)
console.log(sala2)