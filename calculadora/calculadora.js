let expressao = '';

function concatenar(valor) {
    expressao += valor;
    document.getElementById('display').value = expressao;
}

function limpar() {
    expressao = '';
    document.getElementById('display').value = '';
}

function calcular() {
    try {
        expressao = eval(expressao);
        document.getElementById('display').value = expressao;
    } catch (error) {
        document.getElementById('display').value = 'Erro';
    }
}
