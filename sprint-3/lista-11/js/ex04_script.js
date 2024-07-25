
    var listaFilmes = [];

    function registar(){
        filme = inputFilmes.value;
        listaFilmes.push(filme)
    }

    function favoritos(){
        var resultado = '';

        for(var i = 0; i < listaFilmes.length; i++){
            resultado += `${listaFilmes[i]} <br>`;
        }

        divMensagem.innerHTML = `Lista dos filmes Favoritos: ${resultado} <br> 
        Total de filmes: ${listaFilmes.length} <br>
        O filme que mais gosta é: ${listaFilmes[0]} <br>
        E desses, o que menos gosta é: ${listaFilmes[listaFilmes.length - 1]} 
        `;  
    }

