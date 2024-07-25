
    function gerar(){
        var numeros = Number(inputNumeros.value);
        var resultado = '';
        var aleatorio = 0;
        var abaixoMetade = 0;
        var acimaMetade = 0;
        var total = 0;
        var media = 0;
        var maiorNumero = 0;
        var menorNumero = 1;

        for(var contador = 1; contador <= numeros; contador++){
            aleatorio = Math.random();
            total += aleatorio
            
            if(aleatorio >= 0.5){
                resultado += `${aleatorio} - metade SUPERIOR<br>`;
                acimaMetade++
                
            } else{
                resultado += `${aleatorio} - metade INFERIOR<br>`;
                abaixoMetade++;
            }

            if(aleatorio > maiorNumero){
                maiorNumero = aleatorio;
            }
            if(aleatorio < menorNumero){
                menorNumero = aleatorio;
            }
        }

        media = total / numeros;

        divMensagem.innerHTML = `${resultado}<br>
        Total de números acima de metade: ${acimaMetade}<br>
        Total de números abaixo da metade: ${abaixoMetade}<br>
        Média dos números: ${media}<br>
        Maior número: ${maiorNumero}<br>
        Menor número: ${menorNumero}<br>
        `;
    }

