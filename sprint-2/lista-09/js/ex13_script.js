
    function exibir(){
        var dias = Number(inputDias.value);
        var resto = 0;
        var resultado = '';

        for(var contador = 1; contador <= 30; contador++){
            resto = contador % dias;
            if (resto == 1){
                resultado += `<br> Dia ${contador} - Musculação`
            } else{
                resultado += `<br> Dia ${contador} - Descanso`
            }
        }
        divMensagem.innerHTML = `${resultado}`;
    }

