
    function ver(){
        var qtdXicaras = Number(inputXicaras.value); 
        var resultado = '';
        var URL_CAFE = 'https://img.freepik.com/fotos-premium/cafe-em-po-cafe-em-colher-isolado-no-fundo-branco_250899-63.jpg';
        var URL_LEITE = 'https://minhasaude.proteste.org.br/wp-content/uploads/2023/06/colher-carregando-punhado-de-leite-em-po-sobre-fundo-branco.jpg';

        for(var contador = 1; contador <= qtdXicaras; contador++){
            resultado += `<img src="${URL_LEITE}" style="width:100px; heigth:100px"> <img src="${URL_CAFE}" style="width:100px; heigth:100px"> <img src="${URL_CAFE}" style="width:100px; heigth:100px"> <br><br>`
        }
        divMensagem.innerHTML = `${resultado}`;
    }

