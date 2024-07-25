
    var renda = 0;
    var prestacao = 0;
    var percentualPrestacao = 0;

    function calcular(){
        renda = Number(inputRenda.value)
        prestacao = Number(inputPrestacao.value)
        percentualPrestacao = (prestacao / renda) * 100

        divMensagem.innerHTML += `A prestação corresponde a ${percentualPrestacao}% da renda familiar <br>`

        if (percentualPrestacao > 30){
            divMensagem.innerHTML += `<b style=color: "#ff0000">Será necessário complementar sua renda familiar<b>`
        }
    }

