
    var listaBairros = [];

    function registar() {
        var bairro = inputBairro.value;
        listaBairros.push(bairro);
    }

    function relembrar() {
        var bairroRelembrar = inputBairroRelembrar.value;

        if (bairroRelembrar > listaBairros.length) {
            divMensagem.innerHTML = `Ainda não morou num ${bairroRelembrar}º bairro!`;
        } else {
            divMensagem.innerHTML = `Bairro: ${listaBairros[bairroRelembrar - 1]}`;
        }
    }

