
    var nome = "";
    var idade = 0;

    function avaliar(){
        nome = inputNome.value;
        idade = Number(inputIdade.value);

        if (idade >= 18){
            divMensagem.innerHTML = `${nome}, vamos tirar a CNH?`; 
        } else{
            divMensagem.innerHTML += `<br>${nome}, vai jogar PlayStation!`
        }
    }

