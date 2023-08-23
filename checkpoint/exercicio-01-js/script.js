///////////////////////////////////////////////////////////////////////////////////////////
function addTarefa() {
    const inputTarefa = document.getElementById('inputTarefa');
    const textoTarefa = inputTarefa.value.trim();
    const listaTarefas = document.getElementById('listaTarefas');

    if (textoTarefa !== '') {
        const novaTarefa = document.createElement('li');
        novaTarefa.textContent = textoTarefa;
        listaTarefas.appendChild(novaTarefa);
        inputTarefa.value = '';
    }
}
const botaoAddTarefa = document.getElementById('botaoAddTarefa');
botaoAddTarefa.addEventListener('click', addTarefa);

///////////////////////////////////////////////////////////////////////////////////////////

function addTabela() {
    const inputDescricao = document.getElementById('inputDescricao');
    const inputAutor = document.getElementById('inputAutor');
    const inputDepartamento = document.getElementById('inputDepartamento');
    const inputImportancia = document.getElementById('inputImportancia');

    const descricao = inputDescricao.value.trim();
    const autor = inputAutor.value.trim();
    const departamento = inputDepartamento.value.trim();
    const importancia = inputImportancia.value.trim();

    if (descricao !== '' && autor !== '' && departamento !== '' && importancia !== '') {
        const listaTabelas = document.getElementById('listaTabelas');
        const novaTabela = document.createElement('li');
        novaTabela.innerHTML = `
            <p><strong>Descrição:</strong> ${descricao}</p>
            <p><strong>Autor:</strong> ${autor}</p>
            <p><strong>Departamento:</strong> ${departamento}</p>
            <p><strong>Importância:</strong> ${importancia}</p>
        `;
        listaTabelas.appendChild(novaTabela);

        inputDescricao.value = '';
        inputAutor.value = '';
        inputDepartamento.value = '';
        inputImportancia.value = '';
    }
}
const botaoAddTabela = document.getElementById('botaoAddTabela');
botaoAddTabela.addEventListener('click', addTabela);





