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

// Atualiza a cada segundo
 setTimeout(statusConexao, 2000);
const myTimeout2 = setTimeout(statusConexao, 2000);
const myTimeout3 = setTimeout(statusConexao, 2000);
