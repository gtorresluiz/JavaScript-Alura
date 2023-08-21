const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias= [10, 8, 7.5, 9];
const alunosMedias = [alunos, medias];

function exibeNomeENota(aluno){
    if (alunosMedias[0].includes(aluno)) {     

        // const alunos = alunosMedias[0];
        // const medias = alunosMedias[1];

        const [alunos, medias] = alunosMedias //tem a mesma funcionalidade das duas linhas comentadas anteriores

        const indice = alunos.indexOf(aluno); //uma variavel que guarda o indice de um array 

        const mediaDoALuno = medias[indice];

        console.log(`${aluno} tem a média ${mediaDoALuno}.`)

    } else {
        console.log("Aluno não encontrado")
    }
}

exibeNomeENota("João") 