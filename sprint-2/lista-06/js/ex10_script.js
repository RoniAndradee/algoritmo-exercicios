
    var idade = 0;
    var salario = 0;

    function analisar(){
        idade = Number(inputIdade.value);
        salario = Number(inputSalario.value);

        if (idade < 18 && salario < 2500){
            divMensagem.innerHTML = `Menor de idade e liso`;
        } else if (idade < 18 && salario >= 2500){
            divMensagem.innerHTML = `Menor de idade e ostentação`;
        } else if(idade >= 18 && salario < 3500){
            divMensagem.innerHTML = `Maior de idade e liso`;
        } else if (idade >= 18 && salario >= 3500 && salario <= 7000){
            divMensagem.innerHTML = `Maior de idade e ostentação`;
        } else {
            divMensagem.innerHTML = `Maior de idade e mega ostentação`;
        }
    }

