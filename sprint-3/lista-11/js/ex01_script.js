
    var listaFrutas = ['banana', 'maçã', 'pera', 'maracujá'];

    function pesquisar() {
        var pesquisa = inputFruta.value;
        if (listaFrutas.indexOf(pesquisa) >= 0) {
            divMensagem.innerHTML += `A fruta ${pesquisa} existe na lista!<br>`
        } else {
            divMensagem.innerHTML += `A fruta ${pesquisa} não existe na lista! <br>`
        }
    }

