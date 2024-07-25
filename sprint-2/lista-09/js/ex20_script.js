
    function acompanhar(){
        var qtdDepositos = Number(inputDepositos.value);
        var valorDepositos = Number(inputValorDepositos.value);
        var resultado = '';
        var saldo = 0;
        var bonus = 0;
        for(var contador = 1; contador <= qtdDepositos; contador++){
            saldo += valorDepositos;
            bonus = saldo * 0.01;
            if(contador % 3 == 0 ){
                saldo += bonus;
                resultado += `<br>${contador}º Mês: R$ ${saldo}`;
            } else {
                resultado += `<br>${contador}º Mês: R$ ${saldo}`;
            }
            
        }   

        divMensagem.innerHTML = `${resultado}<br> Total guardado: R$ ${saldo}`;
    }

