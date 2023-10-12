// Captura o elemento main pela ID
const main = document.querySelector("main");
const titulo = document.getElementById("titulo");
const a = document.querySelector("a");
const listaOrdenada = document.getElementById("lista-ordenada");
const primeiroPasso = document.getElementById("primeiroPasso");
const segundoPasso = document.getElementById("segundoPasso");
const terceiroPasso = document.getElementById("terceiroPasso");

//  Adiciona conteúdo textual aos elementos 'h1' e 'a'
//titulo.innerText = "Manipulação do DOM utilizando JavaScript!";
//a.innerText = "Visite o site da Proz Educação";

const classResultado = document.createElement("div");
classResultado.className = "resultado";
main.appendChild(classResultado);