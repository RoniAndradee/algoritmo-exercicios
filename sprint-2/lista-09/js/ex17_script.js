
    function ver(){
        var qtdCoca = Number(inputCoca.value);
        var resultado = '';

        for(var contador = 1; contador <= qtdCoca; contador++){
            resultado += `<img src="https://www.imagensempng.com.br/wp-content/uploads/2022/01/2442.png" style="width:100px; heigth:100px">`;
        }
        divMensagem.innerHTML = `${resultado}`;
    }

