
     nota = 0;
    freq = 0;
    function avaliar(){
        nota = Number(inputNota.value);
        freq = Number(inputFreq.value);

        if (nota >= 6 && freq >= 75){
            alert('Parabéns! Aprovado!')
        } else{
            alert('Infelizmente, não foi desta vez')
        }

    }

