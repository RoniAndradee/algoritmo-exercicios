
    var qtdPassagens = 0;
    var valorPassagem = 4.40;
    var valorTotal = 0;

    function comprar(){
        qtdPassagens = Number(inputQtdPassagens.value);

        if (qtdPassagens >= 8 && qtdPassagens <= 50){
            if(qtdPassagens >= 8 && qtdPassagens <= 19){
                valorPassagem -= valorPassagem * 0.03;
            } else if (qtdPassagens >= 20 && qtdPassagens <= 49){
                valorPassagem -= valorPassagem * 0.05;
            } else if (qtdPassagens == 50){
                valorPassagem -= valorPassagem * 0.07;
            }
            valorTotal = qtdPassagens * valorPassagem;
            divMensagem.innerHTML = `Valor total das passagens: ${valorTotal}`;
        }
    }

