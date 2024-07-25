
    function correr(){
        var voltas = Number(inputVoltas.value);
        var resultado = '';

        for(var contador = 1; contador <= voltas; contador++){
            resultado += `<br> Carro dando a ${contador}ª volta`
        }

        divMensagem.innerHTML = `${resultado} <br> Corrida Finalizada!`;
    }

