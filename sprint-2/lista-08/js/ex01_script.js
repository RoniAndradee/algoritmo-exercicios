
    var nota = 0;

    function avaliar(){
        nota = Number(inputNota.value);

        if (nota < 0 || nota > 10){
            divMensagem.innerHTML = `Nota inválida`;
        } else if (nota >= 0 && nota < 5){
            divMensagem.innerHTML = `Não aprovado`;
        } else if (nota >= 5 && nota <= 6){
            divMensagem.innerHTML = `Neutro`;
        } else {
            divMensagem.innerHTML = `Aprovado`;
        }
    }

