
    function viva(){
        var num = Number(inputNum.value);
        var resultado = '';
        
        if(num >= 0 && num <= 200){
            for(var contador = 1; contador <= num; contador++){
                if(contador % 7 == 0){
                    resultado += `${contador}<br>`
                }
            }
        }
        divMensagem.innerHTML = `${resultado}`;
    }

