
    login = '';
    senha = '';
    codigo = 0;

    function entrar(){
        login = inputLogin.value;
        senha = inputSenha.value;
        codigo = Number(inputCodigo.value);

        if(login == 'SPTech' && senha == 'digital' && codigo == 123){
            alert('Usuário autenticado com sucesso');
        } else{
            alert('Falha na autenticação')
        }
    }

