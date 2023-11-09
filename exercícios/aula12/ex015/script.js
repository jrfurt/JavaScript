function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var txtano = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    if (txtano.value.length == 0 || Number(txtano.value) > ano) {
        window.alert('[ERRO!] Verifique os dados e tente novamente.');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(txtano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if (fsex[0].checked) {
            genero = 'Homem';

            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'bebe-m.png');
            } else if (idade < 21) {
                // Jovem 
                img.setAttribute('src', 'jovem-m.png');
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adulto-m.png');
            } else {
                // Idoso
                img.setAttribute('src', 'idoso-m.png');
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher';

            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'bebe-f.png');
            } else if (idade < 21) {
                // Jovem 
                img.setAttribute('src', 'jovem-f.png');
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adulto-f.png');
            } else {
                // Idoso
                img.setAttribute('src', 'idoso-f.png');
            }
        }

        res.innerHTML = `Detectamos ${genero} de ${idade} anos.`;
        res.appendChild(img);
    }
}
