
    hora = 0;

    function ver(){
        hora = Number(inputHora.value);

        if (hora >= 19 && hora <= 21){
            divMensagem.innerHTML = `Não é recomendável que você assista sua série favorita no horário ${hora}`;
        } else{
            divMensagem.innerHTML = `O horário ${hora} é adequado para assistir sua série favorita!`;
        }
    }

