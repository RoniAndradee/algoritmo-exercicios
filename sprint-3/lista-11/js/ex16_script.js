
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
        var maiorPreco = listaPrecos[0];
        var menorPreco = listaPrecos[0];
        var maisBarato = '';
        var maisCaro = '';
        var precoVenda = 0;
        var somaPrecos = 0;
        var somaPrecosVenda = 0;
        var mediaVenda = 0;

        for (var i = 0; i < listaNomes.length; i++) {
            precoVenda = listaPrecos[i] * 1.25;
            somaPrecosVenda += listaPrecos[i];
            somaPrecos += listaPrecos[i];
            
            if (listaPrecos[i] < menorPreco) {
                maisBarato = listaNomes[i];
            }
            
            if (listaPrecos[i] > maiorPreco) {
                maisCaro = listaNomes[i];
            }   
            
            
            resultado += `<br>Produto ${i + 1}: ${listaNomes[i]} <br>
            Preço da compra: R$${listaPrecos[i]}. Vender por ${precoVenda} <br>
            `
        }

        mediaVenda = somaPrecosVenda / listaPrecos.length;
        resultado +=  `<br>Produto mais caro: ${maisCaro} <br> Produto mais barato: ${maisBarato} <br> Soma dos preços de compra: ${somaPrecos} <br> Média preços venda: ${mediaVenda}`;

        divMensagem.innerHTML = `<br> Total de produtos: ${listaNomes.length} ${resultado}`;
    }

