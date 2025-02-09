function comprar() {
    //* Recuperar tipo de ingresso e quantidade
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);

    if(isNaN(quantidade) || quantidade < 0){
        alert('Digite uma quantidade valida!');
        return;
    }

    //* subtrair a quantidade disponível
   
    if(tipoIngresso == 'pista' ){
        comprarIngresso('pista', quantidade);
    }else if(tipoIngresso == 'superior'){
        comprarIngresso('superior', quantidade);
    }else if(tipoIngresso == 'inferior'){
        comprarIngresso('inferior', quantidade);
    }

}

function comprarIngresso(ingresso, qtd){
    let qtdIngresso = parseInt(document.getElementById(`qtd-${ingresso}`).textContent);
    if(qtd > qtdIngresso){
        alert(`Quantidade indisponível para tipo ${ingresso}`);
    }else{
        qtdIngresso = qtdIngresso - qtd;
        document.getElementById(`qtd-${ingresso}`).textContent = qtdIngresso;
        alert('Compra realizada com sucesso')
    }
    document.getElementById('qtd').value = ''

}



