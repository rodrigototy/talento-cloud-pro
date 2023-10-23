// Definir informações dos campos
const fields = [
  {
    fieldName: "username",
    requerido: true,
    input: document.getElementById("username"),
    label: document.querySelector('label[for="username"]'),
    helper: document.getElementById("username-helper"),
    errorMessage: "O username deve ter pelo menos 6 caracteres\n",
    validate: validarUsername,
  },
  {
    fieldName: "email",
    requerido: true,
    input: document.getElementById("email"),
    label: document.querySelector('label[for="email"]'),
    helper: document.getElementById("email-helper"),
    errorMessage: "Digite um email válido\n",
    validate: validarEmail,
  },
  {
    fieldName: "idade",
    requerido: false,
    input: document.getElementById("idade"),
    label: document.querySelector('label[for="idade"]'),
    helper: document.getElementById("idade-helper"),
    errorMessage: "A idade informada é inválida!\n",
    validate: validarIdade,
  },
  {
    fieldName: "senha",
    requerido: true,
    input: document.getElementById("senha"),
    label: document.querySelector('label[for="senha"]'),
    helper: document.getElementById("senha-helper"),
    errorMessage: "A senha não atende aos critérios de segurança.\n",
    validate: validarSenha,
  },
  {
    fieldName: "confirma-senha",
    requerido: true,
    input: document.getElementById("confirma-senha"),
    label: document.querySelector('label[for="confirma-senha"]'),
    helper: document.getElementById("confirma-senha-helper"),
    errorMessage: "As senhas não conferem!",
    validate: (confirmaSenha) => confereSenha(confirmaSenha, fields.find(field => field.fieldName === "senha").input.value),
  },
];

const buttonEnviar = document.querySelector('button[type="submit"]');

buttonEnviar.addEventListener("click", validarCampos);

function encontrarIndiceDoCampo(fieldName) {
  return fields.findIndex((field) => field.fieldName === fieldName);
}

function validarCampos() {
  let msgErro = "";
  let fieldFocus = "";

  fields.forEach((field) => {
    const isValid = field.validate(field.input.value);

    if (!isValid) {
      msgErro += field.errorMessage;
      if (!fieldFocus) {
        fieldFocus = field.input.id;
      }
    }
  });

  if (msgErro === "") {
    alert("Dados enviados com sucesso!");
  } else {
    const focusField = fields.find((field) => field.input.id === fieldFocus);
    event.preventDefault();
    alert(msgErro);
    if (focusField) {
      focusField.input.focus();
    }
  }
}

function validarCampoGenerico(value, fieldName, validateFunction) {
  const fieldIndex = encontrarIndiceDoCampo(fieldName);
  const isValid = validateFunction(value);

  formatarCampo(fieldIndex, isValid);
  return isValid;
}

function validarUsername(username) {
  return username.length > 5;
}

function validarEmail(email) {
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regexEmail.test(email);
}

function validarIdade(idade) {
  if (idade === undefined || idade === null || idade === "") {
    return true;
  }

  idade = parseInt(idade);
  return !!(Number.isInteger(idade) && idade > 0 && idade < 150);
}

function validarSenha(password) {
  const minLength = password.length >= 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[-!@#$%^&*]/.test(password);

  return minLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
}

function confereSenha(senha, confirmaSenha) {
  return senha === confirmaSenha && senha !== "";
}

function formatarCampo(indexField, status) {
  const field = fields[indexField];
  const { label, input, helper, errorMessage } = field;

  if (status) {
    label.classList.remove("required-popup");
    input.classList.remove("error");
    input.classList.add("correct");
    helper.classList.remove("visible");
  } else {
    input.classList.remove("correct");
    input.classList.add("error");
    helper.classList.add("visible");
    helper.innerHTML = errorMessage;
  }
}

fields.forEach((field) => {
  // Adicionar tratamento de eventos 'focus' para campos obrigatórios
  field.input.addEventListener("focus", () => {
    if (field.requerido) {
      field.label.classList.add("required-popup");
    }
  });

// Adicionar tratamento de eventos 'blur' para validação
  field.input.addEventListener("blur", (e) => {
    validarCampoGenerico(field.input.value, field.fieldName, field.validate);
  });
});
