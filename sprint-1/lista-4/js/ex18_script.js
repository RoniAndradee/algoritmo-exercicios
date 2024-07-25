
    var freq = 0;

    function analisar(){
        freq = Number(inputFreq.value);

        if (freq < 50){
            divMensagem.innerHTML = `<img src="https://img.freepik.com/vetores-premium/ilustracao-de-desenho-animado-de-turista-de-estilo-bonito_378588-141.jpg?w=740">`
        }
        
        if (freq >= 50){
            divMensagem.innerHTML = `<img src="https://st4.depositphotos.com/9876904/20782/v/450/depositphotos_207823734-stock-illustration-african-boy-studying-white-background.jpg" >`
        }
    }

