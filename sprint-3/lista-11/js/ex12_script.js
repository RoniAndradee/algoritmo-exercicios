
    var listaFilhos = [];

    function cadastrar() {
        var filho = inputFilho.value;

        if (listaFilhos.indexOf(filho) == -1) {
            listaFilhos.push(filho);
        } else {
            alert('Não pode mais de 1 filho com o mesmo nome!')
        }
    }

    function atualizar() {
        var resultado = '';

        resultado += `Você tem ${listaFilhos.length} filhos <br>
        Seu custo mensal será aproximadamente R$${listaFilhos.length * 3000} se colocá-los em escola particular
        ou R$${listaFilhos.length * 1500} se eles estudarem em escola pública`

        divMensagem.innerHTML = resultado;
    }

