
    var listaFilmes = [];

    function registrar() {
        filme = inputFilmes.value;
        listaFilmes.push(filme)
        var tamanhoLista = listaFilmes.length;
        var resultado = '';

        for (var i = 0; i < tamanhoLista; i++) {
            if (i % 2 == 0) {
                resultado += `<span style="color:#0000FF">${listaFilmes[i]}<span> <br>`
            } else {
                resultado += `<span style="color:#FF0000">${listaFilmes[i]}<span> <br>`
            }
        }

        divMensagem.innerHTML = resultado;
    }


