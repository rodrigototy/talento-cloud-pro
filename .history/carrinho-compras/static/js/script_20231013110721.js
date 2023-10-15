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
  if (Number(qtdItemProduto.value) < 99) {
    qtdItemProduto.value = Number(qtdItemProduto.value) + 1;
  }
  atualizaSubTotal();
}

function subProduto() {
  if (qtdItemProduto.value > 0) {
    qtdItemProduto.value = Number(qtdItemProduto.value) - 1;
    atualizaSubTotal();
  }
}

function atualizaSubTotal() {
  const precoProduto = subtotalInfo.valor;
  let quantidadeProduto = Number(qtdItemProduto.value);

  if (quantidadeProduto > 99) {
    quantidadeProduto = 99;
  }
  if (quantidadeProduto == 0) {
    qtdItemProduto.value = 0;
  } else {
    qtdItemProduto.value = quantidadeProduto.toString().padStart(2, "0");
  }

  if (quantidadeProduto == 1) {
    quantidadeSubtotal.innerText = qtdItemProduto.value + " item";
  } else if (subtotalInfo.quantidade > 1) {
    quantidadeSubtotal.innerText = qtdItemProduto.value + " itens";
  } else {
    quantidadeSubtotal.innerText = "Carrinho Vazio";
  }

  subtotalInfo.quantidade = quantidadeProduto;

  valorSubtotal.innerText = (
    subtotalInfo.valor * subtotalInfo.quantidade
  ).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

atualizaSubTotal();

btnAddProduto.addEventListener("click", addProduto);
btnSubProduto.addEventListener("click", subProduto);
qtdItemProduto.addEventListener("input", atualizaSubTotal);
