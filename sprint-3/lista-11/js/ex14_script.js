
    var listaNumeros = []

    function analisar() {
        var numero = Number(inputNum.value);
        var resultado = '';
        var maiorNumero = listaNumeros[0];
        var menorNumero = listaNumeros[0];
        listaNumeros.push(numero);

        for (i = 0; i < listaNumeros.length; i++) {
            resultado += `${i + 1}º Número: ${listaNumeros[i]} <br>`

            if (listaNumeros[i] < menorNumero) {
                menorNumero = listaNumeros[i]
            } 
            if (listaNumeros[i] > maiorNumero){
                maiorNumero = listaNumeros[i]
            }
        }

        resultado += `Maior: ${maiorNumero} <br> Menor: ${menorNumero}`

        divMensagem.innerHTML = resultado;
    }

