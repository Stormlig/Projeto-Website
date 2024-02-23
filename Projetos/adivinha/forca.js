function coletar(nomeUsuario, pontosUsuario) {
  var ul = document.getElementById('ranking-list');
  var li = document.createElement('li');
  li.textContent = nomeUsuario + ' - ' + pontosUsuario;
  ul.appendChild(li);

  // Ordena os elementos da lista em ordem decrescente
  var lis = ul.getElementsByTagName('li');
  var sortedLis = Array.from(lis).sort(function(a, b) {
    var pontosA = parseInt(a.textContent.split(' - ')[1]);
    var pontosB = parseInt(b.textContent.split(' - ')[1]);
    return pontosB - pontosA;
  });

  // Remove todos os elementos da lista atual
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }

  // Adiciona os elementos ordenados de volta à lista
  for (var i = 0; i < sortedLis.length; i++) {
    ul.appendChild(sortedLis[i]);
  }
}

function exibirRanking() {
  var ul = document.getElementById('ranking-list');
  ul.innerHTML = ''; // Limpa a lista atual

  // Obtém todos os dados do LocalStorage
  var keys = Object.keys(localStorage);

  // Filtra as chaves que representam usuários
  var users = keys.filter(function(key) {
    return key !== 'autenticado' && key !== 'nomeUsuario' && key !== 'pontosUsuario';
  });

  // Cria um array de objetos com nome do usuário e pontos
  var userData = users.map(function(user) {
    return {
      nomeUsuario: user,
      pontosUsuario: parseInt(localStorage.getItem(user))
    };
  });

  // Filtra os usuários com pontos válidos
  userData = userData.filter(function(user) {
    return !isNaN(user.pontosUsuario);
  });

  // Ordena os usuários em ordem decrescente de pontos
  userData.sort(function(a, b) {
    return b.pontosUsuario - a.pontosUsuario;
  });

  // Cria os elementos de lista com os dados dos usuários
  userData.forEach(function(user) {
    var li = document.createElement('li');
    li.textContent = formatarNome(user.nomeUsuario) + ' - ' + user.pontosUsuario;
    ul.appendChild(li);
  });
}

function formatarNome(nome) {
  // Verifica se o nome é uma string válida
  if (typeof nome === 'string') {
    // Separa o nome em palavras
    var palavras = nome.split(' ');

    // Capitaliza a primeira letra de cada palavra
    var nomeFormatado = palavras.map(function(palavra) {
      return palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase();
    });

    // Retorna o nome formatado
    return nomeFormatado.join(' ');
  }

  return nome; // Retorna o nome original caso não seja uma string válida
}

document.addEventListener("DOMContentLoaded", function() {
  exibirRanking();

    function exibirNomeUsuario() {
      var nomeUsuario = localStorage.getItem('nomeUsuario');
      var pontosUsuario = localStorage.getItem('pontosUsuario');
      var elementoNomeUsuario = document.getElementById('span-nome-usuario');

      if (!localStorage.getItem('autenticado') || !nomeUsuario || !pontosUsuario) {
        //window.location.href = 'pag2.html';
        return;
      } else {
         // Deixa a primeira letra em maiúscula
        var primeiraLetra = nomeUsuario.charAt(0).toUpperCase();
        var restoNome = nomeUsuario.slice(1);
        var nomeFormatado = primeiraLetra + restoNome;

        elementoNomeUsuario.textContent = nomeFormatado ;
      }
    }

    function adicionarPontosUsuario(nomeUsuario, pontos) {
      // Atualiza a pontuação no localStorage
      var pontuacaoAtual = parseInt(localStorage.getItem(nomeUsuario)) || 0;
      var novaPontuacao = pontuacaoAtual + pontos;
      localStorage.setItem(nomeUsuario, novaPontuacao);

      // Atualiza o valor exibido no elemento <span>
      document.getElementById("pontos").textContent = novaPontuacao;
    }
/*
  // Verificar autenticação do usuário quando a página for recarregada
  window.addEventListener("beforeunload", function() {
    if (!localStorage.getItem('autenticado') || !localStorage.getItem('nomeUsuario') || !localStorage.getItem('pontosUsuario')) {
    return; // Permite que a página seja recarregada normalmente
    }

  // Limpar dados de autenticação
  localStorage.removeItem('autenticado');
  localStorage.removeItem('nomeUsuario');
  localStorage.removeItem('pontosUsuario');

  // Redirecionar para a página de login
  history.pushState({}, '', 'pag2.html');
  });
*/
  // --------------------------------------- LOGICA DO GAME A BAIXO --------------------------------------------

  var forca = ["sacola", "parede", "opulência", "plenitude", "transformação", "ampulheta", "regulamentação", "jurisdição", "entretenimento", "veículos", "relógio", "cronômetro", "arbusto", "restaurante", "perfume", "fazenda", "escuderia", "edifício", "alicerces", "alvenaria", "cotonifício", "precipício", "panaceia", "odisseia", "moreia", "zabelê", "jembe", "magnetismo", "persuasão", "suricato", "fotografia", "aspide", "calotropis", "hibisco", "mandioca", "lagosta"];

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
    magnetismo: "<img src=\"imagens/magnetismo.jpg\"/>",
    persuasão: "<img src=\"imagens/persuasão.jpg\"/>",
    suricato: "<img src=\"imagens/suricato.jpg\"/>",
    fotografia: "<img src=\"imagens/fotografia.jpg\"/>",
    aspide: "<img src=\"imagens/aspide.jpg\"/>",
    hibisco: "<img src=\"imagens/hibisco.jpg\"/>",
    calotropis: "<img src=\"imagens/calotropis.jpg\"/>",
    mandioca: "<img src=\"imagens/mandioca.jpg\"/>",
    lagosta: "<img src=\"imagens/lagosta.jpg\"/>",
  };

  var contain = document.getElementById('contain')
  var info1 = document.getElementById('info1')
  var info5 = document.getElementById('info5')
  var startExibir = document.getElementById('start');
  var chat = document.getElementById('receivetxt');
  var send = document.getElementById('send');
  var imagem = document.getElementById('imagem');
  var show = document.getElementById('show');
  var erro = document.getElementById('showErro');
  var info = document.getElementById('info');
  var rank = document.getElementById('ranking-container')
  var nameUser = document.getElementById('nome-usuario')
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
    contain.style.display = 'block';
    startExibir.style.display = 'none';
    info.style.display = 'none';
    rank.style.display = 'none'
    nameUser.style.display = 'block'
    erro.innerHTML = "";
    info5.style.display = "none"
    info1.style.display = 'block'

    //Coleta um dos objetos no array
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
    showNotification("O jogo vai começar. Boa Sorte!!");
    setTimeout(hideNotification, 2000);
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

    for (var i = 0; i < userInput.length; i++) {
      var letra = userInput[i];

      if (randomString.includes(letra)) {
        for (var j = 0; j < randomString.length; j++) {
          if (randomString[j] === letra && wordDisplayed[j] !== letra) {
            wordDisplayed = wordDisplayed.substr(0, j) + letra + wordDisplayed.substr(j + 1);
            acertouLetra = true;
            blurLow++;
          }
        }
      } else {
        numeroErros++;
      }
    }


    erro.innerHTML = "Erros: " + numeroErros; // VER QUAL FICA MELHOR ASSIM OU MOSTRANDO O X

    if (numeroErros >= 10) {
      showNotification("Você perdeu! Prepare-se, o jogo será reiniciado");
      setTimeout(function() {
        hideNotification();
        reiniciarJogo();
      }, 10000); // Atraso de 2 segundos (2000 milissegundos)
      return;
    }
    

    show.innerHTML = wordDisplayed.toLocaleUpperCase();
    chat.value = "";

    if (acertouLetra) {
      blurLow--;
      diminuirBlur();
      acertouLetra = false;
    }

    if (wordDisplayed === randomString) {
      showNotification("Parabéns! Você acertou a palavra!");
      setTimeout(hideNotification, 3000);
      adicionarPontosUsuario(localStorage.getItem('nomeUsuario'), 1);
      tornarCompletamenteNitida();
      setTimeout(reiniciarJogo, 3000)
    }
  }

  function diminuirBlur() {
    var lettersCount = {};
    for (var i = 0; i < randomString.length; i++) {
      var letter = randomString[i];
      if (lettersCount[letter] === undefined) {
        lettersCount[letter] = 1;
      } else {
        lettersCount[letter]++;
      }
    }

    var maxBlur = 35;
    var totalLetters = Object.keys(lettersCount).length;

    var blurIncrement = Math.floor(maxBlur / totalLetters);
    var blurAmount = blurIncrement * Object.keys(lettersCount).filter(function (letter) {
      return wordDisplayed.includes(letter);
    }).length;

    var newBlur = maxBlur - blurAmount;
    imagem.style.filter = `blur(${newBlur}px)`;
  }

  function tornarCompletamenteNitida() {
    imagem.style.filter = "none";
  }

  exibirNomeUsuario();// Chame a função para exibir o nome de usuário quando a página for carregada

  function showNotification(message) {
    var notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';
  }

  function hideNotification() {
    var notification = document.getElementById('notification');
    notification.style.display = 'none';
  }
});