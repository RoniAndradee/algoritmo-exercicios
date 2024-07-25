
    var sabor = "";
    var valor = 0;
    var qtdAmigos = 0;
    var total = 0;
    var caixinha = 0;

    function calcTotal(){
        sabor = inputSabor.value;
        valor = Number(inputValor.value);
        qtdAmigos = Number(inputAmigos.value);
        caixinha = valor * 0.10;
        total = (valor + caixinha) / qtdAmigos;

        divTotal.innerHTML = `Cada amigo vai colaborar com R$${total} para a pizza de ${sabor}`
    }

