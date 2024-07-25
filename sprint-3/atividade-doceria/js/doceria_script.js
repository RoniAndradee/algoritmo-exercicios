
    function verificar() {
        var qtdMacarons = Number(inputQtdMacarons.value);
        var qtdBrigadeiros = Number(inputQtdBrigadeiros.value);
        var qtdCupcakes = Number(inputQtdCupcakes.value);
        var qtdCheesecakes = Number(inputQtdCheesecakes.value);
        var valorMacarons = Number(inputValorMacarons.value);
        var valorBrigadeiros = Number(inputValorBrigadeiros.value);
        var valorCupcakes = Number(inputValorCupcakes.value);
        var valorCheesecakes = Number(inputValorCheesecakes.value);

        var totalDoces = qtdMacarons + qtdBrigadeiros + qtdCupcakes + qtdCheesecakes;
        var valorTotal = (valorMacarons * qtdMacarons) + (valorBrigadeiros * qtdBrigadeiros) + (valorCupcakes * qtdCupcakes) + (valorCheesecakes * qtdCheesecakes);
        var resultado = '';
        var vendaAtual = 0;

        var URL_MACARRON = 'https://admin.amorino.com/wp-content/uploads/2020/11/macaron_cafe-1.png';
        var URL_BRIGADEIRO = 'https://reidobrigadeirogourmet.com.br/wp-content/uploads/2018/09/BrigadeiroTradicional.png';
        var URL_CUPCAKE = 'https://doces.criarmenu.app/_core/_uploads//2023/10/21051310230jd58ghch0.png';
        var URL_CHEESECAKE = 'https://levesabor.com.br/media/205/15894058235ebc687fa7faa-1920x1080.png';


        if (qtdMacarons >= 0 && qtdBrigadeiros >= 0 && qtdCupcakes >= 0 && qtdCheesecakes >= 0 && valorMacarons >= 0 && valorBrigadeiros >= 0 && valorCupcakes >= 0 && valorCheesecakes >= 0) {
            for (var contMacarons = 1; contMacarons <= qtdMacarons; contMacarons++) {
                if (qtdMacarons > 0) {
                    vendaAtual++;
                    resultado += `Venda: ${vendaAtual} - 
                    <img src=${URL_MACARRON} style="heigth: 50px; width: 50px"/> - 
                    R$${valorMacarons}<br>`;
                }
            }

            for (var contBrigadeiros = 1; contBrigadeiros <= qtdBrigadeiros; contBrigadeiros++) {
                if (qtdBrigadeiros > 0) {
                    vendaAtual++;
                    resultado += `Venda: ${vendaAtual} - 
                    <img src=${URL_BRIGADEIRO} style="heigth: 50px; width: 50px"/> - 
                    R$${valorBrigadeiros}<br>`;
                }
            }

            for (var contCupcakes = 1; contCupcakes <= qtdCupcakes; contCupcakes++) {
                if (qtdCupcakes > 0) {
                    vendaAtual++;
                    resultado += `Venda: ${vendaAtual} - 
                    <img src=${URL_CUPCAKE} style="heigth: 50px; width: 50px"/> - 
                    R$${valorCupcakes}<br>`;
                }
            }

            for (var contCheesecakes = 1; contCheesecakes <= qtdCheesecakes; contCheesecakes++) {
                if (qtdCheesecakes > 0) {
                    vendaAtual++;
                    resultado += `Venda: ${vendaAtual} - 
                    <img src=${URL_CHEESECAKE} style="heigth: 50px; width: 50px"/> - 
                    R$${valorCheesecakes}<br>`;
                }
            }

            resultado += `<br> Com a quantidade de ${qtdMacarons} Macarrons,
            ${qtdBrigadeiros} Brigadeiros,
            ${qtdCupcakes} Cupcakes e
            ${qtdCheesecakes} Cheesecakes,
            a venda totalizará R$${valorTotal}`;

            divMensagem.innerHTML = resultado;
        } else {
            alert('Os valores não podem ser negativos!');
        }
    }


