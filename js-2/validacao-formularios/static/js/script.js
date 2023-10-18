// ---------- VALIDAÇÃO USERNAME ---------- //
const usernameInput = document.getElementById("username");
const usernameLabel = document.querySelector('label[for="username"]');
const usernameHelper = document.getElementById("username-helper");

const emailInput = document.getElementById("email");
const emailLabel = document.querySelector('label[for="email"]');
const emailHelper = document.getElementById("email-helper");

function validarEmail(email) {
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regexEmail.test(email);
  }

// Mostrar popup de campo obrigatório
usernameInput.addEventListener("focus", () => {
  usernameLabel.classList.add("required-popup");
});

emailInput.addEventListener("focus", () => {
    emailLabel.classList.add("required-popup");
  });
  
// Validar valor do input
usernameInput.addEventListener("blur", (e) => {
  if (e.target.value.length > 5) {
    usernameLabel.classList.remove("required-popup");
    usernameInput.classList.remove("error");
    usernameInput.classList.add("correct");
    usernameHelper.classList.remove("visible");
  } else {
    usernameInput.classList.remove("correct");
    usernameInput.classList.add("error");
    usernameHelper.classList.add("visible");
    usernameHelper.innerHTML = "O username deve ter pelo menos 6 caracteres";
  }
});

emailInput.addEventListener("blur", (e) => {
    if (validarEmail(e.target.value)) {
        emailLabel.classList.remove("required-popup");
        emailInput.classList.remove("error");
        emailInput.classList.add("correct");
        emailHelper.classList.remove("visible");
    } else {
        emailInput.classList.remove("correct");
        emailInput.classList.add("error");
        emailHelper.classList.add("visible");
        emailHelper.innerHTML = "Digite um email válido";
    }
  });
  

