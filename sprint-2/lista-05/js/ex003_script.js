
    var temperatura = 0;

    function analisar(){
        temperatura = Number(inputTemperatura.value);

        if (temperatura < 14){
            divMensagem.innerHTML = `Congelante`;
        } else if (temperatura <= 21){
            divMensagem.innerHTML = `Com frio`;
        } else if (temperatura <= 24){
            divMensagem.innerHTML = `Confortável`;
        } else if (temperatura <= 31){
            divMensagem.innerHTML = `Com calor`;
        } else {
            divMensagem.innerHTML = `Escaldante`;
        }
    }

