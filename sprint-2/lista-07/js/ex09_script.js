
    var marca = '';
    var preco = 0;

    function analisar(){
        marca = inputMarca.value;
        preco = Number(inputPreco.value);

        if (preco < 800 || preco > 2000){
            divMensagem.innerHTML = `TV fora da faixa de preço <br>`
            if (preco < 800){
                divMensagem.innerHTML += `Preço baixo demais!`
            } else{
                divMensagem.innerHTML += `TV cara demais, infelizmente`
            }
        } else if (marca == 'mondial' || marca == 'britania'){
            divMensagem.innerHTML = `TV na faixa de preço, porém marca não confiável`
        } else {
            divMensagem.innerHTML = `Essa TV pode entrar na sua lista!`
        }
    }

