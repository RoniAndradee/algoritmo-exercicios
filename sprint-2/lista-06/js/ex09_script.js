
    alturaInicial = 0;
    alturaFinal = 0;
    nome = '';
    altura = 0;

    function verificar(){
        alturaInicial = Number(inputAlturaInicial.value);
        alturaFinal = Number(inputAlturaFinal.value);
        nome = inputNome.value;
        altura = Number(inputAltura.value);

        if (alturaInicial > 1 && alturaFinal > alturaInicial){
            if (altura >= alturaInicial && altura <= alturaFinal){
                divMensagem.innerHTML += `O candidato ${nome}, com altura de ${altura} metros, participará do processo de seleção de piloto <br>`;
            } else {
                divMensagem.innerHTML += `Infelizmente, o candidato ${nome}, com altura de ${altura} metros, não atende os requisitos da seleção <br>`;
            }
        } else {
            alert('Intervalo da altura de seleção é inválida! A altura inicial deve ser maior que 1 e a altura final deve ser maior que a altura inicial');
        }

    }

