// Captura o elemento main pela TagName
const main = document.querySelector("main");

// Adiciona a class Resultado dentro de main
const classResultado = document.createElement("div");
classResultado.className = "resultado";
main.appendChild(classResultado);

// Adiciona a class Project dentro de classResultado
const classProject = document.createElement("div");
classProject.className = "project";
classResultado.appendChild(classProject);

//  Adiciona a fase de execução do projeto como elemento 'h2'
const h2SubTitulo = document.createElement("h2");
h2SubTitulo.className = "project";
h2SubTitulo.innerText = "Execução do projeto:";
classProject.appendChild(h2SubTitulo);

//  Adiciona o título como elemento 'h1'
const h1Titulo = document.createElement("h1");
h1Titulo.id = "titulo";
h1Titulo.className = "title";
h1Titulo.innerText = "Catálogo de Produtos à Venda";
classProject.appendChild(h1Titulo);

//  Adiciona card de produto
const cardProduto = document.createElement("div");
cardProduto.className = "cardProduto";
classProject.appendChild(cardProduto);

//  Adiciona card image dentro de card produto
const cardImageItem = document.createElement("img");
cardImageItem.className = "cardImageItem";
cardProduto.appendChild(cardImageItem);

//  Adiciona card descrição dentro de card de produto
const cardInfoItem = document.createElement("div");
cardInfoItem.className = "cardInfoItem";
cardProduto.appendChild(cardInfoItem);

//  Adiciona a fase de execução do projeto como elemento 'h2'
const h2SubTitulo = document.createElement("h2");
h2SubTitulo.className = "project";
h2SubTitulo.innerText = "Execução do projeto:";
classProject.appendChild(h2SubTitulo);
