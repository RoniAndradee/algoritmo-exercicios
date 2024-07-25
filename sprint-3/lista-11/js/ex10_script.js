
    var listaBusao = [];

    function gravar() {
        var linha = inputLinha.value;
        var resultado = '';
        listaBusao.push(linha);

        for (var i = listaBusao.length - 1; i >= 0; i--) {
            resultado += `${listaBusao[i]} <br>`;
        }
        divMensagem.innerHTML = resultado;
    }

    function pesquisar() {
        var pesquisa = inputPesquisa.value;
        var ordem = [];


        for (var i = 0; i < listaBusao.length; i++) {
            if (listaBusao[i] == pesquisa) {
                ordem.push(i + 1);
            }
        }

        if (ordem.length > 0) {
            divMensagem.innerHTML = `Você já pegou essa linha ${ordem.length} vezes, nessa ordem: ${ordem} <br>`;
        } else {
            divMensagem.innerHTML = "Você nunca pegou essa linha"
        }
    }

