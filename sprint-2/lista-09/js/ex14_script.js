
    function contar(){
        var idade = Number(inputIdade.value);
        var resultado = '';

        for(var contador = 1; contador <= idade; contador++){
            if(contador >= 0 && contador <= 4){
                resultado += `<br>${contador} anos (Primeira infância)`;
            } else if(contador > 4 && contador <= 6){
                resultado += `<br>${contador} anos (Pré-escolar)`;
            } else if(contador > 6 && contador <= 10){
                resultado += `<br>${contador} anos (Segunda Infância)`;
            } else if(contador > 10 && contador <= 18){
                resultado += `<br>${contador} anos (Adolescência)`;
            } else if(contador > 18 && contador <= 50){
                resultado += `<br>${contador} anos (Adulto)`;
            } else if(contador > 50 && contador <= 100){
                resultado += `<br>${contador} anos (Melhor Idade)`;
            } else if(contador > 100){
                resultado += `<br>${contador} anos (Matusalém)`;
            }
        }
        divMensagem.innerHTML = `${resultado}`;
    }

