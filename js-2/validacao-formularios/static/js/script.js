// ---------- VALIDAÇÃO USERNAME ---------- //
const usernameInput = document.getElementById("username");
const usernameLabel = document.querySelector('label[for="username"]');
const usernameHelper = document.getElementById("username-helper");

const emailInput = document.getElementById("email");
const emailLabel = document.querySelector('label[for="email"]');
const emailHelper = document.getElementById("email-helper");

const idadeInput = document.getElementById("idade");
const idadeLabel = document.querySelector('label[for="idade"]');
const idadeHelper = document.getElementById("idade-helper");

const senhaInput = document.getElementById("senha");
const senhaLabel = document.querySelector('label[for="senha"]');
const senhaHelper = document.getElementById("senha-helper");

const confirmaSenhaInput = document.getElementById("confirma-senha");
const confirmaSenhaLabel = document.querySelector(
  'label[for="confirma-senha"]'
);
const confirmaSenhaHelper = document.getElementById("confirma-senha-helper");

function validarUsername(username) {
  return username.length > 5;
}

function validarEmail(email) {
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regexEmail.test(email);
}

function validarSenha(password) {
  // Verifica o comprimento mínimo (geralmente 8 caracteres ou mais)
  if (password.length < 8) {
    return false;
  }
  // Verifica se há pelo menos uma letra maiúscula
  if (!/[A-Z]/.test(password)) {
    return false;
  }
  // Verifica se há pelo menos uma letra minúscula
  if (!/[a-z]/.test(password)) {
    return false;
  }
  // Verifica se há pelo menos um número
  if (!/[0-9]/.test(password)) {
    return false;
  }
  // Verifica se há pelo menos um caractere especial (por exemplo, !@#$%^&*)
  if (!/[!@#\$%^&*]/.test(password)) {
    return false;
  }
  // Se todas as condições anteriores passarem, a senha é considerada forte
  return true;
}

function confereSenha(senha, confirmaSenha) {
  return senha === confirmaSenha && senha !== "";
}

function validarIdade(idade) {
  // Verifica se o campo idade foi preenchido
  if (idade !== undefined && idade !== null && idade !== "") {
    // Converte o valor para um número
    idade = parseInt(idade);

    // Verifica se o valor é um número inteiro e está dentro do intervalo desejado
    if (Number.isInteger(idade) && idade > 0 && idade < 150) {
      return true; // Idade válida
    } else {
      return false; // Idade inválida
    }
  }
  return true; // Campo idade é opcional e não foi preenchido
}

// Formatar o campo conforme o status da validação
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

senhaInput.addEventListener("focus", () => {
  senhaLabel.classList.add("required-popup");
});

confirmaSenhaInput.addEventListener("focus", () => {
  confirmaSenhaLabel.classList.add("required-popup");
});

// Validar valor do input
usernameInput.addEventListener("blur", (e) => {
  formatarCampo(
    validarUsername(e.target.value),
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

senhaInput.addEventListener("blur", (e) => {
  formatarCampo(
    validarSenha(e.target.value),
    senhaLabel,
    senhaInput,
    senhaHelper,
    "A senha não atende aos critérios de segurança."
  );
});

confirmaSenhaInput.addEventListener("blur", (e) => {
  formatarCampo(
    confereSenha(senhaInput.value, e.target.value),
    confirmaSenhaLabel,
    confirmaSenhaInput,
    confirmaSenhaHelper,
    "As senhas não conferem!"
  );
});

idadeInput.addEventListener("blur", (e) => {
    formatarCampo(
      validarIdade(e.target.value),
      idadeLabel,
      idadeInput,
      idadeHelper,
      "A idade informada é inválida!"
    );
  });
  