
    function acompanhar(){
        var qtdDepositos = Number(inputDepositos.value);
        var valorDepositos = Number(inputValorDepositos.value);
        var resultado = '';
        var URL_ESTRELA = 'https://cdn-icons-png.flaticon.com/512/148/148841.png';
        var saldo = 0;
        var bonus = 0;

        for(var contador = 1; contador <= qtdDepositos; contador++){
            saldo += valorDepositos;
            bonus = saldo * 0.01;
            if(contador % 3 == 0 ){
                saldo += bonus;
                resultado += `<br>${contador}º Mês: R$ ${saldo} <img src="${URL_ESTRELA}" style="width:15px; heigth:15px">`;
            } else {
                resultado += `<br>${contador}º Mês: R$ ${saldo}`;
            }
            
        }   

        divMensagem.innerHTML = `${resultado}<br> Total guardado: R$ ${saldo}`;
    }

