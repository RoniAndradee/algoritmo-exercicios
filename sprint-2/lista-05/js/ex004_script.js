
    var peso = 0;

    function analisar() {
        peso = Number(inputPeso.value);

        if (peso < 13.5){
            divMensagem.innerHTML = `Abaixo do peso`;
        }else if (peso == 18.3){
            divMensagem.innerHTML = `Peso perfeito`;
        } else if (peso <= 21.2){
            divMensagem.innerHTML = `Peso na média`;
        }  else {
            divMensagem.innerHTML = `Acima do peso`;
        }
    }

