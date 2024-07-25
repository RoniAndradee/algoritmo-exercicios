
    function tabuada() {
        var numTabuada = Number(selectTabuada.value);
        var maxTabuada = Number(inputMax.value);
        var resto = 0
        var resultado = '';

        for (var contador = 1; contador <= maxTabuada; contador++) {
            resto = contador % 2;
            if (resto == 0) {
                resultado += `<br><span style="color:#0F0">${numTabuada} x ${contador} = ${numTabuada * contador}<span>`
            } else {
                resultado += `<br><span style="color:#F00">${numTabuada} x ${contador} = ${numTabuada * contador}<span>`

            }
        }

        divMensagem.innerHTML = `${resultado}`
    }

