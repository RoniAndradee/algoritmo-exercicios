
    var temperatura = 0;

    function verificar(){
        temperatura = Number(inputTemperatura.value)
        if (temperatura < 10){
            divMensagem.innerHTML = `O clima está apropriado para conservar alimentos <br> <img src="https://ser.vitao.com.br/wp-content/uploads/2017/09/16-Alimentos-que-d%C3%A3o-disposi%C3%A7%C3%A3o-2.jpg">` 
        } else{
            divMensagem.innerHTML = `O clima está inapropiado para conservar alimentos <br> <img src="https://thumbs.dreamstime.com/b/frutas-podres-17140351.jpg">` 
        }
    }

