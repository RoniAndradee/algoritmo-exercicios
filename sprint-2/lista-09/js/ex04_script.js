
    function pares(){
        var resultado = '';        

        for(var contador = 0; contador <= 100; contador++){
            var resto = contador % 2
            if(resto == 0){
                resultado += `<br>${contador}`
            }
        } 
        divMensagem.innerHTML = `${resultado}`
    }

