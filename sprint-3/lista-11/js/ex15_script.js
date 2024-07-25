
    var listaNomes = [];
    var listaPrecos = [];

    function cadastrar() {
        var nome = inputProduto.value;
        var preco = Number(inputPreco.value);

        listaNomes.push(nome);
        listaPrecos.push(preco);
    }

    function relatorio() {
        var resultado = '';
        var precoVenda = 0;
        var produtoAtual = 0;
        var precoCompra = 0;
        var totalProdutos = listaNomes.length;

        for (var i = 0; i < listaNomes.length; i++) {
            precoVenda = listaPrecos[i] * 1.25;
            produtoAtual = listaNomes[i];
            precoCompra = listaPrecos[i];

            resultado += `<br> Produto ${i + 1}: ${produtoAtual} <br>
            Preço da compra: R$${precoCompra}. Vender por ${precoVenda} <br>
            `
        }

        divMensagem.innerHTML = `Total de produtos: ${totalProdutos} <br> ${resultado}`;
    }

