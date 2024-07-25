
    login = '';
    senha = '';

    function logar(){
        login = inputLogin.value;
        senha = inputSenha.value;

        if(login == 'SPTech' && senha == 'digital'){
            alert('Usuário autenticado com sucesso');
        } else{
            alert('Falha na autenticação');
        }
    }

