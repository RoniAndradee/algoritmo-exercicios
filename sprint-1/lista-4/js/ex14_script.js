
    var nome = "";
    var dist = 0;
    var bandeira = 0;
    var horario = 0;
    var percentual = 0;
    var valor = 1.25;
    var valorFinal = 0;

    function calcular() {
        nome = inputNome.value;
        dist = Number(inputDist.value);
        bandeira = Number(inputBandeira.value);
        horario = Number(inputHorario.value);

        if (bandeira == 1) {
            if (horario >= 0) {
                if (horario <= 6) {
                    percentual = valor * 0.10
                }
            }
            if (horario >= 7) {
                if (horario <= 12) {
                    percentual = valor * 0.10
                }
            }
            if (horario >= 13) {
                if (horario <= 23) {
                    percentual = valor * 0.15
                }
            }
        }

        if (bandeira == 2) {
            if (horario >= 0) {
                if (horario <= 6) {
                    percentual = valor * 0.10
                }
            }
            if (horario >= 7) {
                if (horario <= 12) {
                    percentual = valor * 0.20
                }
            }
            if (horario >= 13) {
                if (horario <= 23) {
                    percentual = valor * 0.30
                }
            }
        }

        if (bandeira == 3) {
            if (horario >= 0) {
                if (horario <= 6) {
                    percentual = valor * 0.15
                }
            }
            if (horario >= 7) {
                if (horario <= 12) {
                    percentual = valor * 0.30
                }
            }
            if (horario >= 13) {
                if (horario <= 23) {
                    percentual = valor * 0.45
                }
            }
        }

        valorFinal = (valor += percentual) * dist;
        divMensagem.innerHTML = `Olá ${nome} Sua corrida, será na bandeira ${bandeira}, percorrerá ${dist} km e o total da corrida será de ${valorFinal}`;  
    }


