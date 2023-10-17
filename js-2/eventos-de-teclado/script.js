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
let menuPerfil = false;
let mostrarMenuPerfil = false;

linkPerfil.addEventListener("mouseover", () => {
  navPerfil.style.display = "block";
  mostrarMenuPerfil = true;
  console.log("Mostrar menu");
});

linkPerfil.addEventListener("mouseout", () => {
  if (mostrarMenuPerfil) {
    navPerfil.addEventListener("mouseover", () => {
      console.log("Mostrar menu");
    });
    console.log("Não fechar menu");
  } else {
    mostrarMenuPerfil = false;
    navPerfil.style.display = "none";
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
