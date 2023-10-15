let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};

valorSubtotal.innerText = subtotalInfo.valor;

const btnAddProduto = document.querySelector("#btn-add-produto");
const btnSubProduto = document.querySelector("#btn-sub-produto");
const qtdItemProduto = document.querySelector("#quantidade-produto");

function addProduto() {
  qtdItemProduto.value = Number(qtdItemProduto.value) + 1;
}

function subProduto() {
  if (qtdItemProduto.value > 0) {
    qtdItemProduto.value = Number(qtdItemProduto.value) - 1;
    subtotalInfo.quantidade = qtdItemProduto.value;
  }
}

function atualizaSubTotal() {
  subtotalInfo.quantidade = qtdItemProduto.value;
  quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
  console.log(subtotalInfo);
}
btnAddProduto.addEventListener("click", addProduto);
btnSubProduto.addEventListener("click", subProduto);
