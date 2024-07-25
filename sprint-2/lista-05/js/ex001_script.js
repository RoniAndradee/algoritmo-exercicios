
    var altura = 0;

    function analisar(){
        altura = Number(inputAltura.value);
        
        if (altura <= 1.65){
            divMensagem.innerHTML = `Você pode ser pilito de corrida`;
        } else if (altura <= 1.80){
            divMensagem.innerHTML = `Você pode ser jogador de futebol`;
        } else{
            divMensagem.innerHTML = `Você pode ser jogador de vôlei ou basquete`;
        }
    }

