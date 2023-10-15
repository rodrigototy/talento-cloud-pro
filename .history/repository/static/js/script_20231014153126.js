import databaseProject from "./databaseProject.js";

const urlPageProject = "https://rodrigototy.github.io/talento-cloud-pro/";
const urlRepositoryProject =
  "https://github.com/rodrigototy/talento-cloud-pro/tree/main/";
  
const columnIndex = document.querySelector(".columnIndex");
const columnHomepage = document.querySelector(".columnHomepage");
const columnRepository = document.querySelector(".columnRepository");
const columnDescricao = document.querySelector(".columnDescricao");

databaseProject.forEach((element) => {
  const itemIndex = document.createElement("pre");
  const itemHomepage = document.createElement("p");
  const itemRepository = document.createElement("p");
  const itemDescricao = document.createElement("p");

  itemIndex.innerHTML = `<p>${element.index}</p>`;
  itemHomepage.innerHTML = `<p><a href=${urlPageProject}${element.pasta}>${element.nome}</a></p>`;
  itemRepository.innerHTML = `<p><a href=${urlRepositoryProject}${element.pasta}>${element.nome}</a></p>`;
  itemDescricao.innerHTML = `<p>${element.descricao}</p>`;

  columnIndex.appendChild(itemIndex);
  columnHomepage.appendChild(itemHomepage);
  columnRepository.appendChild(itemRepository);
  columnDescricao.appendChild(itemDescricao);
});
