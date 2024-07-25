
    var saldo = 0;
    var msgReceber = "";
    var msgPagar = "";

    function receber() {
        saldo += 100;
        msgReceber = "Transferência de R$100 recebida! Saldo atual: R$ " + saldo;

        alert(msgReceber);
    }

    function pagar() {
        saldo -= 50;
        msgPagar = "Pagamento de R$50 efetuado! Saldo atual: R$ " + saldo;

        alert(msgPagar);
    }

