let total = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').innerHTML = 'R$ 0';
document.getElementById('quantidade').value = 0;

function adicionar() {

    //* recuperar nome, quantidade, valor
    let produto = document.getElementById('produto').value
    let quantidade = document.getElementById('quantidade').value
    let nomeProduto = produto.split(' - ')[0];
    let valor = parseInt(produto.split('R$')[1]);
    if (!produto || produto.trim() === '') {
        alert('Selecione um produto válido')
    }
    if (isNaN(quantidade) || quantidade <= 0) {
        alert('Escolha a quandidade que deseja comprar')
        return;
    }



    //*calculando subtotal
    let subTotal = quantidade * valor;

    //*adicionando no carrinho
    let carrinho = document.getElementById('lista-produtos')
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto"> <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$ ${subTotal}</span>
        </section>`

    //* Mostrando valor final
    total = total + subTotal;
    document.getElementById('valor-total').textContent = `R$${total}`
    document.getElementById('quantidade').value = 0;
}

function limpar() {
    total = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$ 0';
    document.getElementById('quantidade').value = ''
}
