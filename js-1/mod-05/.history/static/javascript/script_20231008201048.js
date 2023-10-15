// Captura os elementos pela ID
const titulo = document.getElementById("titulo");
const ul = document.querySelector("ul");
const a = document.querySelector("a");
const listaOrdenada = document.getElementById("lista-ordenada");

// Adiciona conteúdo aos elementos
titulo.innerText = "Título da Página";
a.innerText = "Visite o site da Prozeducação";

// Adiciona itens simples na lista não ordenada usando innerHTML
ul.innerHTML = "<li>Item 1</li><li>Item 2</li><li>Item 3</li>";

// Adiciona itens com links na lista ordenada usando innerHTML
listaOrdenada.innerHTML = `
    <li><a href="https://www.site1.com">Site 1</a></li>
    <li><a href="https://www.site2.com">Site 2</a></li>
    <li><a href="https://www.site3.com">Site 3</a></li>
`;
