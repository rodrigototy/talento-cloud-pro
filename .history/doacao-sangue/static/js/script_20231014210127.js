const inputDataNascimento = document.querySelector("#data_nascimento");
const inputCpf = document.querySelector("#cpf");
const inputEndereco = document.querySelector("#endereco");
const inputCep = document.querySelector("#cep");
const inputTelefone = document.querySelector("#telefone");

function validarCPF(cpf) {
  cpf = cpf.replace(/[^\d]+/g, "");
  if (cpf === "") return false;
  // Elimina CPFs inválidos conhecidos
  if (
    cpf.length !== 11 ||
    cpf === "00000000000" ||
    cpf === "11111111111" ||
    cpf === "22222222222" ||
    cpf === "33333333333" ||
    cpf === "44444444444" ||
    cpf === "55555555555" ||
    cpf === "66666666666" ||
    cpf === "77777777777" ||
    cpf === "88888888888" ||
    cpf === "99999999999"
  )
    return false;
  // Valida 1o dígito
  add = 0;
  for (let i = 0; i < 9; i++) add += cpf.charAt(i) * (10 - i);
  rev = 11 - (add % 11);
  if (rev === 10 || rev === 11) rev = 0;
  if (rev !== parseInt(cpf.charAt(9))) return false;
  // Valida 2o dígito
  add = 0;
  for (let i = 0; i < 10; i++) add += cpf.charAt(i) * (11 - i);
  rev = 11 - (add % 11);
  if (rev === 10 || rev === 11) rev = 0;
  if (rev !== parseInt(cpf.charAt(10))) return false;
  return true;
}

function validarDataNascimento(data) {
  const regexDataNascimento =
    /^(19|20)\d\d[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])$/;
  return regexDataNascimento.test(data);
}

function validarEmail(email) {
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regexEmail.test(email);
}

function validarTelefone(telefone) {
  const regexTelefone = /^\(?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  return regexTelefone.test(telefone);
}

function validarCep(cep) {
  // Expressão regular para validar o CEP
  const regexCep = /^\d{8}$/;
  // remove todos os caracteres não numéricos
  cep = cep.replace(/[^\d]+/g, "");
  // Verifica se o CEP corresponde à expressão regular
  return regexCep.test(cep);
}

function formatarCPF(cpf) {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

function formatarCep(cep) {
  // Formata o CEP no formato 99.999-999
  return cep.replace(/(\d{2})(\d{3})(\d{3})/, "$1.$2-$3");
}

inputCpf.addEventListener("input", () => {
    if (inputCpf.value.length == 11) {
        inputEndereco.focus();
    }
});

inputCpf.addEventListener("change", () => {
  const cpfInformado = inputCpf.value;

  if (!validarCPF(cpfInformado)) {
    alert(`
    O CPF informado é inválido!
    Por favor, informe um CPF válido`);
    inputCpf.value = "";
    inputCpf.focus();
  } else {
    inputCpf.value = formatarCPF(cpfInformado);
  }
});

inputDataNascimento.addEventListener("focusout", () => {
  const dataNascimento = inputDataNascimento.value;
  if (!validarDataNascimento(dataNascimento)) {
    alert(`
      A data de nascimento informada é inválido!
      Por favor, informe uma data de nascimento válida`);
    inputDataNascimento.value = "";
    //  inputDataNascimento.focus();
  } else {
    inputCpf.focus();
  }
});

inputCep.addEventListener("change", () => {
  const cepInformado = inputCep.value;
  console.log(validarCep(cepInformado));
  if (!validarCep(cepInformado)) {
    alert(`
        O CEP informado é inválido!
        Por favor, informe um CEP válido`);
    inputCep.value = "";
    inputCep.focus();
  } else {
    inputCep.value = formatarCep(cepInformado);
    inputTelefone.focus();
  }
});
