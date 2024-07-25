
    function gerar(){
        var numeros = Number(inputNumeros.value);
        var resultado = '';
        var aleatorio = 0;
        var abaixoMetade = 0;

        for(var contador = 1; contador <= numeros; contador++){
            aleatorio = Math.random();
            
            if(aleatorio >= 0.5){
                resultado += `${aleatorio} - metade SUPERIOR<br>`;
            } else{
                resultado += `${aleatorio} - metade INFERIOR<br>`;
                abaixoMetade++;
            }
        }

        divMensagem.innerHTML = `${resultado}<br>
        Total de números abaixo da metade: ${abaixoMetade}<br>
        `;
    }

