let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};

const btnAddProduto = document.querySelector("#btn-add-produto");
const btnSubProduto = document.querySelector("#btn-sub-produto");
const quantidadeItem = document.querySelector("#quantidade-produto");

function addProduto() {
  if (Number(quantidadeItem.value) < 99) {
    quantidadeItem.value = Number(quantidadeItem.value) + 1;
  }
  atualizaSubTotal();
}

function subProduto() {
  if (quantidadeItem.value > 0) {
    quantidadeItem.value = Number(quantidadeItem.value) - 1;
    atualizaSubTotal();
  }
}

function atualizaSubTotal() {
  const precoProduto = subtotalInfo.valor;
  
  let quantidadeProduto = Number(quantidadeItem.value);

  if (quantidadeProduto > 99) {
    quantidadeProduto = 99;
  }
  if (quantidadeProduto == 0) {
    quantidadeItem.value = 0;
  } else {
    quantidadeItem.value = quantidadeProduto.toString().padStart(2, "0");
  }

  if (quantidadeProduto == 1) {
    quantidadeSubtotal.innerText = quantidadeItem.value + " item";
  } else if (subtotalInfo.quantidade > 1) {
    quantidadeSubtotal.innerText = quantidadeItem.value + " itens";
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
quantidadeItem.addEventListener("input", atualizaSubTotal);
