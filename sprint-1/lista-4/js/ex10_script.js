
    var saldo = 0;

    function verificar(){
        saldo = Number(inputSaldo.value);

        if (saldo == 0){
            divMensagem.innerHTML = `Conta zerada` 
        } 
        
        if(saldo < 0){
            divMensagem.innerHTML = `<span style="color:#ff0000">Está devendo</span>` 
            
        }
        
        if(saldo > 0){
            divMensagem.innerHTML = `<span style="color:#0000ff">Saldo positivo! (:d</span>` 
        }

    }

