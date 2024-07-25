
    const baralho = [
        { carta: 'Ás', naipe: 'Copas', pontos: 1 },
        { carta: '2', naipe: 'Copas', pontos: 2 },
        { carta: '3', naipe: 'Copas', pontos: 3 },
        { carta: '4', naipe: 'Copas', pontos: 4 },
        { carta: '5', naipe: 'Copas', pontos: 5 },
        { carta: '6', naipe: 'Copas', pontos: 6 },
        { carta: '7', naipe: 'Copas', pontos: 7 },
        { carta: 'Valete', naipe: 'Copas', pontos: 0.5 },
        { carta: 'Rainha', naipe: 'Copas', pontos: 0.5 },
        { carta: 'Rei', naipe: 'Copas', pontos: 0.5 },
        { carta: 'Ás', naipe: 'Espadas', pontos: 1 },
        { carta: '2', naipe: 'Espadas', pontos: 2 },
        { carta: '3', naipe: 'Espadas', pontos: 3 },
        { carta: '4', naipe: 'Espadas', pontos: 4 },
        { carta: '5', naipe: 'Espadas', pontos: 5 },
        { carta: '6', naipe: 'Espadas', pontos: 6 },
        { carta: '7', naipe: 'Espadas', pontos: 7 },
        { carta: 'Valete', naipe: 'Espadas', pontos: 0.5 },
        { carta: 'Rainha', naipe: 'Espadas', pontos: 0.5 },
        { carta: 'Rei', naipe: 'Espadas', pontos: 0.5 },
        { carta: 'Ás', naipe: 'Ouros', pontos: 1 },
        { carta: '2', naipe: 'Ouros', pontos: 2 },
        { carta: '3', naipe: 'Ouros', pontos: 3 },
        { carta: '4', naipe: 'Ouros', pontos: 4 },
        { carta: '5', naipe: 'Ouros', pontos: 5 },
        { carta: '6', naipe: 'Ouros', pontos: 6 },
        { carta: '7', naipe: 'Ouros', pontos: 7 },
        { carta: 'Valete', naipe: 'Ouros', pontos: 0.5 },
        { carta: 'Rainha', naipe: 'Ouros', pontos: 0.5 },
        { carta: 'Rei', naipe: 'Ouros', pontos: 0.5 },
        { carta: 'Ás', naipe: 'Paus', pontos: 1 },
        { carta: '2', naipe: 'Paus', pontos: 2 },
        { carta: '3', naipe: 'Paus', pontos: 3 },
        { carta: '4', naipe: 'Paus', pontos: 4 },
        { carta: '5', naipe: 'Paus', pontos: 5 },
        { carta: '6', naipe: 'Paus', pontos: 6 },
        { carta: '7', naipe: 'Paus', pontos: 7 },
        { carta: 'Valete', naipe: 'Paus', pontos: 0.5 },
        { carta: 'Rainha', naipe: 'Paus', pontos: 0.5 },
        { carta: 'Rei', naipe: 'Paus', pontos: 0.5 },
    ]

    let pontuacaoBanca = 0;
    let pontuacaoJogador = 0;
    let cartasRetiradas = [];
    let indiceAleatorio = 0;
    let cartaSorteada = {};

    function sortearCarta() {
        indiceAleatorio = Math.floor((Math.random() * baralho.length));
        cartaSorteada = baralho[indiceAleatorio];
    }

    function jogar() {
        divInicio.style.display = 'none';
        divJogo.style.display = 'block';
        sortearCarta();
        if (cartasRetiradas.indexOf(cartaSorteada) == -1) {
            pontuacaoJogador += cartaSorteada.pontos;
            cartasRetiradas.push(cartaSorteada);
        } else {
            sortearCarta();
        }

        divMensagem.innerHTML = `Jogador: <br>
        (${pontuacaoJogador} pontos) - ${cartaSorteada.carta} de ${cartaSorteada.naipe}`;
    }

    function pedirOutra() {
        if (pontuacaoJogador < 7.5 && pontuacaoBanca == 0) {
            sortearCarta();
            if (cartasRetiradas.indexOf(cartaSorteada) == -1) {
                pontuacaoJogador += cartaSorteada.pontos;
                cartasRetiradas.push(cartaSorteada);
            } else {
                sortearCarta();
            }
            divMensagem.innerHTML += `<br> Quero mais uma carta! <br>
            (${pontuacaoJogador} pontos) - ${cartaSorteada.carta} de ${cartaSorteada.naipe}`;

            if (pontuacaoJogador == 7.5) {

                divMensagem.innerHTML += `<br> SETE E MEIO! <br><br>
                Banca: <br>
                O jogador venceu com ${pontuacaoJogador} pontos!`;
            } else if (pontuacaoJogador > 7.5) {

                divMensagem.innerHTML += `<br> O JOGADOR ESTOUROU! <br><br>
                Banca: <br>
                a banca venceu com ${pontuacaoBanca} pontos!`;
            }
        }
    }

    function passarVez() {
        if (pontuacaoJogador < 7.5) {
            while (pontuacaoBanca <= pontuacaoJogador) {
                sortearCarta();

                if (cartasRetiradas.indexOf(cartaSorteada) == -1) {
                    cartasRetiradas.push(cartaSorteada);
                } else {
                    sortearCarta();
                }

                if (pontuacaoBanca == 0) {
                    pontuacaoBanca += cartaSorteada.pontos;

                    divMensagem.innerHTML += `<br><br> Banca: <br>
                    (${pontuacaoBanca} pontos) - ${cartaSorteada.carta} de ${cartaSorteada.naipe}`;

                    if (pontuacaoBanca > pontuacaoJogador) {

                        divMensagem.innerHTML += `<br> A banca venceu com ${pontuacaoBanca} pontos!`;
                    }
                } else if (pontuacaoBanca < 7.5 && pontuacaoBanca <= pontuacaoJogador) {
                    pontuacaoBanca += cartaSorteada.pontos;

                    divMensagem.innerHTML += `<br> É necessário virar outra carta para a banca! <br>
                    (${pontuacaoBanca} pontos) - ${cartaSorteada.carta} de ${cartaSorteada.naipe}`;

                    if (pontuacaoBanca == 7.5) {

                        divMensagem.innerHTML += `<br> SETE E MEIO! <br><br>
                        A banca venceu com ${pontuacaoBanca} pontos!`;
                    } else if (pontuacaoBanca > 7.5) {

                        divMensagem.innerHTML += `<br> BANCA ESTOUROU! <br><br>
                        O jogador venceu com ${pontuacaoJogador} pontos!`;
                    } else if (pontuacaoBanca > pontuacaoJogador) {
                        divMensagem.innerHTML += `<br> A banca venceu com ${pontuacaoBanca} pontos!`;
                    }
                }
            }
        }
    }


