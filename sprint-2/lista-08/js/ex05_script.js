
    function avaliar(){
        var temperatura = Number(inputTemperatura.value);
        var umidade = Number(inputUmidade.value);
        
        if(umidade < 0 || umidade > 100){
            divMensagem.innerHTML = '';
            alert('Valor de umidade inválido');
        } else if(temperatura >= 22 && temperatura <= 23 && umidade < 60){
            divMensagem.innerHTML = `Clima agradável`;
        } else {
            divMensagem.innerHTML = `Clima desconfortável`;
        }
    }

