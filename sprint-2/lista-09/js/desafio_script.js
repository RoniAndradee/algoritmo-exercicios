
    function curto(){
        var num1 = Number(inputNum1.value);
        var num2 = Number(inputNum2.value);
        var multiplo3 = 0;
        var multiplo5 = 0;
        var resultado = '';
        
        for(var contador = num1; contador <= num2; contador++){
            multiplo3 = contador % 3;
            multiplo5 = contador % 5;

            if(multiplo3 == 0 && multiplo5 == 0){
                resultado += `<br>É TRI!É PENTA!`;
            } else if(multiplo5 == 0){
                resultado += `<br>É PENTA!`;
            } else if (multiplo3 == 0){
                resultado += `<br>É TRI!`;
            } else {
                resultado += `<br>${contador}`; 
            }
        }
        divMensagem.innerHTML = `${resultado}`
    }

