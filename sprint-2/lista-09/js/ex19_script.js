
    function acompanhar(){
        var qtdDepositos = Number(inputDepositos.value);
        var valorDepositos = Number(inputValorDepositos.value);
        var resultado = '';
        var saldo = 0;
        
        for(var contador = 1; contador <= qtdDepositos; contador++){
            saldo += valorDepositos
            resultado += `<br>${contador}º Mês: R$ ${saldo}`;    
        }   
        divMensagem.innerHTML = `${resultado}<br> Total guardado: R$ ${saldo}`;
    }

