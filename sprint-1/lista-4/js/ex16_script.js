
    var saldo = 0;
    var debito = 0;
    var novoSaldo = 0;

    function analisar(){
        saldo = Number(inputSaldo.value);
        debito = Number(inputDebito.value);
        novoSaldo = saldo - debito;

        if (novoSaldo < 0){
            divMensagem.innerHTML += `<br><b style="color:#ff0000">O saldo atual da conta corrente é ${novoSaldo}</b>`; 
        }
        
        if (novoSaldo >= 0){
            divMensagem.innerHTML += `<br><i style="color:#0000ff">O saldo atual da conta corrente é ${novoSaldo}</i>`; 
        }
        
    }

