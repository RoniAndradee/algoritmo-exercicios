
    function somar(){
        var limite = Number(inputLimite.value);
        var divisibilidade = Number(inputDivisibilidade.value);
        var resultado = '';
        var somaMultiplos = 0;

        if(divisibilidade >= 1 && divisibilidade <= limite){
            for(var contador = 1; contador <= limite; contador++){
                if(contador % divisibilidade == 0){
                    resultado += `<br>${contador}`;
                    somaMultiplos += contador;
                }
            }
            divMensagem.innerHTML = `${resultado} <br>Soma dos Múltiplos: ${somaMultiplos}`;
        } else{
            alert('Valores inválidos')
        }
    }

