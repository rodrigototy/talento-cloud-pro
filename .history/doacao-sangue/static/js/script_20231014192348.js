const inputCpf = document.querySelector("#cpf");

function validarCPF(cpf) {
  cpf = cpf.replace(/[^\d]+/g, "");
  console.log(cpf);
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
  for (i = 0; i < 9; i++) add += cpf.charAt(i) * (10 - i);
  rev = 11 - (add % 11);
  if (rev === 10 || rev === 11) rev = 0;
  if (rev !== parseInt(cpf.charAt(9))) return false;
  // Valida 2o dígito
  add = 0;
  for (i = 0; i < 10; i++) add += cpf.charAt(i) * (11 - i);
  rev = 11 - (add % 11);
  if (rev === 10 || rev === 11) rev = 0;
  if (rev !== parseInt(cpf.charAt(10))) return false;
  return true;
}

function validarDataNascimento(data) {
  var regex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
  return regex.test(data);
}

function validarEmail(email) {
  var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

function validarTelefone(telefone) {
  var regex = /^\(?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  return regex.test(telefone);
}

function validarSenha(senha) {
  var regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return regex.test(senha);
}

function validarFormulario(formulario) {
  var cpf = formulario.cpf.value;
  var dataNascimento = formulario.dataNascimento.value;
  var email = formulario.email.value;
  var telefone = formulario.telefone.value;
  var senha = formulario.senha.value;

  if (!validarCPF(cpf)) {
    alert("CPF inválido");
    return false;
  }

  if (!validarDataNascimento(dataNascimento)) {
    alert("Data de nascimento inválida");
    return false;
  }

  if (!validarEmail(email)) {
    alert("E-mail inválido");
    return false;
  }

  if (!validarTelefone(telefone)) {
    alert("Telefone inválido");
    return false;
  }

  if (!validarSenha(senha)) {
    alert("Senha inválida");
    return false;
  }

  return true;
}

inputCpf.addEventListener("change", () => {
  const cpfValido = validarCPF(inputCpf.value);


  if (!validarCPF(cpf)) {
    alert("CPF inválido");
    return false;
  }

});
