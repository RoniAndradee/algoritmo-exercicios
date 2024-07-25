
    function contar() {
        var limiteInferior = Number(inputNum1.value);
        var limiteSuperior = Number(inputNum2.value);
        var divisibilidade = Number(inputDivisibilidade.value);
        var resultado = '';
        var qtdExibidos = 0;
        var soma = 0;  
        var media = 0;
        var maiorNumero = limiteInferior;
        var menorNumero = limiteSuperior;

        if (limiteInferior > 1 && (limiteSuperior > limiteInferior && limiteSuperior < 100)) {
            if (divisibilidade >= 3 && divisibilidade <= 10) {
                for (var contador = limiteInferior; contador <= limiteSuperior; contador++) {
                    if (contador % divisibilidade == 0) {
                        resultado += `${contador}, `;
                        qtdExibidos++;
                        soma += contador;
                        media = soma / qtdExibidos;

                        if(contador > maiorNumero){
                            maiorNumero = contador;
                        } 
                        if(contador < menorNumero){
                            menorNumero = contador;
                        }
                    }
                }
                divMensagem.innerHTML = `${resultado} <br>
                 Quantidade total de número exibidos: ${qtdExibidos} <br>
                  Somatório dos números exibidos: ${soma} <br>
                  Média dos números exibidos: ${media}<br>
                  Maior número exibido: ${maiorNumero}<br>
                  Menor número exibido: ${menorNumero}`
            } else {
                alert('Divisibilidade tem que estar entre 3 e 10')
            }
        } else {
            alert('Limite inferior tem que ser maior que 0 e limite inferior tem que ser maior que o limite superior e menor que 100')
        }
    }

