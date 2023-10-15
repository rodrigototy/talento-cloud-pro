// Captura os elementos pela ID
const titulo = document.getElementById("titulo");
const ul = document.querySelector("ul");
const a = document.querySelector("a");
const listaOrdenada = document.getElementById("lista-ordenada");
const primeiroPasso = document.getElementById("primeiroPasso");
const segundoPasso = document.getElementById("segundoPasso");
const terceiroPasso = document.getElementById("terceiroPasso");

primeiroPasso.innerText = "Adiciona conteúdo textual aos elementos 'h1' e 'a'"
titulo.innerText = "Manipulação do DOM utilizando JavaScript!";
a.innerText = "Visite o site da Proz Educação";

segundoPasso.innerText = "Adiciona três itens simples na lista não ordenada usando innerHTML";
ul.innerHTML =
  "<li>Primeiro Item</li><li>Segundo Item</li><li>Terceiro Item</li>";

  terceiroPasso.inn  Adiciona três itens com links na lista ordenada usando innerHTML
listaOrdenada.innerHTML = `
    <li><a href="https://www.uol.com.br/">Portal UOL</a></li>
    <li><a href="https://eletrobras.gupy.io/">Trabalhe na Eletrobrás</a></li>
    <li><a href="https://chat.openai.com/">Conheça o ChatGPT</a></li>
`;
