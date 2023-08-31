///////////////////////////////////////////////////////////////////////////////////
const tabelas = [];

function addTabela() {
    
    const inputDescricao = document.getElementById('inputDescricao');
    const inputAutor = document.getElementById('inputAutor');
    const inputDepartamento = document.getElementById('inputDepartamento');
    const inputImportancia = document.getElementById('inputImportancia');
    const inputDuracao = document.getElementById("inputDuracao");
    const inputValorTabela = document.getElementById('inputValorTabela');

    const descricao = inputDescricao.value.trim();
    const autor = inputAutor.value.trim();
    const departamento = inputDepartamento.value.trim();
    const importancia = inputImportancia.value.trim();
    const duracao = inputDuracao.value.trim();
    const valorTabela = inputValorTabela.value.trim();


    if (descricao !== '' && autor !== '' && departamento !== '' && importancia !== '' && duracao !== '' && valorTabela !== '' && valorTabela >= 0) {
       
        const listaTabelas = document.getElementById('listaTabelas');
        const novaTabela = document.createElement('li');

        novaTabela.innerHTML = `
            <p><strong>Descrição:</strong> ${descricao}</p>
            <p><strong>Autor:</strong> ${autor}</p>
            <p><strong>Departamento:</strong> ${departamento}</p>
            <p><strong>Importância:</strong> ${importancia}</p>
            <p><strong>Duração:</strong> ${duracao} dia(s)</p>
            <p><strong>Valor:</strong> R$${valorTabela},00</p>`
            ;

        const botaoExcluir = document.createElement('button');
        botaoExcluir.textContent = '🗑️';
        botaoExcluir.classList.add('botaoExcluir');
        botaoExcluir.addEventListener('click', () => {
            listaTabelas.removeChild(novaTabela);
        });

        novaTabela.appendChild(botaoExcluir);
        listaTabelas.appendChild(novaTabela);

        inputDescricao.value = '';
        inputAutor.value = '';
        inputDepartamento.value = '';
        inputImportancia.value = '';
        inputDuracao.value = '';
        inputValorTabela.value = '';

    }
}
const botaoAddTabela = document.getElementById('botaoAddTabela');
botaoAddTabela.addEventListener('click', addTabela);

///////////////////////////////////////////////////////////////////////////////////////////


