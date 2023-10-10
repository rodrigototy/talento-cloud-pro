const username = "drigojo";
const senha = "123456";
const usernameInput = document.querySelector("#login-usuario");
const senhaInput = document.querySelector("#login-senha");
const buttonLogin = document.querySelector("#btn-login");
const buttonLimpar = document.querySelector("#btn-limpar");
const errorMessage = document.querySelectorAll(".error-text");

// Estilização do botão login
buttonLogin.style.color = "black";
buttonLogin.style.borderRadius = "20px";
buttonLogin.style.border = "1px solid black";

// Estilização do botão limpar
buttonLimpar.style.color = "black";
buttonLimpar.style.borderRadius = "20px";
buttonLimpar.style.border = "1px solid black";

buttonLogin.addEventListener("mouseover", () => {
  buttonLogin.style.transition = "0.5s";
  buttonLogin.style.color = "#fff";
  buttonLogin.style.transition = "0.5s";
  buttonLogin.style.backgroundColor = "rgb(0, 105, 105)";
});

buttonLogin.addEventListener("mouseout", () => {
  buttonLogin.style.color = "black";
  buttonLogin.style.backgroundColor = "#f0f1f1";
});

buttonLimpar.addEventListener("mouseover", () => {
    buttonLimpar.style.transition = "0.5s";
    buttonLimpar.style.color = "#fff";
    buttonLimpar.style.transition = "0.5s";
    buttonLimpar.style.backgroundColor = "rgb(110, 105, 105)";
  });
  
  buttonLimpar.addEventListener("mouseout", () => {
    buttonLimpar.style.color = "black";
    buttonLimpar.style.backgroundColor = "#f0f1f1";
  });
  
buttonLogin.addEventListener("click", () => {
  if (usernameInput.value == username && senhaInput.value == senha) {
    alert(` Os dados estão corretos!
Seja Bem-Vindo ao Sistema!`);
  } else {
    usernameInput.classList.remove("correct");
    usernameInput.classList.add("error");

    senhaInput.classList.remove("correct");
    senhaInput.classList.add("error");

    for (const element of errorMessage) {
      element.classList.add("visible");
    }

    alert(`Usuário e/ou senha estão incorretos.
        Por favor, tente novamente!`);
  }
});

buttonLimpar.addEventListener("click", () => {
  usernameInput.classList.remove("error");
  usernameInput.classList.add("correct");

  senhaInput.classList.remove("error");
  senhaInput.classList.add("correct");

  for (const element of errorMessage) {
    element.classList.remove("visible");
    element.classList.add("block");
  }
  usernameInput.value = "";
  senhaInput.value = "";
});

usernameInput.addEventListener("input", () => {
  usernameInput.classList.remove("error");
  usernameInput.classList.add("correct");

  for (const element of errorMessage) {
    element.classList.remove("visible");
    element.classList.add("block");
  }
});

senhaInput.addEventListener("input", () => {
  senhaInput.classList.remove("error");
  senhaInput.classList.add("correct");

  for (const element of errorMessage) {
    element.classList.remove("visible");
    element.classList.add("block");
  }
});

// Atividade em Grupo: Karine, Rodrigo Jose, Paulo Henrique.

// Como criou uma lista, devemos selecionar o primeiro e o segundo
// errorMessage[0].classList.add('visible');
// errorMessage[1].classList.add("visible");
