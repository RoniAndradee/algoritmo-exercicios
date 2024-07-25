
    var qtdFilhos = 0;

    function analisar(){
        qtdFilhos = Number(inputFilhos.value)
        
        if(qtdFilhos >= 1){
            divMensagem.innerHTML += `Não tem TV<br>`
        }
        
        if(qtdFilhos >= 2){
            divMensagem.innerHTML += `Não tem internet<br>`
        }
        
        if(qtdFilhos >= 3){
            divMensagem.innerHTML += `Não tem video game<br>`
        }
        
        if(qtdFilhos >= 4){
            divMensagem.innerHTML += `Não tem Netflix`
        }
    }

