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

//  Adiciona a fase do projeto como elemento 'h2'
const h2SubTitulo = document.createElement("h2");
h1Titulo.className = "project";
h1Titulo.innerText = "Execução do projeto:";
classProject.appendChild(h1Titulo);

//  Adiciona o título como elemento 'h1'
const h1Titulo = document.createElement("h1");
h1Titulo.id = "titulo";
h1Titulo.className = "title";
h1Titulo.innerText = "Manipulação do DOM utilizando JavaScript!";
classProject.appendChild(h1Titulo);