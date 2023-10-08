const eventDate = new Date();
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const fullDateAndTimeUTC =
eventDate.toLocaleDateString("pt-BR", options) + "<br>" + eventDate.toTimeString();

function showTime() {
  document.getElementById("currentTime").innerHTML = fullDateAndTimeUTC;
}
showTime();

// Atualiza a cada segundo
setInterval(function () {
  showTime();
}, 1000);

function statusConexao() {
  console.log("Conexão com um arquivo JavaScript...");
  console.log("Conexão realizada com sucesso!");
  console.log(fullDateAndTimeUTC);
}

statusConexao();

// Atualiza a cada segundo
const myTimeout = setTimeout(statusConexao, 5000);