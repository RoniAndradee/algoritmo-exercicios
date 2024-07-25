
    var qtdHomens = 0;
    var qtdMulheres = 0;
    var pesoH = 90;
    var pesoM = 70;
    var total = 0;
    var max = 500;
    var pesoPerder = 0;

    function ligar(){
        qtdHomens = Number(inputHomens.value);
        qtdMulheres = Number(inputMulheres.value);
        total = (qtdHomens * pesoH) + (qtdMulheres * pesoM);
        pesoPerder = total - max

        if (total <= 500){
            divMensagem.innerHTML = `<span style="color:#00ff00">Elevador vai se mover, pois está com ${total}kg </span>` 
        } else {
            divMensagem.innerHTML = `<span style="color:#ff0000">Alguém precisa descer. Precisa perder ${pesoPerder}kg para mover o elevador</span>` 
        }

    }

