
    function papagaio(){
        var resultado = '';
        var numero = Number(inputNum.value);
        var frase = inputFrase.value;
        
        for(var contador = 1; contador <= numero; contador++){
            resultado += `${frase}\n`;            
        }
        
        for(var contador = 1; contador <= numero; contador++){
            alert(`${resultado}`);
        }
    }

