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

function formatarCampo(
  status,
  objetoLabel,
  objetoInput,
  objetoHelper,
  mensagemAjuda
) {
  if (status) {
    objetoLabel.classList.remove("required-popup");
    objetoInput.classList.remove("error");
    objetoInput.classList.add("correct");
    objetoHelper.classList.remove("visible");
  } else {
    objetoInput.classList.remove("correct");
    objetoInput.classList.add("error");
    objetoHelper.classList.add("visible");
    objetoHelper.innerHTML = mensagemAjuda;
  }
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
  formatarCampo(
    e.target.value.length > 5,
    usernameLabel,
    usernameInput,
    usernameHelper,
    "O username deve ter pelo menos 6 caracteres"
  );
});

emailInput.addEventListener("blur", (e) => {
  formatarCampo(
    validarEmail(e.target.value),
    emailLabel,
    emailInput,
    emailHelper,
    "Digite um email válido"
  );
});
