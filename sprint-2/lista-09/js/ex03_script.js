
    function diga(){
        var texto = '';
        
        for(var i=1; i <= 7; i++){
            texto += `${i}. Melhor aula<br>`;
        }

        divMensagem.innerHTML = `${texto}`;
    }

