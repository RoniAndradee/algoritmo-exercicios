
    function autenticar(){
        var login = inputLogin.value;
        var senha = inputSenha.value;
        var info = inputInfo.value;

        if (login == 'ana' && senha == 'braga' && (info == '1949' || info == 'louro josé')){
            divMensagem.innerHTML = `Usuário autenticado`;
        } else{
            divMensagem.innerHTML = `Falha na autenticação`;
        }
    }

