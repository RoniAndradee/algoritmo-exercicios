
    var nome = "";
    var nomeMercado = "";
    var qtdSetores = 0; //o usuario informa a quantidade de setores existentes em seu estabelecimento
    var faturamentoBruto = 0; //o usuario informa a faturamento bruto de seu mercado
    var percentalPerda = 0; //o percentual de perda do mercado
    var perdaMensal = 0; //será calculado quanto o usario perderá por mês com a ruptura
    var perdaSetorial = 0; //mostra a perda por setorial

    //mostrarei quanto o cliente perde de dinheiro em média em cada setor
    //mostrarei quanto ele perde do faturamento mensal total em função da ruptura
    //mostrarei uma mensagem em vermelhor negrito caso a perda seja maior que 5% do faturamento (valor esse que segundo pesquisas é o mais comum de se ter em mercados)
    //mostrarei uma mensagem em verde simulando quanto ele ganharia se tivesse a nossa solução

    function calcular(){
        nome = inputNome.value;
        nomeMercado = inputMercado.value;
        qtdSetores = Number(inputSetores.value);
        faturamentoBruto = Number(inputFaturamento.value);
        percentalPerda = Number(inputPerda.value);
        
        perdaMensal = (faturamentoBruto * percentalPerda) / 100;
        perdaSetorial = perdaMensal / qtdSetores;

        divMensagem.innerHTML += `Olá senhor ${nome}, ao analisar os dados de seu mercado chegamos as seguintes conclusões:
        <h1>Mercado: ${nomeMercado}</h1> <br>
        Seu mercado tem uma perda mensal de R$${perdaMensal} em função da ruptura.<br>
        E tem em média uma perda de R$${perdaSetorial} em cada setor devido o mesmo problema.`;

        if (perdaMensal >= faturamentoBruto * 0.05){
            divMensagem.innerHTML += `<br><b style="color:#ff0000">A sua taxa de perda mensal está em estado crítico! Você precisa urgentemente da nossa solução!</b>`;
        }
    }

    function simularGanhos(){
        var ganhos = faturamentoBruto + perdaMensal;
        divSimulacao.innerHTML += `<p style="color:#00ff00">Ao contratar a nossa solução você teria um faturamento mensal de R$${ganhos}</p>`; 
    }




