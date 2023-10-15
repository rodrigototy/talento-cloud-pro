import databaseProject from "./databaseProject.js";

const urlPageProject = "https://rodrigototy.github.io/talento-cloud-pro/";
const urlRepositoryProject =
  "https://github.com/rodrigototy/talento-cloud-pro/tree/main/";
  
const columnIndex = document.querySelector(".columnIndex");
const columnHomepage = document.querySelector(".columnHomepage");
const columnRepository = document.querySelector(".columnRepository");
const columnDescricao = document.querySelector(".columnDescricao");

databaseProject.forEach((element) => {
  const preItemIndex = document.createElement("p");
  const preItemHomepage = document.createElement("p");
  const preItemRepository = document.createElement("pre");
  const preItemDescricao = document.createElement("pre");

  preItemIndex.innerHTML = `<p>${element.index}</p>`;
  preItemHomepage.innerHTML = `<p><a href=${urlPageProject}${element.pasta}>${element.nome}</a></p>`;
  preItemRepository.innerHTML = `<p><a href=${urlRepositoryProject}${element.pasta}>${element.nome}</a></p>`;
  preItemDescricao.innerHTML = `<p>${element.descricao}</p>`;

  columnIndex.appendChild(preItemIndex);
  columnHomepage.appendChild(preItemHomepage);
  columnRepository.appendChild(preItemRepository);
  columnDescricao.appendChild(preItemDescricao);
});
