
    var time = '';

    function falarSobre(){
        time = inputTime.value;

        if (time == 'corinthians'){
            divMensagem.innerHTML = `<div style="background-color:#000; color:#fff">Salve o Corinthians!</div>`;
        } else if (time == 'palmeiras'){
            divMensagem.innerHTML = `<div style="background-color:#0f0; color:#fff">Salve o alviverde imponente</div>`;
        } else if (time == 'santos'){
            divMensagem.innerHTML = `<div style="background-color:#fff; color:#000">Agora quem dá bola é o Santos</div>`;
        } else if(time == 'são paulo'){
            divMensagem.innerHTML = `<div style="background-color:#000; color:#f00">Salve o Tricolor paulista</div>`;
        }
    }

