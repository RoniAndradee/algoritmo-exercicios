
    function dividir() {
        var valor = Number(input_valor.value);
        var amigos = Number(input_amigos.value);
        var msg = "Cada um dos " + amigos + " amigos vai pagar R$" + (valor / amigos);

        alert(msg);
    }

