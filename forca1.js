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

var forca = ["sacola", "parede"];

var imagens = {
  sacola: "<img src=\"imagens/morning1.png\"/>",
  parede: "<img src=\"imagens/morning2.png\"/>"
};

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

  var randomtxt = Math.floor(Math.random() * forca.length);
  randomString = forca[randomtxt];

  imagem.style.display = 'flex';
  imagem.style.filter = `blur(${100}px)`;
  imagem.innerHTML = imagens[randomString] || "";

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
    erro.innerHTML += "X";
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
  }

  if (wordDisplayed === randomString) {
    alert("Parabéns! Você acertou a palavra!");
    tornarCompletamenteNitida();
    setTimeout(reiniciarJogo, 10000)
  }
}

function diminuirBlur() {
  if (blurLow < 100) {
    blurLow += 15;
    imagem.style.filter = `blur(${100 - blurLow}px)`;
  }
}

function tornarCompletamenteNitida() {
  imagem.style.filter = "none";
}
