
    var qtdClientes = 0;
    var qtdProdutos = 0;
    var media = 0;

    function calcular(){
        qtdClientes = Number(inputClientes.value);
        qtdProdutos = Number(inputProdutos.value);
        media = qtdProdutos / qtdClientes;
        divMensagem.innerHTML = `Sua média de produtos por cliente é ${media}<br>`;

        if (media >= 10){
            divMensagem.innerHTML += `<span style="color:#0f0">Sua média está boa</span>`;
        } else {
            divMensagem.innerHTML += `<span style="color:#f00">Sua média está ruim</span>`;
        }

    }

