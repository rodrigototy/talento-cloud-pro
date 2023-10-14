import databaseProject from "./databaseProject.js";

const urlPageProject = "https://rodrigototy.github.io/talento-cloud-pro/";
const urlRepositoryProject =
  "https://github.com/rodrigototy/talento-cloud-pro/tree/main/";
const divProject = document.querySelector(".projetos");
const columnIndex = document.querySelector("columnIndex");
const columnHomepage = document.querySelector("columnHomepage");
const columnRepository = document.querySelector("columnRepository");
const columnDescricao = document.querySelector("columnDescricao");

databaseProject.forEach((element) => {
  const preItemIndex = document.createElement("pre");
  const preItemHomepage = document.createElement("pre");
  const preItemIndex = document.createElement("pre");
  const preItemIndex = document.createElement("pre");

  preItemProject.className = "itemProject";
  preItemProject.innerHTML = 
  `
  <span>${element.index}</span>
  <span><a href=${urlPageProject}${element.pasta}>${element.nome}</a></span>
  <span><a href=${urlRepositoryProject}${element.pasta}>${element.nome}</a></span>
  <span>${element.descricao}</span>
  `;
  divProject.appendChild(preItemProject);
});
