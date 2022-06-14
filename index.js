const elementoResposta = document.querySelector("#resposta");
const inputPergunta = document.querySelector("#inputPergunta");
const botaoPergunta = document.querySelector("#botaoPerguntar");
const respostas = [
  "Sim",
  "Talvez",
  "Claro que não",
  "Com certeza...    não",
  "Com certeza sim",
  "Sem chance",
  "Provavelmente",
  "Vai com tudo",
  "Pode acreditar"
];

//clicar em fazer pergunta
function fazerPergunta() {
  if (inputPergunta.value == "") {
    alert("digite sua pergunta");
    return;
  }

  botaoPergunta.setAttribute("disabled", true);

  const pergunta = "<div>" + inputPergunta.value + "</div>";

  //gerar numero aleatorio
  const totalRespostas = respostas.length;
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas);

  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio];
  elementoResposta.style.opacity = 1;

  //sumir a resposta depois de 3 segundos
  setTimeout(function () {
    elementoResposta.style.opacity = 0;
    botaoPergunta.removeAttribute("disabled");
  }, 3000);
}
