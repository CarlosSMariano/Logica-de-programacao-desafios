let amigos = [];
//let amigoAleatorio = amigos[Math.floor(Math.random() * amigos.
function adicionar() {

    //* pegando elementos
    let nomeAmigo = document.getElementById('nome-amigo').value;

    if (nomeAmigo !== '') {
        //* guardando amigos
        amigos.push(nomeAmigo)

        //* colocando na tela
        let amigosCaixa = document.getElementById('lista-amigos')
        amigosCaixa.innerHTML = `<p id="lista-amigos">${amigos} </p>`;
    }else{
        alert('Campos vazios não são permitidos')
    }

    document.getElementById('nome-amigo').value = '';

}


function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}


function sortear() {

    embaralhar(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br/>';
        }
    }

}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';

}