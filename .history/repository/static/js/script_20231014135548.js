import databaseProject from "./databaseProject.js";

const urlPageProject = "https://rodrigototy.github.io/talento-cloud-pro/";
const urlRepositoryProject =
  "https://github.com/rodrigototy/talento-cloud-pro/";
const divProject = document.querySelector(".projetos");

databaseProject.forEach((element) => {
  const preItemProject = document.createElement("pre");
  preItemProject.className = "itemProject";
  preItemProject.innerHTML = "<span>${element.nome</span>";
  divProject.appendChild(preItemProject);
});
