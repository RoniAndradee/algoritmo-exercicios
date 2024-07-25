
    var rendaIndividual = 0;
    var rendaFamiliar = 0;

    function analisar(){
        rendaIndividual = Number(inputIndividual.value);
        rendaFamiliar = Number(inputFamilia.value);

        if (rendaIndividual <= 2000 || rendaFamiliar <= 3000){
            divMensagem.innerHTML = 'Você terá direito ao auxílio';
        } else {
            divMensagem.innerHTML = 'Sem direito ao auxílio';
        }
    }

