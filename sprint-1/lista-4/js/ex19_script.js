
    var nota1 = 0;
    var nota2 = 0;
    var media = 0;

    function verificar(){
        nota1 = Number(inputNota1.value);
        nota2 = Number(inputNota2.value);
        media = (nota1 + nota2) / 2

        if (media >= 6){
            divMensagem.innerHTML = `Parabéns aprovado!` 
        } 
        
        if (media < 6){
            divMensagem.innerHTML = `Tente outra vez...` 
        }

    }

