let amigos = [];
//let amigoAleatorio = amigos[Math.floor(Math.random() * amigos.
function adicionar() {

    //* pegando elementos
    let nomeAmigo = document.getElementById('nome-amigo');
    let amigosCaixa = document.getElementById('lista-amigos')

    if (nomeAmigo == '') {
        alert('Campos vazios não são permitidos')
        return
    }

   

    if (amigos.includes(nomeAmigo.value)) {
        alert('Nome já adicionado');
        return;
    }
     amigos.push(nomeAmigo.value)
    //* colocando na tela
    if (amigosCaixa.textContent == '') {
        amigosCaixa.textContent = nomeAmigo.value
    } else {
        amigosCaixa.textContent = amigosCaixa.textContent + ', ' + nomeAmigo.value;
    }

    nomeAmigo.value = '';
    atualizarLista();
    atualizarSorteio();

}


function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}


function sortear() {
    embaralhar(amigos);
    if (amigos.length <= 4) {
        alert('Adicione pelo menos 4 amigos')
        return
    }
    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br/>';
        }
    }

}
function excluirAmigo(index) {
    //? O método splice em JavaScript é bastante útil para manipular arrays. Ele permite adicionar, remover ou substituir elementos em um array
    amigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}

function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio')
    sorteio.innerHTML = '';
}
function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        //? Cria um elemnto de parágrafo para cada amigo
        let paragrafo = document.createElement('p');
        paragrafo.textContent = amigos[i];

        //? Adiciona um evento de clique para excluir o amigo
        paragrafo.addEventListener('click', function () {
            excluirAmigo(i);
        });

        lista.appendChild(paragrafo);
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';

}