
    function intervalo(){
        var num1 = Number(inputNum1.value);
        var num2 = Number(inputNum2.value);
        var resultado = '';

            for(var contador = num1; contador <= num2; contador++){
                var resto = contador % 2
                if (resto == 0){
                    resultado += `<br>${contador}`;
                }
            }
            divMensagem.innerHTML = `${resultado}`;
        }

