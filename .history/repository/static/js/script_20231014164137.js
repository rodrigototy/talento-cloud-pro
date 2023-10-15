import databaseProject from "./databaseProject.js";

const urlPageProject = "https://rodrigototy.github.io/talento-cloud-pro/";
const urlRepositoryProject =
  "https://github.com/rodrigototy/talento-cloud-pro/tree/main/";
  
const columnIndex = document.querySelector(".columnIndex");
const columnHomepage = document.querySelector(".columnHomepage");
const columnRepository = document.querySelector(".columnRepository");
const columnDescricao = document.querySelector(".columnDescricao");
let index = 1;

databaseProject.forEach((element) => {
  const itemIndex = document.createElement("p");
  const itemHomepage = document.createElement("p");
  const itemRepository = document.createElement("p");
  const itemDescricao = document.createElement("p");

  index++;
  itemIndex.innerHTML = `${index}`;
  itemHomepage.innerHTML = `<a href=${urlPageProject}${element.pasta}>${element.nome}</a>`;
  itemRepository.innerHTML = `<a href=${urlRepositoryProject}${element.pasta}>${element.nome}</a>`;
  itemDescricao.innerHTML = `${element.descricao}`;

  columnIndex.appendChild(itemIndex);
  columnHomepage.appendChild(itemHomepage);
  columnRepository.appendChild(itemRepository);
  columnDescricao.appendChild(itemDescricao);
});
