// script.js

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const statusConexao = "Conexão realizada com sucesso!";
let fullDate, fullTime, eventDate;
let numberConexao = 1;
let tentativasSucesso = 0;

function showTime() {
  eventDate = new Date();
  fullDate = eventDate.toLocaleDateString("pt-BR", options);
  fullTime = eventDate.toTimeString();

  document.getElementById("statusConexao").innerHTML = statusConexao;
  document.getElementById("currentDate").innerHTML = fullDate;
  document.getElementById("currentTime").innerHTML = fullTime;
}

// Atualiza a cada 1 segundo
setInterval(function () {
  showTime(); //Atualiza o Relógio
  if (tentativasSucesso < 3) {
    conexao(); //Realiza o teste de conexão
  }
  if (numberConexao == 5) {
    alert(`
    Finalizado as tentativas de conexão!
    
    Tentativas com sucesso: ${tentativasSucesso}
    Confira os detalhes no log do Console!
    `);
  }
  numberConexao++;
}, 1000);

function conexao() {
  if (numberConexao == 1) {
    console.log("Iniciando tentativas de conexão:");
  }
  if (numberConexao < 4) {
    console.log(`${numberConexao}) Conexão com o arquivo JavaScript...`);
    console.log("Conexão realizada com sucesso!");
    console.log(fullDate + "\n" + fullTime);
    tentativasSucesso++;
  }
  if (tentativasSucesso == 3) {
    console.log("Finalizado as tentativas de conexão!");
    console.log(`Tentativas com sucesso: ${tentativasSucesso}`);
  }
}
