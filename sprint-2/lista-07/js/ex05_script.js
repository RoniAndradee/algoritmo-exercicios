
    var temperatura = 0;

    function analisar(){
        temperatura = Number(inputTemperatura.value);

        if (temperatura < 21 || temperatura > 24){
            alert('Alerta de desconforto!')
            if (temperatura < 21){
                alert('As pessoas vão ter hipotermia')
            } else{
                alert('As pessoas vão derreter')
            }
        }
    }

