
    var nota1 = 0;
    var nota2 = 0;
    var nota3 = 0;
    var media = 0;

    function analisar() {
        nota1 = Number(inputNota1.value)
        nota2 = Number(inputNota2.value)
        nota3 = Number(inputNota3.value)
        media = (nota1 + nota2 + nota3) / 3

        divMensagem.innerHTML += `Sua média foi de ${media}<br>`

        if (media > 9.4) {
        divMensagem.innerHTML += `Parabéns, você é fora de série!`
        }
    }


