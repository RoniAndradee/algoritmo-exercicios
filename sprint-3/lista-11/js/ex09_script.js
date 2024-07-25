
    var listaProjetos = [];

    function registrar() {
        var resultado = '';
        var nivelProfissional = '';
        var projeto = inputProjeto.value;
        listaProjetos.push(projeto);

        if (listaProjetos.length <= 4) {
            nivelProfissional = 'Júnior';
        } else if (listaProjetos.length <= 12) {
            nivelProfissional = 'Pleno';
        } else {
            nivelProfissional = 'Sênior';
        }

        resultado = `Você já fez ${listaProjetos.length} projetos. Por isso você é um profissional ${nivelProfissional}`;

        divMensagem.innerHTML = resultado;
    }

    function mostrar() {
        var resultado = '';
        for (var i = listaProjetos.length - 1; i >= 0; i--) {
            resultado += `${listaProjetos[i]} <br>`;
        }

        divMensagem.innerHTML = resultado;
    }

