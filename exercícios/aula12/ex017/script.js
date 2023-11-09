function tabuada() {
    const txtnum = document.getElementById('txtnum').value;
    const res = document.getElementById('seltab');

    if (txtnum.length == 0) {
        alert('[ERRO] Nenhum número digitado.');
    } else {
        res.innerHTML = '';
        let numero = Number(txtnum);
        for (let i = 1; i <= 10; i++) {
            let item = document.createElement('option');
            item.text = `${numero} x ${i} = ${numero * i}`;
            res.appendChild(item);
        }
    }
}