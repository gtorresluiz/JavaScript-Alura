///////////////////////////////////////////////////////////////////////////////////////////

function addTarefa() {
    const inputTarefa = document.getElementById('inputTarefa');
    const textoTarefa = inputTarefa.value.trim();
    const listaTarefas = document.getElementById('listaTarefas');

    if (textoTarefa !== '') {
        const novaTarefa = document.createElement('li');
        novaTarefa.textContent = textoTarefa;

        const inputValorTarefa = document.getElementById('inputValorTarefa');
        const valorTarefa = inputValorTarefa.value.trim();

        const textoValor = document.createElement('li');
        textoValor.textContent = `Valor: R$${valorTarefa},00`;

        const botaoExcluir = document.createElement('button');
        botaoExcluir.textContent = '🗑️';
        botaoExcluir.classList.add('botao-excluir');
        botaoExcluir.addEventListener('click', () => {
            listaTarefas.removeChild(novaTarefa);
        });

        novaTarefa.appendChild(textoValor);
        novaTarefa.appendChild(botaoExcluir);
       
        listaTarefas.appendChild(novaTarefa);
        inputTarefa.value = '';
        inputValorTarefa.value = '';
    }
}
const botaoAddTarefa = document.getElementById('botaoAddTarefa');
botaoAddTarefa.addEventListener('click', addTarefa);

///////////////////////////////////////////////////////////////////////////////////

function addTabela() {
    const inputDescricao = document.getElementById('inputDescricao');
    const inputAutor = document.getElementById('inputAutor');
    const inputDepartamento = document.getElementById('inputDepartamento');
    const inputImportancia = document.getElementById('inputImportancia');
    const inputDuracao = document.getElementById("inputDuracao");

    const descricao = inputDescricao.value.trim();
    const autor = inputAutor.value.trim();
    const departamento = inputDepartamento.value.trim();
    const importancia = inputImportancia.value.trim();
    const duracao = inputDuracao.value.trim();

    if (descricao !== '' && autor !== '' && departamento !== '' && importancia !== '') {
        const listaTabelas = document.getElementById('listaTabelas');
        const novaTabela = document.createElement('li');

        const inputValorTabela = document.getElementById('inputValorTabela');
        const valorTabela = inputValorTabela.value.trim();

        novaTabela.innerHTML = `
            <p><strong>Descrição:</strong> ${descricao}</p>
            <p><strong>Autor:</strong> ${autor}</p>
            <p><strong>Departamento:</strong> ${departamento}</p>
            <p><strong>Importância:</strong> ${importancia}</p>
            <p><strong>Duração:</strong> ${duracao} dia(s)</p>
            <p><strong>Valor:</strong> R$${valorTabela},00</p>
        `;

        const botaoExcluir = document.createElement('button');
        botaoExcluir.textContent = '🗑️';
        botaoExcluir.classList.add('botao-excluir');
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

function ordenarTabelas() {
    const listaTabelas = document.getElementById('listaTabelas');
    const tabelas = Array.from(listaTabelas.children);

    tabelas.sort((a, b) => {
        const importanciaA = parseInt(a.querySelector('p strong:contains("Importância:")').nextSibling.textContent.trim());
        const importanciaB = parseInt(b.querySelector('p strong:contains("Importância:")').nextSibling.textContent.trim());
        return importanciaB - importanciaA;
    });

    listaTabelas.innerHTML = ''; 

    tabelas.forEach(tabela => {
        listaTabelas.appendChild(tabela);
    });
}
const botaoOrdenaTabelas = document.getElementById('botaoOrdenarTabelas');
botaoOrdenaTabelas.textContent = "⚠️";
botaoOrdenaTabelas.addEventListener('click', ordenarTabelas);



