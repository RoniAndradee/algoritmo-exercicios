
    function simular(){
        var valorPsgUnica = 4.40;
        var valorPsgIntegracao = 5.90;
        var tipoPassageiro = selectTipoPassageiro.value;
        var tipoPassagem = selectTipoPassagem.value;
        var total = 0;

        if (tipoPassageiro == '1' && tipoPassagem == '1'){
            total = valorPsgUnica;
            divMensagem.innerHTML = `Valor da passagem escolhida: R$${total}`;
        } else if (tipoPassageiro == '1' && tipoPassagem == '2'){
            total = valorPsgIntegracao;
            divMensagem.innerHTML = `Valor da passagem escolhida: R$${total}`;
        } else if (tipoPassageiro == '2' && tipoPassagem == '1'){
            total = valorPsgUnica * 0.5; 
            divMensagem.innerHTML = `Valor da passagem escolhida: R$${total}`;
        } else if (tipoPassageiro == '2' && tipoPassagem == '2'){
            total = valorPsgIntegracao * 0.5;
            divMensagem.innerHTML = `Valor da passagem escolhida: R$${total}`;
        } else {
            total = 0;
            divMensagem.innerHTML = `Valor da passagem escolhida: R$${total}`;
        }
    } 


