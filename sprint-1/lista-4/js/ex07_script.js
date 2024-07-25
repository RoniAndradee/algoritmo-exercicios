
    var saldo = 0;
    var debito = 0;

    function calcular() {
        saldo = Number(inputSaldo.value);
        debito = Number(inputDebito.value);
        saldo -= debito;

        if (saldo < 0) {
            divMensagem.innerHTML += `<b style="color: #ff0000">O saldo atual da conta corrente é ${saldo}</b>`
        } else{
            divMensagem.innerHTML += `O saldo atual da conta corrente é ${saldo}`
        }
    }



