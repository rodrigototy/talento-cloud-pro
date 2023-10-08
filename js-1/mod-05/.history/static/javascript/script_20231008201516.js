/*
const h1Titulo = document.getElementById("titulo");
const linkTag = document.querySelector("a");
const listaOrdenada = document.querySelector("#lista-ordenada");

h1Titulo.innerText = "Manipulação do DOM utilizando JavaScript!";
linkTag.innerText = "Proz Educação Homepage";
listaOrdenada.appendChild(document.createElement('li'));

//const firstElementOl = listaOrdenada. */

// Captura os elementos pela ID
const titulo = document.getElementById("titulo");
const ul = document.querySelector("ul");
const a = document.querySelector("a");
const listaOrdenada = document.getElementById("lista-ordenada");

// Adiciona conteúdo aos elementos
titulo.innerText = "Manipulação do DOM utilizando JavaScript!";
a.innerText = "Visite o site da Proz Educação";

// Adiciona itens simples na lista não ordenada usando innerHTML
ul.innerHTML = "<li>Primeiro Item</li><li>Segundo Item</li><li>Terceiro Item</li>";

// Adiciona itens com links na lista ordenada usando innerHTML
listaOrdenada.innerHTML = `
    <li><a href="https://www.uol.com.br/">Portal UOL</a></li>
    <li><a href="https://eletrobras.gupy.io/">Trabalhe na Eletrobrás</a></li>
    <li><a href="https://www.site3.com">Site 3</a></li>
`;
