
    var valorPassagem = 0;
    var valorUber = 0.75;
    var qtdViagens = 0;
    var dist = 0;
    var totalOnibus = 0;
    var totalUber = 0;
    var total = 0;


    function calcVT(){
        valorPassagem = Number(inputValor.value);
        qtdViagens = Number(inputQntd.value);
        dist = Number(inputDist.value);
        totalOnibus = (qtdViagens * 0.90) * valorPassagem;
        totalUber = ((qtdViagens * 0.10) * dist) * valorUber;
        total = totalOnibus + totalUber;
        
        div_vt.innerHTML = `Você vai gastar R$ ${total} por mês com transporte` 
    }

