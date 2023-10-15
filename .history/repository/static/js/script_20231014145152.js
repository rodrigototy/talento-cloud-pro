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
  const preItemRepository = document.createElement("pre");
  const preItemDescricao = document.createElement("pre");

  preItemIndex.innerHTML = `<span>${element.index}</span>`;
  preItemHomepage.innerHTML = `<span><a href=${urlPageProject}${element.pasta}>${element.nome}</a></span>`;
  preItemRepository.innerHTML = `<span><a href=${urlRepositoryProject}${element.pasta}>${element.nome}</a></span>`;
  preItemDescricao.innerHTML = `<span>${element.descricao}</span>`;

  columnIndex.appendChild();

});
