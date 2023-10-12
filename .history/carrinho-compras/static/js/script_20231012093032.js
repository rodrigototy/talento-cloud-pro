let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};

const btnAddProduto = document.querySelector("#btn-add-produto");
const btnSubProduto = document.querySelector("#btn-sub-produto");
const qtdItemProduto = document.querySelector("#quantidade-produto");

function addProduto() {
  qtdItemProduto.value = Number(qtdItemProduto.value) + 1;
  atualizaSubTotal();
}

function subProduto() {
  if (qtdItemProduto.value > 0) {
    qtdItemProduto.value = Number(qtdItemProduto.value) - 1;
    atualizaSubTotal();
  }
}

function atualizaSubTotal() {
  subtotalInfo.quantidade = qtdItemProduto.value;
  if (subtotalInfo.quantidade > 1) {
    quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
  } elseif (subtotalInfo.quantidade > 1) {
    quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
  }
  valorSubtotal.innerText = (subtotalInfo.valor * subtotalInfo.quantidade).toFixed(2);
}

atualizaSubTotal();

btnAddProduto.addEventListener("click", addProduto);
btnSubProduto.addEventListener("click", subProduto);
