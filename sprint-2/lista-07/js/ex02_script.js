
    notaEnem = 0;
    notaVestibular = 0;

    function avaliar(){
        notaEnem = Number(inputNotaEnem.value);
        notaVestibular = Number(inputNotaVestibular.value);

        if (notaEnem >= 800 || notaVestibular >= 700){
            alert('Parabéns! Aprovado');
        } else {
            alert('Tente semestre que vem!');
        }
    }

