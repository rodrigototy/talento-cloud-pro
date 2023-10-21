// Seleção de objetos do formulário
const msgErroUsername = "O username deve ter pelo menos 6 caracteres\n";
const msgErroEmail = "Digite um email válido\n";
const msgErroIdade = "A idade informada é inválida!\n";
const msgErroSenha = "A senha não atende aos critérios de segurança.\n";
const msgErroConfereSenha = "As senhas não conferem!";

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

const confereSenhaInput = document.getElementById("confirma-senha");
const confereSenhaLabel = document.querySelector('label[for="confirma-senha"]');
const confereSenhaHelper = document.getElementById("confirma-senha-helper");

const buttonEnviar = document.querySelector('button[type="submit"]');

buttonEnviar.addEventListener("click", (event) => {
  let msgErro = "";
  let fieldFocus = "";

  if (!validarUsername()) {
    msgErro += msgErroUsername;
    if (fieldFocus == undefined || fieldFocus == null || fieldFocus == "") {
      fieldFocus = "usernameInput";
    }
  }
  if (!validarEmail(emailInput.value)) {
    msgErro += msgErroEmail;
    if (fieldFocus == undefined || fieldFocus == null || fieldFocus == "") {
      fieldFocus = "emailInput";
    }
  }
  if (!validarIdade(idadeInput.value)) {
    msgErro += msgErroIdade;
    if (fieldFocus == undefined || fieldFocus == null || fieldFocus == "") {
      fieldFocus = "idadeInput";
    }
  }
  if (!validarSenha(senhaInput.value)) {
    msgErro += msgErroSenha;
    if (fieldFocus == undefined || fieldFocus == null || fieldFocus == "") {
      fieldFocus = "senhaInput";
    }
  }
  if (!confereSenha(senhaInput.value, confereSenhaInput.value)) {
    msgErro += msgErroConfereSenha;
    if (fieldFocus == undefined || fieldFocus == null || fieldFocus == "") {
      fieldFocus = "confereSenhaInput";
    }
  }
  if (msgErro == "") {
    alert("Dados enviados com sucesso!");
  } else {
    alert(msgErro);
    event.preventDefault();
    if (fieldFocus == "usernameInput") {
      usernameInput.focus();
    } else if (fieldFocus == "emailInput") {
      emailInput.focus();
    } else if (fieldFocus == "idadeInput") {
      idadeInput.value = "";
      idadeInput.focus();
    } else if (fieldFocus == "senhaInput") {
      senhaInput.focus();
    } else if (fieldFocus == "confereSenhaInput") {
      confereSenhaInput.focus();
    }
  }
});

function validarUsername() {
  const statusUsername = usernameInput.value.length > 5;
  formatarCampo(
    statusUsername,
    usernameLabel,
    usernameInput,
    usernameHelper,
    msgErroUsername
  );
  return statusUsername;
}

function validarEmail(email) {
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const statusEmail = regexEmail.test(email);
  formatarCampo(statusEmail, emailLabel, emailInput, emailHelper, msgErroEmail);
  return statusEmail;
}

function validarIdade(idade) {
  let statusIdade = true; // Campo idade é opcional e não foi preenchido
  // Verifica se o campo idade foi preenchido
  if (idade !== undefined && idade !== null && idade !== "") {
    // Converte o valor para um número
    idade = parseInt(idade);
    // Verifica se o valor é um número inteiro e está dentro do intervalo desejado
    statusIdade = !!(Number.isInteger(idade) && idade > 0 && idade < 150);
  }
  formatarCampo(statusIdade, idadeLabel, idadeInput, idadeHelper, msgErroIdade);
  return statusIdade;
}

function validarSenha(password) {
  let statusSenha;
  // Verifica o comprimento mínimo (geralmente 8 caracteres ou mais)
  if (password.length < 8) {
    statusSenha = false;
  }
  // Verifica se há pelo menos uma letra maiúscula
  if (!/[A-Z]/.test(password)) {
    statusSenha = false;
  }
  // Verifica se há pelo menos uma letra minúscula
  if (!/[a-z]/.test(password)) {
    statusSenha = false;
  }
  // Verifica se há pelo menos um número
  if (!/[0-9]/.test(password)) {
    statusSenha = false;
  }
  // Verifica se há pelo menos um caractere especial (por exemplo, !@#$%^&*)
  statusSenha = !!/[-!@#\\$%^&*]/.test(password);

  formatarCampo(statusSenha, senhaLabel, senhaInput, senhaHelper, msgErroSenha);
  return statusSenha;
}

function confereSenha(senha, confereSenha) {
  const statusConfereSenha = senha === confereSenha && senha !== "";
  formatarCampo(
    statusConfereSenha,
    confereSenhaLabel,
    confereSenhaInput,
    confereSenhaHelper,
    msgErroConfereSenha
  );
  return statusConfereSenha;
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

confereSenhaInput.addEventListener("focus", () => {
  confereSenhaLabel.classList.add("required-popup");
});

// Validar valor do input
usernameInput.addEventListener("blur", (e) => {
  validarUsername();
});

emailInput.addEventListener("blur", (e) => {
  validarEmail(emailInput.value);
});

idadeInput.addEventListener("blur", (e) => {
  validarIdade(e.target.value);
});

senhaInput.addEventListener("blur", (e) => {
  validarSenha(e.target.value);
});

confereSenhaInput.addEventListener("blur", (e) => {
  confereSenha(senhaInput.value, e.target.value);
});
