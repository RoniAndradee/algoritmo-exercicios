
    var formaPagamento = '';

    function analisar(){
        formaPagamento = inputForma.value;

        if (formaPagamento == 'dinheiro' || formaPagamento == 'debito'){
            alert('Você terá que pagar a vista');
        } else if (formaPagamento == 'crédito' || formaPagamento == 'boleto'){
            alert('Pagamento poderá ser parcelado');
        }
    }

