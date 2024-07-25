
    function divisores(){
        var numero = Number(inputNum.value);
        var resultado = '';
        var primo = 0;

        for(var contador = 1; contador <= numero; contador++){
            if(numero % contador ==  0){    
                resultado += `<br>${contador}<br>`
                if(contador % numero == 2){
                    resultado += `${contador} é um número primo`
                }
            }
        }
        divMensagem.innerHTML = `<br>Divisores do número ${numero}: <br> ${resultado}`;
    }

