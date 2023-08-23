const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((_, indice)=>{   // retorna sembre um bool
    return medias[indice] > 7 // = true
})

console.log(reprovados)