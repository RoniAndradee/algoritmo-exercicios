

    function verificar(){
        var aluno = inputAluno.value;
        var nota1 = Number(inputNota1.value);        
        var nota2 = Number(inputNota2.value);        
        var nota3 = Number(inputNota3.value);        
        var peso1 = Number(inputPeso1.value);
        var peso2 = Number(inputPeso2.value);
        var peso3 = Number(inputPeso3.value);
        var media = (nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3) / 3;

        if(media >= 10){
            divMostrar.innerHTML=`<span style="color:green; font-weight:bold">Amassou ${aluno}, foi aprovado!</span>`
        } else if (media <10){
            divMostrar.innerHTML=`<span style="color:red; font-style:italic;">Infelizmente não deu, se dedique mais ${aluno}</span>`
        }
    }

