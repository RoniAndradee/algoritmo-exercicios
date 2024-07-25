
    var peso = 0;
    var altura = 0;
    var imc = 0

    function calcIMC(){
        peso = Number(inputPeso.value);
        altura = Number(inputAltura.value);
        imc = peso / (altura * altura)

        divIMC.innerHTML = `Seu IMC é ${imc}` 
    }

