
    var nota = 0;
    
    function avaliar(){
        nota = Number(inputNota.value)
        if (nota >= 0 && nota <= 10){
            alert('Nota Válida!')
        } else{
            alert('Onde já se viu nota menor que 0 e maior que 10?')
        }
    }

