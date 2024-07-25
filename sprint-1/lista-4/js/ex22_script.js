
    var meta = 0;
    var economia = 0;
    var diferenca = 0;

    function analisar(){
        meta = Number(inputMeta.value);
        economia = Number(inputEconomia.value);

        if (economia >= meta){
            divMensagem.innerHTML = `Parabéns, meta alcançada!`;
        } 

        if (economia > meta){
            diferenca = economia - meta;
            divMensagem.innerHTML += `<br>Meta ultrapassada em ${diferenca}`; 
        }

        if (economia < meta){
            diferenca = meta - economia;
            divMensagem.innerHTML = `Força! Ainda em busca da meta! Falta ${diferenca}`; 
        }
    }

