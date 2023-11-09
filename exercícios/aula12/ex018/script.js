const txtnum = document.getElementById('txtnum');
const lista = document.getElementById('listadc');
const res = document.getElementById('res');
var arrayNum = new Array();

let validar = n => {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

let jaExiste = (n, l) => l.includes(Number(n));

function adicionar() {
    if (!validar(txtnum.value) && !jaExiste(txtnum.value, arrayNum)) {
        alert('Número inválido ou já existente.');
    } else {
        arrayNum.push(Number(txtnum.value));
        let novoNum = document.createElement('option');
        novoNum.text = `Valor ${txtnum.value} adicionado.`;
        lista.appendChild(novoNum);
    }

    txtnum.value = '';
    txtnum.focus();
}

function finalizar() {
    if (arrayNum.length == 0) {
        alert('Adicione valores antes de finalizar.');
    } else {
        let soma = 0;
        for (let num of arrayNum) {
            soma += num;
        }

        res.innerHTML += `<p>Ao todo foram adicionados ${arrayNum.length} valores.</p>`;
        res.innerHTML += `<p>A soma de todos os valores é igual a ${soma}.</p>`
        res.innerHTML += `<p>E a média dos valores digitados é ${soma/arrayNum.length}.</p>`
    }
}