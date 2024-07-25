
    var meioTransporte = '';

    function calcular(){
        meioTransporte = inputTransporte.value;

        if (meioTransporte == 'carro' || meioTransporte == 'uber'){
            alert('Tá tranquilo');
        } else if (meioTransporte == 'metro' || meioTransporte == 'onibus'){
            alert('Um pouco cansado')
        } else {
            alert('Vish... vive cansado');
        }
    }

