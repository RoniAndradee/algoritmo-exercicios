
    function economia() {
        var valor = Number(input_valor.value);
        var qtdViagens = Number(input_viagens.value);
        var msg = "Você economizará R$" + (valor * qtdViagens) / 2 + " por mês";

        alert(msg);
    }

