
    var listaFilmes = [];

    function cadastrar() {
        var filme = inputFilme.value;

        listaFilmes.push(filme);

        divMensagem.innerHTML = `Você já assistiu ${listaFilmes.length} filmes`;
    }

    function listar() {
        var resultado = '';

        for (var i = listaFilmes.length - 1; i >= 0; i--) {
            resultado += `${listaFilmes[i]} <br>`;
        }

        divMensagem.innerHTML = resultado;
    }

    function filtrar() {
        var de = inputDe.value;
        var ate = inputAte.value;
        var resultado = '';

        for(var i = ate - 1; i >= de -1; i--){
            resultado += `${listaFilmes[i]}<br>`;
        }

        divMensagem.innerHTML = resultado;
    }

