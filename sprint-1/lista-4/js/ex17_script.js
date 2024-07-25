
    var qtdChocolates = 0;
    var valorChocolate = 0;
    var total = 0;

    function comprar(){
        qtdChocolates = Number(inputQtd.value)

        if (qtdChocolates <= 12){
            valorChocolate = 3
            total = valorChocolate * qtdChocolates

            divMensagem.innerHTML = `O valor da sua compra foi de R$ ${total}` 
        } else {
            valorChocolate = 2.50
            total = valorChocolate * qtdChocolates
            divMensagem.innerHTML = `O valor da sua compra foi de R$ ${total}` 
        }

    }

