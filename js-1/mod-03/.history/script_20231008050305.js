const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
let fullDateAndTimeUTC;

let numberStatusConexao = 1;

function showTime() {
    let eventDate = new Date();
    fullDateAndTimeUTC =
    eventDate.toLocaleDateString("pt-BR", options) +
    "<br>" +
    eventDate.toTimeString();
  document.getElementById("currentTime").innerHTML = fullDateAndTimeUTC;
}
showTime();

// Atualiza a cada segundo
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

statusConexao();

// Atualiza a cada 2 segundos
setInterval(function () {
  statusConexao();
}, 2000);
