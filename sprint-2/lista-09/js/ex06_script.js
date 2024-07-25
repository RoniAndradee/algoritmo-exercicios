
    function expressar(){
        var pessoa = inputPessoa.value;
        var qtdAmor = Number(inputQtd.value);
        var resultado = '';

        for(var contador = 1; contador <= qtdAmor; contador++){
            resultado += `<br>${contador}- ${pessoa}, eu te amo! Sempre lembre disso!`;
        }
        divMensagem.innerHTML = `${resultado}`
    }

