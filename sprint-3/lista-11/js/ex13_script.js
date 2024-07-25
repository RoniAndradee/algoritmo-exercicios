
    var listaJogos = [];

    function registrar() {
        var resultado = selectResultado.value;
        var vitorias = 0;
        var empates = 0;
        var derrotas = 0;
        var pontos = 0;
        var aproveitamento = 0;
        var mensagem = '';
        listaJogos.push(resultado);

        for (var i = 0; i < listaJogos.length; i++) {
            if (listaJogos[i] == 'V') {
                vitorias++;
                pontos += 3;
            } else if (listaJogos[i] == 'E') {
                empates++;
                pontos += 1;
            } else {
                derrotas++;
            }
        }

        aproveitamento = (pontos / (listaJogos.length * 3)) * 100;


        mensagem = `O time teve ${vitorias} vitórias, ${empates} empates, ${derrotas} derrotas <br>
        Pontuação Total: ${pontos} pontos <br>
        Aproveitamento: ${aproveitamento}%`

        divMensagem.innerHTML = mensagem;
    }

    function pesquisa() {
        var pesquisa = Number(inputPesquisa.value);
        var mensagem = '';
        var resultadoJogo = '';

        if (listaJogos[pesquisa - 1] != undefined) {
            for (var i = 0; i < listaJogos.length; i++) {
                if (listaJogos[pesquisa - 1] == 'V') {
                    resultadoJogo = 'Ganhou';
                } else if (listaJogos[pesquisa - 1] == 'E'){
                    resultadoJogo = 'Empatou';
                } else {
                    resultadoJogo = 'Perdeu';
                }
            }

            mensagem = `No ${pesquisa}° jogo, o time ${resultadoJogo}`;

        } else {
            mensagem = `Não foi cadastrado um ${pesquisa}° jogo`;
        }

        divMensagem.innerHTML = mensagem;
    }

