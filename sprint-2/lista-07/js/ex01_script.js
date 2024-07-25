
    fruta = '';

    function comer(){
        fruta = inputFruta.value;
        
        if (fruta == 'uva' || fruta == 'abacaxi'){
            alert(`Sim, vai comer ${fruta}`);
        } else {
            alert(`A fruta ${fruta} ela não come`);
        }
    }

