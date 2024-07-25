
    function analisar() {
        var nota = Number(inputNota.value);
        var frequencia = Number(inputFrequencia.value);

        if (nota < 0 || nota > 10) {
            divMensagem.innerHTML = '';
            alert('Onde já se viu nota <0 ou >10?!');
        } else if (frequencia < 0 || frequencia > 100) {
            divMensagem.innerHTML = '';
            alert('Onde já se viu frequência <0 ou >100?!');
        } else if (nota >= 0 && nota < 6) {
            divMensagem.innerHTML = 'Aluno ficou abaixo da média';
        } else if (nota >= 6 && nota <= 8) {
            divMensagem.innerHTML = 'Aluno ficou na média';
        } else if (nota > 8 && nota <= 10) {
            divMensagem.innerHTML = 'Aluno acima da média';
        } 
        
        if (frequencia >= 75) {
            divMensagem.innerHTML += '<br>Aluno aprovado por frequência';
        } else if (frequencia < 75) {
            divMensagem.innerHTML += '<br>Aluno reprovado por frequência';
        }  
    }

