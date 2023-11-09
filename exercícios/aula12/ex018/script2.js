let num = document.getElementById('txtnum');
let lista = document.getElementById('listadc');
let res = document.getElementById('res');
let arrayNum = new Array();

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, arrayNum)) {
        arrayNum.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado.`;
        lista.appendChild(item);
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}