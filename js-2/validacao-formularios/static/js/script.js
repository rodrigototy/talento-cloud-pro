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
        usernameInput.classList.remove("error")
        usernameInput.classList.add("correct")
    } else {
        usernameInput.classList.remove("correct")
        usernameInput.classList.add("error")
    }
});

// Validar valor do input
