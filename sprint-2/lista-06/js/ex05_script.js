
    nota = 0;
    
    function avaliar(){
        nota = Number(inputNota.value);

        if (nota < 6){
            alert('Aluno não aprovado');
        } else if(nota >= 8.5 && nota <= 10){
            alert('Aluno Exemplar!');
        } else if(nota >= 6 && nota <= 8.5){
            alert('Aluno comum e aprovado')
        }
    }

