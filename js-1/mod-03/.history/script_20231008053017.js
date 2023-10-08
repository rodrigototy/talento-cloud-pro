const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const 
let fullDateAndTimeUTC, eventDate;
let numberStatusConexao = 1;

function showTime() {
  eventDate = new Date();
  fullDateAndTimeUTC =
    eventDate.toLocaleDateString("pt-BR", options) +
    "<br>" +
    eventDate.toTimeString();
  document.getElementById("currentTime").innerHTML = fullDateAndTimeUTC;
}

// Atualiza a cada 1 segundo
setInterval(function () {
  showTime();
}, 1000);

function statusConexao() {
  if (numberStatusConexao < 4) {
    console.log(`${numberStatusConexao}) Conexão com um arquivo JavaScript...`);
    console.log("Conexão realizada com sucesso!");
    console.log(fullDateAndTimeUTC);
    numberStatusConexao++;
  }
}

// Atualiza a cada 2 segundos
setInterval(function () {
  statusConexao();
}, 2000);
