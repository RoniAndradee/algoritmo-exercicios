
    var temperatura = 0;

    function situacao(){
        temperatura = Number(inputTemp.value);
        if (temperatura >= 21 && temperatura <= 24){
            divMensagem.innerHTML = `Temperatura Confortável :D`;
        } else {
            divMensagem.innerHTML = `Temperatura Desconfortável :C`;
        }
    }


