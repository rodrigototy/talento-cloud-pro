// Definir informações dos campos
const fields = [
  {
    input: document.getElementById("username"),
    label: document.querySelector('label[for="username"]'),
    helper: document.getElementById("username-helper"),
    errorMessage: "O username deve ter pelo menos 6 caracteres\n",
    validate: validarUsername,
  },
  {
    input: document.getElementById("email"),
    label: document.querySelector('label[for="email"]'),
    helper: document.getElementById("email-helper"),
    errorMessage: "Digite um email válido\n",
    validate: validarEmail,
  },
  {
    input: document.getElementById("idade"),
    label: document.querySelector('label[for="idade"]'),
    helper: document.getElementById("idade-helper"),
    errorMessage: "A idade informada é inválida!\n",
    validate: validarIdade,
  },
  {
    input: document.getElementById("senha"),
    label: document.querySelector('label[for="senha"]'),
    helper: document.getElementById("senha-helper"),
    errorMessage: "A senha não atende aos critérios de segurança.\n",
    validate: validarSenha,
  },
  {
    input: document.getElementById("confirma-senha"),
    label: document.querySelector('label[for="confirma-senha"]'),
    helper: document.getElementById("confirma-senha-helper"),
    errorMessage: "As senhas não conferem!",
    validate: (senha, confirmaSenha) => confereSenha(senha, confirmaSenha),
  },
];

const buttonEnviar = document.querySelector('button[type="submit"]');

buttonEnviar.addEventListener("click", (event) => {
  let msgErro = "";
  let fieldFocus = "";

  fields.forEach((field) => {
    if (!field.validate(field.input.value)) {
      msgErro += field.errorMessage;
      if (!fieldFocus) {
        fieldFocus = field.input.id;
      }
    }
  });

  if (msgErro === "") {
    alert("Dados enviados com sucesso!");
  } else {
    alert(msgErro);
    event.preventDefault();
    const focusField = fields.find((field) => field.input.id === fieldFocus);
    if (focusField) {
      focusField.input.focus();
    }
  }
});

function validarUsername(username) {
  const statusUsername = username.length > 5;
  formatarCampo(
    statusUsername,
    fields[0].label,
    fields[0].input,
    fields[0].helper,
    fields[0].errorMessage
  );
  return statusUsername;
}

function validarEmail(email) {
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const statusEmail = regexEmail.test(email);
  formatarCampo(
    statusEmail,
    fields[1].label,
    fields[1].input,
    fields[1].helper,
    fields[1].errorMessage
  );
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
  formatarCampo(
    statusIdade,
    fields[2].label,
    fields[2].input,
    fields[2].helper,
    fields[2].errorMessage
  );
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

  formatarCampo(
    statusSenha,
    fields[3].label,
    fields[3].input,
    fields[3].helper,
    fields[3].errorMessage
  );
  return statusSenha;
}

function confereSenha(senha, confirmaSenha) {
  const statusConfereSenha = senha === confirmaSenha && senha !== "";
  formatarCampo(
    statusConfereSenha,
    fields[4].label,
    fields[4].input,
    fields[4].helper,
    fields[4].errorMessage
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

// Adicionar tratamento de eventos 'focus' para campos obrigatórios
fields.forEach((field) => {
  field.input.addEventListener("focus", () => {
    field.label.classList.add("required-popup");
  });
});

// Adicionar tratamento de eventos 'blur' para validação
fields.forEach((field) => {
  field.input.addEventListener("blur", (e) => {
    if (field.input === fields[2].input) {
      field.validate(e.target.value);
    } else {
      field.validate(field.input.value);
    }
  });
});
