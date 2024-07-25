
    var nome = "";
    var dist = 0;
    var bandeira = 0;
    var horario = 0;
    var percentual = 0;
    var valor = 1.25;
    var valorFinal = 0;

    function calcular(){
        nome = inputNome.value;
        dist = Number(inputDist.value);
        bandeira = Number(inputBandeira.value);
        horario = Number(inputHorario.value);

        if (horario <= 6){
            valor += valor * percentual;
            valor += valor * percentual;
            
        }
        
        if (horario <= 12){
            valor += valor * percentual;

        }

        if (horario <= 23){
            
        }
    }


