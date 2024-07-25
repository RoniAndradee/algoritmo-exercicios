
    var valor = 0;
    var qtdAmigos = 0;
    var valorAmigo = 0;

    function calcular() {
        valor = Number(inputValor.value);
        qtdAmigos = Number(inputAmigos.value);
        valorAmigo = valor / qtdAmigos;

        divMensagem.innerHTML += `Cada amigo vai pagar R$ ${valorAmigo} pela pizza <br>`

        if (valorAmigo > 20) {
            divMensagem.innerHTML += `Deu ruim! Pizza muito cara!`
        }

    }

