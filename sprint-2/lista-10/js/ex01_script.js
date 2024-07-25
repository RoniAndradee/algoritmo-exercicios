
    function gerar(){
        var numeros = Number(inputNumeros.value);
        var resultado = '';
        var aleatorio = 0;

        for(var contador = 1; contador <= numeros; contador++){
            aleatorio = Math.random();
            
            if(aleatorio >= 0.5){
                resultado += `${aleatorio} - metade SUPERIOR<br>`;
                
            } else{
                resultado += `${aleatorio} - metade INFERIOR<br>`;
            }
        }

        divMensagem.innerHTML = `${resultado}`;
    }

