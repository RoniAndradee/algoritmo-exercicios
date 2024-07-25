
    var nomeEmpresa = '';
    var valorBolsa = 0;
    var valorVR = 0;
    var tempoDesloc = 0;

    function analisar(){
        nomeEmpresa = inputEmpresa.value;
        valorBolsa = Number(inputBolsa.value);
        valorVR = Number(inputVr.value);
        tempoDesloc = Number(inputDeslocamento.value);

        if (valorBolsa >= 1800 || valorVR >= 20 || tempoDesloc <= 30){
            divMensagem.innerHTML = `A empresa ${nomeEmpresa} é uma de suas preferências`;
        } else{
            divMensagem.innerHTML = `A empresa ${nomeEmpresa} está fora da sua lista`;
        }
    }

