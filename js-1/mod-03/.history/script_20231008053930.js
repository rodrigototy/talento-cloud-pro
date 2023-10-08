const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const statusConexao = "Conexão realizada com sucesso!";
let fullDate, fullTimeUTC, eventDate;
let numberConexao = 1;

function showTime() {
  eventDate = new Date();

  fullDate =
    eventDate.toLocaleDateString("pt-BR", options);

  fullDateAndTimeUTC =
    eventDate.toLocaleDateString("pt-BR", options) +
    "<br>" +
    eventDate.toTimeString();
    document.getElementById("statusConexao").innerHTML = statusConexao;
  document.getElementById("currentTime").innerHTML = fullDateAndTimeUTC;
}

// Atualiza a cada 1 segundo
setInterval(function () {
  showTime();
}, 1000);

function conexao() {
  if (numberConexao < 4) {
    console.log(`${numberConexao}) Conexão com um arquivo JavaScript...`);
    console.log("Conexão realizada com sucesso!");
    console.log(fullDateAndTimeUTC);
    numberConexao++;
  }
}

// Atualiza a cada 2 segundos
setInterval(function () {
  conexao();
}, 2000);
