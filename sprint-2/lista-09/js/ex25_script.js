
    function somar(){
        var num = Number(inputNum.value);
        var somaPares = 0;

        if(num >= 10 && num <= 500){
            for(var contador = 0; contador <= num; contador++){
                if(contador % 2 == 0){
                    somaPares += contador;
                }
            }
            divMensagem.innerHTML = `Soma dos pares: ${somaPares}`;
        } else{
            alert('O número deve estar entre 10 e 500!')
        }
    }

