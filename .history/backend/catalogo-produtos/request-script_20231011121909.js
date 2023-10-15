// URL da página HTML
const url = 'https://rodrigototy.github.io/talento-cloud-pro/backend/catalogo-produtos/lista-produtos.html';

// Array para armazenar os produtos
const listaProdutos = [];


const main = document.querySelector("main");
const section = document.createElement("section");

// Função para buscar e analisar a página HTML
async function fetchData() {
  try {
    const response = await fetch(url);
    const html = await response.text();

    // Analisar o HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    // Selecionar as tags pre com a classe "item" dentro da section
    const preElements = doc.querySelectorAll('section.listaProdutos pre.item');

    // Loop através das tags pre e converter o conteúdo em objetos JSON
    preElements.forEach((preElement) => {
      const jsonText = preElement.textContent.trim();
      const produto = JSON.parse(jsonText);
      listaProdutos.push(produto);
    });

    // Agora, listaProdutos contém os dados como objetos JSON
    console.log(listaProdutos);
    section.innerText = listaProdutos;
  } catch (error) {
    console.error('Ocorreu um erro ao buscar os dados:', error);
    section.innerText = "listaProdutos";
  }
}

// Chamar a função para buscar os dados da página HTML
fetchData();
