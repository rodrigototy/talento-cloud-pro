const h1Titulo = document.getElementById("titulo");
const linkTag = document.querySelector("a");
const listaOrdenada = document.querySelector("#lista-ordenada");

h1Titulo.innerText = "Manipulação do DOM utilizando JavaScript!";
linkTag.innerText = "Proz Educação Homepage";
listaOrdenada.appendChild(document.createElement('li').innerHTML='<a href=""></a>');