
    var meioTransporte = '';
    var distancia = 0;

    function calcular(){
        meioTransporte = inputTransporte.value;
        distancia = Number(inputDistancia.value);

        if (distancia <= 10){
            if(meioTransporte == 'carro' || meioTransporte == 'metro' || meioTransporte == 'onibus'){
                alert('Tá tranks...')
            } else {
            alert('É... um pouco cansado...');
        }
        } 

        if (distancia > 10){
            if (meioTransporte == 'carro'){
                alert('É... um pouco cansado...');
            } else if (meioTransporte == 'metro' || meioTransporte == 'onibus'){
                alert('Bem cansado...');
            } else {
                alert('Vish... tá só o pó...');
            }
        }
    }

