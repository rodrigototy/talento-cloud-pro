// Captura o elemento main pela TagName
const main = document.querySelector("main");

// Adiciona a class Resultado
const classResultado = document.createElement("div");
classResultado.className = "resultado";
main.appendChild(classResultado);

// Adiciona a class Project dentro de 
const classProject = document.createElement("div");
classProject.className = "project";
classResultado.appendChild(classProject);

