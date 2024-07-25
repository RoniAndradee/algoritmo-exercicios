
    var simulacao = 0;
    divSimulacao.style.display = "none";
    botaoVoltar.style.display = "none";

    function simular() {
        conta = Number(inputConta.value);
        digito = Number(inputDigito.value);
        senha = inputSenha.value;

        if (conta != 0 && digito == conta % 10) {
            if (senha == 'manaus' & digito >= 0 && digito <= 3) {
                divSimulacao.style.display = 'block';
                divLogin.style.display = 'none';
            } else if (senha == 'recife' && digito >= 4 && digito <= 7) {
                divSimulacao.style.display = 'block';
                divLogin.style.display = 'none';
            } else if (senha == 'fortaleza' && digito >= 8) {
                divSimulacao.style.display = 'block';
                divLogin.style.display = 'none';
            } else {
                alert('Senha Incorreta');
            }
        } else {
            alert('Conta tem que ser diferente de zero e digito tem que ser igual ao resto da divisão do número da conta por 10');
        }
    }

    function resultado() {
        var valorOperacao = Number(inputValor.value);
        var operacao = selectOperacao.value;
        var prazo = selectPrazo.value;
        var juros = 0;
        simulacao++;

        if (prazo == 'curto' || prazo == 'medio') {
            alert('Esta operação está condicionada ao seu perfil');
        }

        if (operacao == 'emprestimo') {
            if (prazo == 'curto') {
                juros = valorOperacao * 0.24;
            } else if (prazo == 'medio') {
                juros = valorOperacao * 0.16;
            } else if (prazo == 'longo') {
                juros = valorOperacao * 0.10;
            }

            divMensagem.innerHTML += `<br>Simulação ${simulacao} - Para o empréstimo R$${valorOperacao} no ${prazo} prazo será cobrado os juros de R$ ${juros} ao ano`
        } else if (operacao == 'investimento') {
            if (prazo == 'curto') {
                juros = valorOperacao * 0.05;
            } else if (prazo == 'medio') {
                juros = valorOperacao * 0.08;
            } else if (prazo == 'longo') {
                juros = valorOperacao * 0.12;
            }

            divMensagem.innerHTML += `<br>Simulação ${simulacao} - Investindo R$${valorOperacao} no ${prazo} prazo o seu rendimento será de R$ ${juros} ao ano`
        }
    botaoVoltar.style.display = "block";

    }

    function voltar() {
        divMensagem.innerHTML = '';
        simulacao = 0;
    }


