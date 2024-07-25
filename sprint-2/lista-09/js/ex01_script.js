
    function contar(){
        var resultado = '';
        for(var contador=1; contador <= 15; contador++){
            resultado += `${contador}<br>`;
        }
        divMensagem.innerHTML = `${resultado}`;
    }

