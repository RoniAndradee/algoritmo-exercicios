
    var listaIngredientes = [];
    var listaPesos = [];
    var listaPrecos = [];
    var listaNomesHamburgueres = [];
    var listaPesosHamburgueres = [];
    var listaPrecosHamburgueres = [];

    function adicionarIngrediente() {
        var nomeIngrediente = inputIngrediente.value;
        var peso = Number(inputPeso.value);
        var preco = Number(inputPreco.value);

        if (nomeIngrediente == '' || peso == 0 || preco == 0) {
            divMensagemTela1.innerHTML = `<b style="color: #FF0000">Preencha todos os campos!</b>`
        } else if (listaIngredientes.indexOf(nomeIngrediente) != -1) {
            divMensagemTela1.innerHTML = `<b style="color: #FF0000">O ingrediente "${nomeIngrediente}" já foi adiconado nessa mistura!</b>`
        } else {
            divMensagemTela1.innerHTML = `<i style="color: #0F0">Foram adicionados ${peso} gramas de "${nomeIngrediente}" no blend!</i>`;
            listaIngredientes.push(nomeIngrediente);
            listaPesos.push(peso);
            listaPrecos.push(preco);
        }
    }

    function preparar() {
        var nomeHamburguer = inputHamburguer.value;
        var resultado = '';
        var pesoTotal = 0;
        var precoTotal = 0;
        if (listaIngredientes.length < 2) {
            divMensagemTela1.innerHTML = `<b style="color: #FF0000">Adicione ao menos 2 ingredientes para o blend!</b>`
        } else if (nomeHamburguer == '') {
            divMensagemTela1.innerHTML = `<b style="color: #FF0000">Você deve dar um nome para o novo hamburguer!</b>`
        } else {
            for (var i = 0; i < listaIngredientes.length; i++) {
                resultado += ` <br> ${i + 1} - INGREDIENTE: <b>${listaIngredientes[i]}</b> - PESO: <b>${listaPesos[i]}</b>g - PREÇO KG: R$<b>${listaPrecos[i]}</b> - PREÇO FINAL: R$<b>${listaPrecos[i] * listaPesos[i] / 1000}</b>`
            }
            divMensagemTela1.innerHTML = `<br><b>PREPARANDO NOVO HAMBURGUER:</b> ${resultado}`;

            for (var i = 0; i < listaIngredientes.length; i++) {
                pesoTotal += listaPesos[i];
                precoTotal += listaPrecos[i] * listaPesos[i] / 1000;
            }
            listaNomesHamburgueres.push(nomeHamburguer);
            listaPesosHamburgueres.push(pesoTotal);
            listaPrecosHamburgueres.push(precoTotal);

            resultado = `Nome: <b>${nomeHamburguer}</b> <br>
            Peso Total: <b>${pesoTotal}</b>g <br>
            Preço Total: R$<b>${precoTotal}</b>`;
            divMensagemTela1.innerHTML += `<br><br><b>INFORMAÇÕES DO HAMBURGUER REGISTRADO NO CATÁLOGO:</b> <br> ${resultado}`
        }
    }

    function prepararCardapio() {
        if (listaNomesHamburgueres.length == 0) {
            divMensagemTela1.innerHTML = `<b style="color: #FF0000">Adicione pelo menos um blend de hamburguer para prosseguir!</b>`;
        } else {
            pagina1.style.display = "none"
            pagina2.style.display = "block"
        }
    }

    function adicionarAoCardapio() {
        var tipoHamburguer = inputTipoHamburguer.value;
        var qtdHamburgueres = Number(inputQtdHamburgueres.value);
        var tipoQueijo = selectTipoQueijo.value;
        var cebola = selectCebola.value;
        var alface = selectAlface.value;
        var tomate = selectTomate.value;
        var adicionalQueijo = 0;
        var adicionalCebola = 0;
        var adicionalAlface = 0;
        var adicionalTomate = 0;
        var valorTotalLanche = 0;
        var numeroHamburguer = listaNomesHamburgueres.indexOf(tipoHamburguer);
        var precoHamburguer = listaPrecosHamburgueres[numeroHamburguer] * qtdHamburgueres;

        if (tipoHamburguer == '' || qtdHamburgueres <= 0) {
            divMensagemTela2.innerHTML = `<b style="color: #FF0000">Preencha todo os campos!</b>`;
        } else if (listaNomesHamburgueres.indexOf(tipoHamburguer) == -1) {
            divMensagemTela2.innerHTML = `<b style="color: #FF0000">O hamburguer "${tipoHamburguer}" não existe no catálogo!</b>`;
        } else {
            if (tipoQueijo == 'Mussarela') {
                adicionalQueijo = 2;
            } else if (tipoQueijo == 'Prato') {
                adicionalQueijo = 2.50;
            } else if (tipoQueijo == 'Cheddar') {
                adicionalQueijo = 3;
            }

            if (cebola == 'Sim') {
                adicionalCebola = 1.50;
            }

            if (alface == 'Sim') {
                adicionalAlface = 1.75;
            }

            if(tomate == 'Sim') {
                adicionalTomate = 2;
            }

            valorTotalLanche = precoHamburguer + adicionalQueijo + adicionalCebola + adicionalAlface + adicionalTomate;

            divMensagemTela2.innerHTML = `Tipo Hamburguer: <b>${tipoHamburguer}</b> (<b>${listaPesosHamburgueres[numeroHamburguer]}</b>g / R$<b>${listaPrecosHamburgueres[numeroHamburguer]}</b>) <br>
            Quantidade de Hamburgueres: <b>${qtdHamburgueres}</b>x <br>
            Queijo: <b>${tipoQueijo}</b> <br>
            Cebola: <b>${cebola}</b> <br>
            Alface: <b>${alface}</b> <br>
            Tomate: <b>${tomate}</b> <br>
            Preço Final do Lanche: R$<b>${valorTotalLanche}</b>`;
        }

    }

