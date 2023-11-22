// Definição das informações dos campos
import { fields } from "./fieldsModule.js";
import {
  validarCampoGenerico,
  enviarDadosDoadores,
  showPopup,
  limparFormulario,
} from "./functionsModule.js";

const versionControl = document.querySelector("#version_id");
const buttonEnviar = document.querySelector('input[type="submit"]');
const buttonCancelar = document.getElementById("cancelar");

versionControl.innerHTML = "Versão: 1.0.01";

fields.forEach((field) => {
  // Adicionar tratamento de eventos 'focus' para campos obrigatórios
  field.input.addEventListener("focus", () => {
    if (field.requerido) {
      field.label.classList.add("required-popup");
    }
  });
  // Adicionar tratamento de eventos 'blur' para validação
  field.input.addEventListener("input", (e) => {
    if (field.validateFunction) {
      validarCampoGenerico(
        field.input.value,
        field.fieldName,
        field.validateFunction,
        field.validateParameter
      );
    } else if (field.requerido) {
      field.label.classList.remove("required-popup");
    }
  });
  // Adicionar formatação dos dados no Input
  field.input.addEventListener("blur", () => {
    if (field.formatInput) {
      field.input.value = field.formatInput(field.input.value, field.nextField);
    }
  });
});

buttonEnviar.addEventListener("click", (event) => {
  let msgErro = "";
  let fieldFocus = "";
  event.preventDefault();

  fields.forEach((field) => {
    if (field.validateFunction) {
      const isValid = validarCampoGenerico(
        field.input.value,
        field.fieldName,
        field.validateFunction,
        field.validateParameter
      );

      if (!isValid && !null) {
        msgErro += field.popupErrorMessage;
        if (!fieldFocus) {
          fieldFocus = field.input.id;
        }
      }
    }
  });

  if (msgErro === "") {
    enviarDadosDoadores();
    showPopup("Dados enviados com sucesso!", "success-popup");
    limparFormulario();
  } else {
    showPopup(msgErro, "error-popup");
    const focusField = fields.find((field) => field.input.id === fieldFocus);
    if (focusField) {
      focusField.input.focus();
    }
  }
});

buttonCancelar.addEventListener("click", (event) => {
  window.location.href = "index.html";
});
