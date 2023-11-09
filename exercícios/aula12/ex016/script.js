
function contar() {
    // Pegar os elementos do HTML para variáveis
    var inicio = document.getElementById('inicio');
    var fim = document.getElementById('fim');
    var passo = document.getElementById('passo');
    var res = document.getElementById('res');
    
    // Mensagem de erro caso o usuário não digite nada
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Preencha todos os campos.');
    } else {
        res.innerHTML = 'Contando...';
        let ninicio = Number(inicio.value);
        let nfim = Number(fim.value);
        let npasso = Number(passo.value);
        if (ninicio < nfim) {
            for (let i = ninicio; i <= nfim; i += npasso) {
                res.innerHTML += ` ${i} 👉`;
            }
        } else {
            for (let i = ninicio; i >= nfim; i -= npasso) {
                res.innerHTML += `${i} 👉`;
            }
        }
        res.innerHTML += 'PAROU!';
    }
    
}