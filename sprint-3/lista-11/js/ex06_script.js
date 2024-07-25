
    var listaFilmes = [];

    function register(){
        var filme = inputFilmes.value;
        listaFilmes.push(filme);
        var resultado = '';
    
        for(var i = 0; i < listaFilmes.length; i++){
            resultado += `${listaFilmes[i]} <br>`;
        }
    
        divMensagem.innerHTML = resultado;  
    }


