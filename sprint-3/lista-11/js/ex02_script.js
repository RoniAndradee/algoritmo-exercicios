
    var listaDestinos = [];

    function adicionar(){
        var destino = inputDestino.value;
        listaDestinos.push(destino);
    }

    function primeiraViagem(){
        if(listaDestinos.length < 1){
            divMensagem.innerHTML = `Ainda não viajou`;
        } else{
            divMensagem.innerHTML = listaDestinos[0];
        }
    }
    
    function terceiraViagem(){
        if(listaDestinos.length < 3){
            divMensagem.innerHTML = `Ainda não fez a terceira viagem`;
        } else{
            divMensagem.innerHTML = listaDestinos[2];
        }
    }

    function ultimaViagem(){
        if(listaDestinos.length < 1){
            divMensagem.innerHTML = `Ainda não viajou`;
        } else{
            divMensagem.innerHTML = listaDestinos[listaDestinos.length - 1];
        }
    }

