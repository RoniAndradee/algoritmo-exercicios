
    function calcMedia() {
        var nome = input_nome.value;
        var notaContinuada = Number(input_notaContinuada.value);
        var notaSemestral = Number(input_notaSemestral.value);

        var media = (notaContinuada * 40) / 100 + (notaSemestral * 60) / 100;
        var msg = "A média de " + nome + " será de " + media;
    
        alert(msg);
    }


