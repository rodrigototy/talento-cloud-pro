const eventDate = new Date();
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const fullDateAndTimeUTC =
eventDate.toLocaleDateString("pt-BR", options) + "<br>" + eventDate.toTimeString();

let numberStatusConection 
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

// Atualiza a cada 2 segundos
setInterval(function () {
    statusConexao();
}, 2000);
