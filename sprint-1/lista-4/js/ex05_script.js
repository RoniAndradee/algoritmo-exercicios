
    var consumo = 0;
    var total = 0;
    var desconto = 0;

    function calcular(){
        consumo = Number(inputConsumo.value);
        total = consumo * 0.85;

        if (consumo < 100){
            desconto = total * 0.10
            total = (consumo * 0.85) - desconto;
        }

        alert("O total a ser pago é de: " + total)
    }


