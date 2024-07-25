
    var totalVotos = 0;
    var votosCandidatoA = 0;
    var votosCandidatoB = 0;
    var votosBranco = 0;
    var votosNulo = 0;
    var votosInvalidos = 0;

    function atualizaVotos(){
        votosCandidatoA = Number(input_votosA.value);
        votosCandidatoB = Number(input_votosB.value);
        votosBranco = Number(input_votosBranco.value);
        votosNulo = Number(input_votosNulos.value);
    }

    function calcTotal(){
        totalVotos = votosCandidatoA + votosCandidatoB + votosBranco + votosNulo;
        votosInvalidos = votosBranco + votosNulo;
    }

    function resultadoEleicao(){
        atualizaVotos();
        calcTotal();
        resultado.innerHTML = `<br> Total de votos ${totalVotos} <br>
            Candidato A: ${votosCandidatoA * 100 / totalVotos}% (${votosCandidatoA} votos) <br>
            Candidato B: ${votosCandidatoB * 100 / totalVotos}% (${votosCandidatoB} votos) <br>
            Inválidos: ${votosInvalidos * 100 / totalVotos}% (${votosInvalidos} votos)
        `
    }

