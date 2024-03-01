const form = document.getElementById('form-html');

const contatos = [];
const telefone = [];

let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionarLinha();
    atualizaTabela();
})

function adicionarLinha() {
    const inputNome = document.getElementById('nome');
    const inputTelefone = document.getElementById('telefone');

    const telefoneValido = validaTelefone(inputTelefone);

    if (contatos.includes(inputNome.value) || telefone.includes(inputTelefone.value)) {
        alert('Contato já inserido');
    } else if (!telefoneValido) {
        alert('Número de telefone inválido, insira DDD + Número ')
    } else {

        contatos.push(inputNome.value);
        telefone.push(inputTelefone.value);

        let linha = '<tr>';
        linha += `<td> ${inputNome.value} </td>`;
        linha += `<td> ${inputTelefone.value} </td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNome.value = '';
    inputTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function validaTelefone(inputTelefone) {
    tamanhoTelefone = inputTelefone.value.length;
    
    if (tamanhoTelefone >= 10 && tamanhoTelefone <= 11) {
        return true;
    } else {
        return false;
    }
}