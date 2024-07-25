
    var login = '';
    var senha = '';
    var info = '';
    var tentativas = 3;
    var usuarioBloqueado = false;

    function autenticar() {
        login = inputLogin.value;
        senha = inputSenha.value;
        info = inputInfo.value;

        if (usuarioBloqueado == false && login == 'ana' && senha == 'braga' && (info == '1949' || info == 'louro josé')) {
            divMensagem.innerHTML = `Usuário autenticado<br>`;
            tentativas = 3;
        } else if (tentativas == 0) {
            divMensagem.innerHTML = `<br>Usuário BLOQUEADO! Procure seu gerente!`;
            usuarioBloqueado = true
        } else {
            tentativas--;
            divMensagem.innerHTML = `Falha na autenticação`;
            divMensagem.innerHTML += `<br>Você ainda tem ${tentativas} tentativa(s)<br>`;

        }
    }

