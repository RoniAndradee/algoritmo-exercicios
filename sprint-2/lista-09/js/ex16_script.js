
    function partiu(){
        var qtdPassageiros = Number(inputPassageiros.value);
        var maxPassageiros = Number(inputMaxPassageiros.value);
        var resultado = '';

        for(var contador = 1; contador <= qtdPassageiros; contador++){
            if(contador == 1){
                resultado += `<br>Entrou o ${contador}° passageiro (que é o(a) motorista)`;
            } else if(contador <= maxPassageiros){
                resultado += `<br>Entrou o ${contador}° passageiro`;
            } else{
                resultado += `<br>O ${contador}° passageiro terá que esperar!`;
            }
        }
        divMensagem.innerHTML = `${resultado}`
    }

