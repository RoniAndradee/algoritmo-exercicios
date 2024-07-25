
    var distancia = 0;
    var tempoDuracao = 0;
    var qtdPassageiros = 0;
    var horarioInicio = 0;
    var custoBase = 0;
    var estimativaTempo = 0;
    var acrescimoTempo = 0;
    var descontoTempo = 0;
    var passageiroExtra = 0;
    var bonusHorario = 0;
    var adicionalHorario = 0;
    var total = 0;
    var consumoLitros = 0;
    var consumoValor = 0;

    // variavéis do desafio 
    var totalHoras = 0;
    var faturamento = 0;
    var totalConsumo = 0;
    var lucro = 0;
    
    function calcular(){
        distancia = Number(inputDistancia.value);
        tempoDuracao = Number(inputDuracao.value);
        qtdPassageiros = Number(inputPassageiros.value);
        horarioInicio = Number(inputHorario.value);
        custoBase = distancia * 0.77;
        estimativaTempo = distancia * 1.8;

        if (tempoDuracao >= estimativaTempo + estimativaTempo * 0.10){
            acrescimoTempo = custoBase * 0.07;
        }
        
        if (tempoDuracao < estimativaTempo - estimativaTempo * 0.10){
            descontoTempo = custoBase * 0.08;
        }

        if (qtdPassageiros - 1 > 1){
            passageiroExtra = (qtdPassageiros - 1) * 3;
        }

        if (horarioInicio <= 6){
            bonusHorario = custoBase * 0.09;
        }

        if (horarioInicio > 20){
            if (horarioInicio <= 23){
                adicionalHorario = custoBase * 0.11;
            }
        }
        
        total = custoBase + acrescimoTempo - descontoTempo + passageiroExtra - bonusHorario + adicionalHorario;
        consumoLitros = distancia / 12;
        consumoValor = consumoLitros * 4;
        divMensagem.innerHTML += `<br>A viagem foi iniciada às ${horarioInicio} horas e tinha estimativa de ${estimativaTempo} minutos e durou ${tempoDuracao} minutos, percorrendo ${distancia} KM, com ${qtdPassageiros} passageiros, totalizando R$${total} do preço da corrida. Com essa distância, foram consumidos ${consumoLitros} litros de gasolina, totalizando R$${consumoValor} de consumo.<br>`;
        totalHoras += tempoDuracao;
        faturamento += total;
        totalConsumo += consumoValor;
    }
    
    function encerrarDia(){
        totalHoras /= 60;
        lucro = faturamento - totalConsumo
    
        divMensagem.innerHTML = `<h1>Extrato do dia</h1><br>
        Total de Horas Trabalhadas: ${totalHoras}<br>
        Faturamento Total: ${faturamento}<br>
        Total de combustível consumido: R$${totalConsumo}<br>
        Lucro Líquido: R$${lucro}`; 
    
        if (totalHoras > 6){
            divMensagem.innerHTML += `<br>Você já trabalhou bastante hoje! Hora de descansar!`
        } else{
            divMensagem.innerHTML += `<br>Você ainda deve trabalhar mais até cumprir a cota do dia!`
        }

    }

