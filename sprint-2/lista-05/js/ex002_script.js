
    var rendaFamiliar = 0;

    function analisar(){
        rendaFamiliar = Number(inputRenda.value);

        if (rendaFamiliar <= 250){
            divMensagem.innerHTML = `Classe E`;
        } else if (rendaFamiliar <= 900){
            divMensagem.innerHTML = `Classe D`;
        } else if (rendaFamiliar <= 2500){
            divMensagem.innerHTML = `Classe C`;
        } else if (rendaFamiliar <= 9500){
            divMensagem.innerHTML = `Classe B`;
        } else {
            divMensagem.innerHTML = `Classe A`;
        }
    }

