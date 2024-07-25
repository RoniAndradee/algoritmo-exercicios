
    var listaNomes = [];
    var listaPrecos = [];

    function cadastrar() {
        var nome = inputProduto.value;
        var preco = Number(inputPreco.value);

        if (preco >= 0 && nome.length >= 3) {
            listaNomes.push(nome);
            listaPrecos.push(preco);
            divMensagem.innerHTML = `<b style="color: #0F0">Produto Cadastrado!</b>`;
        } else {
            divMensagem.innerHTML = `<b style="color: #F00">Insira valores válidos!</b>`;
        }
    }

    function atualizar() {
        var resultado = '';
        var total = 0;

        for (var i = 0; i < listaNomes.length; i++) {
            resultado += `${i + 1}. ${listaNomes[i]} - R$${listaPrecos[i]} <br>`;
            total += listaPrecos[i];
        }

        divMensagem.innerHTML = `Você tem ${listaPrecos.length} itens cadastrados em estoque: <br>
        ${resultado}
        Seu estoque vale R$${total}`

    }

    function filtrar() {
        var opcao = selectPrecos.value;
        var valor = Number(inputValor.value);
        var resultado = '';

        for (var i = 0; i < listaNomes.length; i++) {
            if (opcao == 'acima' && listaPrecos[i] > valor) {
                resultado += `${i + 1} - ${listaNomes[i]} - ${listaPrecos[i]} <br>`;
            } else if (opcao == 'abaixo' && listaPrecos[i] < valor) {
                resultado += `${listaNomes[i]} <br>`;
            }
        }

        divMensagem.innerHTML = resultado;
    }

