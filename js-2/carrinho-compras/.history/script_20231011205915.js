let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};

quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
valorSubtotal.innerText = subtotalInfo.valor;

const btnAddProduto = document.querySelector("#btn-add-produto");
const btnSubProduto = document.querySelector("#btn-sub-produto");
const qtdItemProduto = document.querySelector("#quantidade-produto");

function addProduto () {
  qtdItemProduto.value = Number(qtdItemProduto.value) + 1;
}

function SubProduto () {
  qtdItemProduto.value = Number(qtdItemProduto.value) + 1;
}

btnAddProduto.addEventListener('click', addProduto)
