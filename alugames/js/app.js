
function alterarStatus(item) {

    let imagem = document.querySelector(`#game-${item} .dashboard__item__img`);
    let botao = document.querySelector(`#game-${item} .dashboard__item__button`);
    let nomeJogo = document.querySelector(`#game-${item} .dashboard__item__name`);


    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Devolver'

    } else { 
        if (confirm(`Você tem certeza que gostaria de alugar ${nomeJogo.textContent} `)) {
            imagem.classList.add('dashboard__item__img--rented')
            botao.classList.add('dashboard__item__button--return');
            botao.textContent = 'Alugar'
        }
    }



}