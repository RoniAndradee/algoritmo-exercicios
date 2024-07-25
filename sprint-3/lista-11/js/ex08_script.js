
    var alunos = [];

    function cadastrar(){
        var resultado = '';
        var nomeAluno = inputAluno.value;
        alunos.push(nomeAluno);

        for(var i = alunos.length - 1; i >= 0; i--){
            resultado += `${alunos[i]} <br>`;
        }

        divMensagem.innerHTML = resultado;
    }

