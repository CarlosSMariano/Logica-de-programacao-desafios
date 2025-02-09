
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function estadoButton() {
    let botao = document.getElementById('btn-reiniciar');

    if (botao.classList.contains('conteiner__botao-desabilitado')) {
        botao.classList.remove('conteiner__botao-desabilitado');
        botao.classList.add('conteiner__botao');
    } else {
        botao.classList.remove('conteiner__botao');
        botao.classList.add('conteiner__botao-desabilitado')
    }
}


function sortear() {
    let quantidade = document.getElementById('quantidade').value;
    let min = document.getElementById('de').value;
    let max = document.getElementById('ate').value;


    let sorteados = [];
    let numeros;
    let mensagemNumero = quantidade > 1 ? 'Números sorteados: ' : 'Numero sorteado: ';

    if (quantidade === '' || min === '' || max === '') {
        alert('Campos vazios não são permitidos');
        return;
    } else if (max <= min) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
    }else if (quantidade > (ate - de + 1)) {
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        return;
      } else {

        for (let i = 0; i < quantidade; i++) {
            numeros = numeroAleatorio(min, max);

            while (sorteados.includes(numeros)) {
                numeros = numeroAleatorio(min, max)
            }
            sorteados.push(numeros);
        }

        let resultado = document.getElementById('resultado')
        resultado.innerHTML = `<label class="texto__paragrafo" id="resultado">${mensagemNumero} ${sorteados}</label>`;

        estadoButton('reiniciar');

    }

}


function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = ' <label class="texto__paragrafo" id="resultado">Números sorteados: nenhum até agora</label>'
    estadoButton();
}


