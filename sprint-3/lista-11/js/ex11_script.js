
    var listaPrecos = [];

    function cadastrar(){
        var preco = Number(inputPreco.value);
        listaPrecos.push(preco);
    }

    function atualizar(){
        var resultado = '';
        var total = 0;

        for(var i = listaPrecos.length - 1; i >= 0; i--){
            resultado += `${listaPrecos[i]} <br>`;
            total += listaPrecos[i]
        }

        resultado += `Você tem ${listaPrecos.length} itens cadastrados em estoque <br>
        Seu estoque vale R$${total}`

        divMensagem.innerHTML = resultado;
    }

