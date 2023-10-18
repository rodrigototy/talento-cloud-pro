/* Grupo 01
Rodrigo José
Diego de Souza
José Roberto
Davi Marques
Lauro Mello
 */

const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");
const linkPerfilDados = document.querySelector("#link-perfil-dados");

document.addEventListener("mouseover", (e) => {
  console.log(e.target.id);
  if (e.target.id == "link-perfil" || e.target.id == "nav-perfil") {
    navPerfil.style.display = "block";
    console.log("Mostrar menu");
  } else {
    //  navPerfil.style.display = "none";
  }
});

document.addEventListener("keyup", (e) => {
  console.log(e);
  console.log(e.key);
  console.log(e.code);

  if (navPerfil.style.display == "block") {
    if (e.code == "Digit1") {
      console.log("Abrir página de dados");
      linkPerfilDados.click();
    }
  } else if (e.code == "Digit1") {
    console.log("Abrir menu perfil");
    navPerfil.style.display = "block";
  }

  if (e.code == "Escape") {
    console.log("Fechar menu");
    navPerfil.style.display = "none";
  }
});
