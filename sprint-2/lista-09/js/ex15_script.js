
    function partiu(){
        var qtdPassageiros = Number(inputPassageiros.value);
        var resultado = '';

        for(var contador = 1; contador <= qtdPassageiros; contador++){
            if(contador == 1){
                resultado += `<br>Entrou o ${contador}° passageiro (que é o(a) motorista)`;
            } else if(contador > 1 && contador <= 5){
                resultado += `<br>Entrou o ${contador}° passageiro`;
            } else{
                resultado += `<br>O ${contador}° passageiro terá que esperar!`;
            }
        }
        divMensagem.innerHTML = `${resultado}`
    }

