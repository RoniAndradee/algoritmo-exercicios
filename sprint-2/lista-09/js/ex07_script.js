
    function adoro(){
        var numero = Number(inputNum.value);
        var resultado = '';
        if(numero >= 20 && numero <= 100){
            for(var contador = 0; contador <= numero; contador++){
                if(contador % 5 == 0){
                    resultado += `${contador}<br>`
                }
            }
        }
        divMensagem.innerHTML = `${resultado}`;
    }

