
    function analisar(){
        var altura = Number(inputAltura.value);
        var corCabelo = selectCabelo.value;

        if( altura < 1.85 && (corCabelo == '3' || corCabelo == '4')){
            divMensagem.innerHTML = `<img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQDlspEg8yVvWV1ySCX09WCkmGd1TcBgGaRgvomLPUgmzZUCHqE">`;
        }else {
            divMensagem.innerHTML = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_K9-2iPN2_bT3_hRai0vZCI9kPdC3UCfYISGLLmfVbfNG3SY4">`;
        }
    }

