
    var serie = "";
    var qtdEps = 0;
    var duracao = 22;
    var tempo = 0;

    function verificar(){
        serie = inputSerie.value;
        qtdEps = Number(inputEps.value);
        tempo = qtdEps * duracao;

        divMensagem.innerHTML = `Vejo que você gosta da série ${serie}`;
        
        if (tempo > 1800){
            divMensagem.innerHTML += `<br>Uau, você realmente gosta dessa série!`; 
        }
    }

