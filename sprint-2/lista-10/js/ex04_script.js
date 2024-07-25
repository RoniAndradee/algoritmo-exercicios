
    function gerar() {
        var numeros = Number(inputNumeros.value);
        var resultado = '';
        var aleatorio = 0;
        var totalPrimeiroQuartil = 0;
        var totalSegundoQuartil = 0;
        var totalTerceiroQuartil = 0;
        var totalQuartoQuartil = 0;
        var maiorNumeroPrimeiroQuartil = 0;
        var menorNumeroPrimeiroQuartil = 1;
        var maiorNumeroSegundoQuartil = 0;
        var menorNumeroSegundoQuartil = 1;
        var maiorNumeroTerceiroQuartil = 0;
        var menorNumeroTerceiroQuartil = 1;
        var maiorNumeroQuartoQuartil = 0;
        var menorNumeroQuartoQuartil = 1;

        for (var contador = 1; contador <= numeros; contador++) {
            aleatorio = Math.random();

            if (aleatorio >= 0.75) {
                resultado += `${aleatorio} está no 1° quartil<br>`;
                totalPrimeiroQuartil++;
                if (aleatorio > maiorNumeroPrimeiroQuartil) {
                    maiorNumeroPrimeiroQuartil = aleatorio
                }
                if (aleatorio < menorNumeroPrimeiroQuartil) {
                    menorNumeroPrimeiroQuartil = aleatorio
                }
            } else if (aleatorio >= 5 && aleatorio < 0.75) {
                resultado += `${aleatorio} está no 2° quartil<br>`;
                totalSegundoQuartil++;
                if (aleatorio > maiorNumeroSegundoQuartil) {
                    maiorNumeroSegundoQuartil = aleatorio
                }
                if (aleatorio < menorNumeroSegundoQuartil) {
                    menorNumeroSegundoQuartil = aleatorio
                }
            } else if (aleatorio >= 0.25 && aleatorio < 0.5) {
                resultado += `${aleatorio} está no 3° quartil<br>`;
                totalTerceiroQuartil++;
                if (aleatorio > maiorNumeroTerceiroQuartil) {
                    maiorNumeroTerceiroQuartil = aleatorio
                }
                if (aleatorio < menorNumeroTerceiroQuartil) {
                    menorNumeroTerceiroQuartil = aleatorio
                }
            } else if (aleatorio < 0.25) {
                resultado += `${aleatorio} está no 4° quartil<br>`;
                totalQuartoQuartil++;
                if (aleatorio > maiorNumeroQuartoQuartil) {
                    maiorNumeroQuartoQuartil = aleatorio
                }
                if (aleatorio < menorNumeroQuartoQuartil) {
                    menorNumeroQuartoQuartil = aleatorio
                }
            }
        }

        divMensagem.innerHTML = `${resultado}<br>
        1° Quartil <br> Total de números sorteados = ${totalPrimeiroQuartil} <br>
        Maior número sorteado ${maiorNumeroPrimeiroQuartil} <br>
        Menor número sorteado ${menorNumeroPrimeiroQuartil} <br><br>
        2° Quartil <br> Total de números sorteados = ${totalSegundoQuartil} <br>
        Maior número sorteado ${maiorNumeroSegundoQuartil} <br>
        Menor número sorteado ${menorNumeroSegundoQuartil} <br><br>
        3° Quartil <br> Total de números sorteados = ${totalTerceiroQuartil} <br>
        Maior número sorteado ${maiorNumeroTerceiroQuartil} <br>
        Menor número sorteado ${menorNumeroTerceiroQuartil} <br><br>
        4° Quartil <br> Total de números sorteados = ${totalQuartoQuartil} <br>
        Maior número sorteado ${maiorNumeroQuartoQuartil} <br>
        Menor número sorteado ${menorNumeroQuartoQuartil} <br><br>
        
        `;
    }

