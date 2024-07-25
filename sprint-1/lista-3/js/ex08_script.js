
    var saldo = 0;
    var valor = 0;
    var msg = "";

    function atualizaValor(){
        valor = Number(input_valor.value);
    }

    function depositar(){
        atualizaValor();
        saldo += valor;
        msg = "Depósito de R$" + valor + " efetuado! Saldo atual R$" + saldo;

        alert(msg);
    }

    function retirar(){
        atualizaValor();
        saldo -= valor;
        msg = " Retirada de R$" + valor + " efetuada! Saldo atual R$" + saldo;

        alert(msg)
    }

