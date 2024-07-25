
    var idade = 0;

    function festa(){
        idade = Number(inputIdade.value);

        if (idade < 18) {
            alert("Pedir permissão pro responsável");
            alert("#partiuFesta");
        }
        
        if (idade >= 18) {
            alert("#partiuFesta");
        }
    }

