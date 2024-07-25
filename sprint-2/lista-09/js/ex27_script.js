
    function atazanar(){
        var qtdElefantes = Number(inputElefantes.value);
        var resultado = ''; 
        var incomodam = 'incomodam, ';
        var guardaIncomodos = '';

        for(var contador = 1; contador <= qtdElefantes; contador++){
            guardaIncomodos += incomodam;
            if (contador > 1){
                resultado += `<br>1 elefante incomoda muita gente!<br> ${contador} elefantes, ${guardaIncomodos} muito mais!<br>`;
            }
        }
        divMensagem.innerHTML = `${resultado}`;
    }

