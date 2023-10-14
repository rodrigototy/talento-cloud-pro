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
  let quantidadeItemProduto = Number(qtdItemProduto.value);

  if (quantidadeItemProduto > 99) {
    quantidadeItemProduto = 99;
  }
  if ()
  qtdItemProduto.value = quantidadeItemProduto.toString().padStart(2, "0");
  subtotalInfo.quantidade = quantidadeItemProduto;

  if (subtotalInfo.quantidade == 1) {
    quantidadeSubtotal.innerText =
      Number(subtotalInfo.quantidade).toString().padStart(2, "0") + " item";
  } else if (subtotalInfo.quantidade > 1) {
    quantidadeSubtotal.innerText =
      Number(subtotalInfo.quantidade).toString().padStart(2, "0") + " itens";
  } else {
    quantidadeSubtotal.innerText = "Carrinho Vazio";
  }

  valorSubtotal.innerText = (
    subtotalInfo.valor * subtotalInfo.quantidade
  ).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  /*
  if (qtdItemProduto.value == "" || qtdItemProduto.value == 0) {
    qtdItemProduto.value = 0;
  } else {
    qtdItemProduto.value = Number(qtdItemProduto.value)
      .toString()
      .padStart(2, "0");
  } */
}

atualizaSubTotal();

btnAddProduto.addEventListener("click", addProduto);
btnSubProduto.addEventListener("click", subProduto);
qtdItemProduto.addEventListener("input", atualizaSubTotal);
