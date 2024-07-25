
    function cabalisticos(){
        var resultado = '';
        for(var contador=1; contador<=30; contador++){
            if(contador != 3 && contador != 4 && contador != 7 && contador != 10 && contador != 12){
                resultado += `<br>${contador}`
            }
        } 
        divMensagem.innerHTML = `${resultado}`
    }

