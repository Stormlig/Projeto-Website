/*        JOGO DA FORCA
1: APÓS CLICAR EM JOGAR ,(BOTOES VÃO APARECER CHAT E UMA IMAGEM DE FUNDO.) 
1.1: UMA PALAVRA DO ARRAY É ESCOLHIDA.
1.2: TODA PALAVRA VAI CONTER TAMBÉM UMA IMAGEM. 
1.3: "COM BAIXA VISIBILIDADE"

2: TODA VEZ QUE USUARIO CLICAR EM [ENVIAR] SEJA LETRA OU CARACTER é verificado se a palavra escolhida contem ou é semelhante.
2.1: SE FOR VERDADE, A LETRA APARECE E (A IMAGEM FICA MAIS NITIDA), 
2.2: SE NÃO FOR FICA MENOS NITIDA.

3: SE ACONTECER 3 ERROS SEGUIDOS É LIBERADO UMA DICA.

4: TODA VEZ QUE O USUARIO ACERTA A PALAVRA POR COMPLETO É EXIBIDO UM ALERTA E A IMAGEM FICA NITIDA.

5: APÓS APARECER O ALERTA. É REINICIADO O JOGO.


*/

var forca = ["sacola", "parede", "opulência", "plenitude", "transformação", "ampulheta", "regulamentação", "jurisdição", "entretenimento", "veículos", "relógio", "cronômetro", "arbusto", "restaurante", "perfume", "fazenda", "escuderia", "edifício", "alicerces", "alvenaria", "cotonifício", "precipício", "panaceia", "odisseia", "moreia", "zabelê", "jembe"];

//var forca = ["jurisdição"]

var imagens = {
  sacola: "<img src=\"imagens/sacola.jpg\"/>",
  parede: "<img src=\"imagens/parede.jpeg\"/>",
  opulência: "<img src=\"imagens/opulência.jpg\"/>",
  plenitude: "<img src=\"imagens/plenitude.jpg\"/>",
  transformação: "<img src=\"imagens/transformação.jpeg\"/>",
  ampulheta: "<img src=\"imagens/ampulheta.jpg\"/>",
  regulamentação: "<img src=\"imagens/regulamentação.webp\"/>",
  jurisdição: "<img src=\"imagens/jurisdição.webp\"/>",
  entretenimento: "<img src=\"imagens/entretenimento.jpg\"/>",
  veículos: "<img src=\"imagens/veículo.jpg\"/>",
  relógio: "<img src=\"imagens/relógio.jpg\"/>",
  cronômetro: "<img src=\"imagens/cronômetro.jpg\"/>",
  arbusto: "<img src=\"imagens/arbusto.jpg\"/>",
  restaurante: "<img src=\"imagens/restaurante.jpg\"/>",
  perfume: "<img src=\"imagens/perfume.jpeg\"/>",
  fazenda: "<img src=\"imagens/fazenda.webp\"/>",
  escuderia: "<img src=\"imagens/escuderia.jpeg\"/>",
  edifício: "<img src=\"imagens/edifício.jpg\"/>",
  alicerces: "<img src=\"imagens/alicerces.jpg\"/>",
  alvenaria: "<img src=\"imagens/alvenaria.jpeg\"/>",
  cotonifício: "<img src=\"imagens/cotonifício.jpg\"/>",
  precipício: "<img src=\"imagens/precipício.jpg\"/>",
  panaceia: "<img src=\"imagens/panaceia.webp\"/>",
  odisseia: "<img src=\"imagens/odisseia.webp\"/>",
  moreia: "<img src=\"imagens/moreia.jpg\"/>",
  zabelê: "<img src=\"imagens/zabelê.jpg\"/>",
  jembe: "<img src=\"imagens/jembe.jpeg\"/>",
};

var info5 = document.getElementById('info5')
var startExibir = document.getElementById('start');
var chat = document.getElementById('receivetxt');
var send = document.getElementById('send');
var imagem = document.getElementById('imagem');
var show = document.getElementById('show');
var erro = document.getElementById('showErro');
var info = document.getElementById('info');
var blurLow = 0;
var acertouLetra = false;
var randomString = "";
var wordDisplayed = "";
var numeroErros = 0;
var jogoEmAndamento = false; // Variável para controlar o estado do jogo

startExibir.addEventListener('click', startExibirClickHandler);

function startExibirClickHandler() {
  if (jogoEmAndamento) { // Verifica se o jogo já está em andamento
    reiniciarJogo(); // Chama a função para reiniciar o jogo completamente
    return;
  }
  chat.style.display = 'block'
  send.style.display = 'block';
  startExibir.style.display = 'none';
  info.style.display = 'none';
  erro.innerHTML = "";
  info5.style.display = "none"

  var randomtxt = Math.floor(Math.random() * forca.length);
  randomString = forca[randomtxt];

  imagem.style.display = 'flex';
  imagem.style.filter = `blur(${100}px)`;
  imagem.innerHTML = imagens[randomString] || ""; // Compara e exibe os elementos com o mesmo nome

  show.innerHTML = "";
  wordDisplayed = "";
  for (var i = 0; i < randomString.length; i++) {
    wordDisplayed += "_";
  }

  show.innerHTML = wordDisplayed;
  chat.value = "";

  jogoEmAndamento = true; // Define que o jogo está em andamento
}

function reiniciarJogo() {
  jogoEmAndamento = false; // Define que o jogo não está mais em andamento
  acertouLetra = false;
  blurLow = 0;
  numeroErros = 0;
  erro.innerHTML = "";
  startExibirClickHandler(); // Chama a função para iniciar um novo jogo
}

send.addEventListener('click', sendClickHandler);

function sendClickHandler() {
  var userInput = chat.value.toLowerCase();
  var hasMatch = false;

  for (var i = 0; i < randomString.length; i++) {
    var letra = randomString[i];
    if (userInput.includes(letra)) {
      wordDisplayed = wordDisplayed.substr(0, i) + letra + wordDisplayed.substr(i + 1);
      acertouLetra = true;
      hasMatch = true;
      blurLow++;
    }
  }

  if (!hasMatch) {
    numeroErros++;
  } 

  erro.innerHTML = "Erros: " + numeroErros; // VER QUAL FICA MELHOR ASSIM OU MOSTRANDO O X

  if (numeroErros >= 10) {
    alert("GameOver");
    return reiniciarJogo();
  }

  show.innerHTML = wordDisplayed.toLocaleUpperCase();
  chat.value = "";

  if (acertouLetra) {
    diminuirBlur();
    acertouLetra = false;
  }

  if (wordDisplayed === randomString) {
    alert("Parabéns! Você acertou a palavra!");
    tornarCompletamenteNitida();
    setTimeout(reiniciarJogo, 10000)
  }
}

function diminuirBlur() {
  if (blurLow < 100) {
    blurLow += 18;
    imagem.style.filter = `blur(${100 - blurLow}px)`;
  }
}

function tornarCompletamenteNitida() {
  imagem.style.filter = "none";
}

