const linkPageHome = document.querySelector("main a");

document.addEventListener("keyup", (e) => {
    console.log(e);
    console.log(e.key);
    console.log(e.code);
  
    if (e.code == "Escape" || e.code == "Space") {
      console.log("Voltar para o menu principal.");
      linkPageHome.click();
      // window.location.href = "index.html";
    }
  });