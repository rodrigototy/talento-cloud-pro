// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

// Mostrar popup de campo obrigatório
usernameInput.addEventListener("focus", () => {
  usernameLabel.classList.add("required-popup");
});

// Ocultar popup de campo obrigatório
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

// Validar valor do input
