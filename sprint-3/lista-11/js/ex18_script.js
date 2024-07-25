
    var listaMusicas = [];

    function cadastrar() {
        var musica = inputMusica.value;

        listaMusicas.push(musica);
    }

    function exibir() {
        var resultado = '';

        for (var i = 0; i < listaMusicas.length; i++) {
            resultado += `${listaMusicas[i]}<br>`;
        }

        divMensagem.innerHTML = resultado;
    }

    function filtrar() {
        var resultado = '';
        var de = Number(inputDe.value);
        var ate = Number(inputAte.value);

        for (var i = de - 1; i < ate; i++) {
            resultado += `${listaMusicas[i]}<br>`;
        }

        divMensagem.innerHTML = resultado;
    }

