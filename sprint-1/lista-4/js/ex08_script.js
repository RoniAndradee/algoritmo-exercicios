
    var qtdHomens = 0;
    var qtdMulheres = 0;
    var peso = 0;

    function calcular(){
        qtdHomens = Number(inputHomens.value);
        qtdMulheres = Number(inputMulheres.value);
        peso = (qtdHomens * 80) + (qtdMulheres * 80);

        divMensagem.innerHTML += `Este elevador suporta 800kg e o peso estimado desta lotação é de ${peso}kg <br>` 
        
        if (peso > 800){
            divMensagem.innerHTML += `<span style="color: #0000ff"> Será necessário que alguém desça para que o elevador se movimente  </span>` 
        }
    }

