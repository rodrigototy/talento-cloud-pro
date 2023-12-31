const listaProdutos = [
  {
    id: 1,
    imageSrc:
      "https://rodrigototy.github.io/talento-cloud-pro/repository/images/item-001-patinete.webp",
    nomeItem: "Patinete Scooter Dobrável",
    descreveItem:
      "Patinete Scooter dobrável com freio modelo Bv008 na cor azul",
    precoItem: "R$ 139,60",
  },
  {
    id: 2,
    imageSrc:
      "https://rodrigototy.github.io/talento-cloud-pro/repository/images/item-002-bicicleta.webp",
    nomeItem: "Bicicleta Infantil Spider",
    descreveItem: "Bicicleta infantil menino Spider Marvel Aro 12 Homem Aranha",
    precoItem: "R$ 350,00",
  },
  {
    id: 3,
    imageSrc:
      "https://rodrigototy.github.io/talento-cloud-pro/repository/images/item-003-jenga.webp",
    nomeItem: "Jenga Clássico Hasbro",
    descreveItem: "Jenga Clássico Hasbro modelo A2120",
    precoItem: "R$ 89,00",
  },
  {
    id: 4,
    imageSrc:
      "https://rodrigototy.github.io/talento-cloud-pro/repository/images/item-004-cara-cara.webp",
    nomeItem: "Jogo Cara a Cara",
    descreveItem: "Jogo de mesa Cara a cara Com aplicativo Estrela",
    precoItem: "R$ 98,79",
  },
];

const main = document.querySelector("main");
const section = document.createElement("section");
section.className = "listaProdutos";

listaProdutos.forEach((produto) => {
  // O segundo argumento (null) é para formatação e o terceiro (2) é a quantidade de espaços de recuo.
  const produtoJSON = JSON.stringify(produto, null, 2); 
  const item = document.createElement("pre");
  item.className = "item";
  item.textContent = produtoJSON;
  section.appendChild(item);
});
main.appendChild(section);
