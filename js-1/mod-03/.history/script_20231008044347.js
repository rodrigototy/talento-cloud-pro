const fullDateAndTimeUTC

function showTime() {
  const event = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const fullDateAndTimeUTC =
    event.toLocaleDateString("pt-BR", options) + "<br>" + event.toTimeString();
  document.getElementById("currentTime").innerHTML = fullDateAndTimeUTC;
}
showTime();
setInterval(function () {
  showTime();
}, 1000);

function conexao() {
  console.log("Conexão com um arquivo JavaScript!");
  console.log("Conexão realizada com sucesso!");
  console.log(fullDateAndTimeUTC);
}

conexao();
