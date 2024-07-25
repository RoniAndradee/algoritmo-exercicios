
    function divisores(){
        var numero = Number(inputNum.value);
        var resultado = '';

        for(var contador = 1; contador <= numero; contador++){
            if(numero % contador ==  0){    
                resultado += `<br>${contador}<br>`
            }
        }
        divMensagem.innerHTML = `<br>Divisores do número ${numero}: <br> ${resultado}`;
    }

