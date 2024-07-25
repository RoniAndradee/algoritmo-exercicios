
    var renda = 0;
    var rendaFamiliar = 0;

    function analisar(){
        renda = Number(inputRenda.value);
        rendaFamiliar = Number(inputRendaFamilia.value);

        if (renda <= 1050 && rendaFamiliar <= 2100){
            alert('Você terá direito!')
        } else{
            alert('Você NÃO terá direito')
        }
    }

