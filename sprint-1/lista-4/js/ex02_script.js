
    var qtdLatinhas = 0;

    function calc() {
        qtdLatinhas = Number(inputLatinhas.value);
        var consumo = qtdLatinhas * 365;
        divMensagem.innerHTML += `Por ano você consome ${consumo} latinhas de refri! <br>`
        
        if (consumo >= 500) {
            divMensagem.innerHTML += `Cuidado com a diabetes!`
        }
    }

