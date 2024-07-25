
    var listaFilmes = [];

    function register(){
        filme = inputFilmes.value;
        listaFilmes.push(filme);
        var tamanhoLista = listaFilmes.length;
        var resultado = '';

        for(var i = 0; i < tamanhoLista; i++){
            if(listaFilmes[2] == undefined){
                resultado = `Ainda não existe`
            } else{
                resultado = `${listaFilmes[2]}`; 
            }
        }
    
        divMensagem.innerHTML = `
        Seu filme favorito: ${listaFilmes[0]} <br>
        Seu 3° filme favorito: ${resultado} <br>
        Total de filmes cadastrados: ${tamanhoLista} 
        
        `;  
    }


