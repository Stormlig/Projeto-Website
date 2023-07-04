/*
  Relogio com a logica do movimento "flip"
  > No Lag <
*/

const divHora = document.getElementById('hora');
const divMinuto = document.getElementById('minuto');
const divSegundo = document.getElementById('segundo');

let horaAtual = null;
let minutoAtual = null;

function time() {
  let dateToday = new Date();
  let hr = dateToday.getHours();
  let min = dateToday.getMinutes();
  let s = dateToday.getSeconds();

  if (hr !== horaAtual) {
    alterarValor(divHora, hr);
    horaAtual = hr;
  }

  if (min !== minutoAtual) {
    alterarValor(divMinuto, min);
    minutoAtual = min;
  }

  alterarValor(divSegundo, s);

  requestAnimationFrame(time);
}

function atualizarHoraInicial() {
  let dateToday = new Date();
  let hr = dateToday.getHours();
  let min = dateToday.getMinutes();
  let s = dateToday.getSeconds();

  alterarValor(divHora, hr);
  alterarValor(divMinuto, min);
  alterarValor(divSegundo, s);

  horaAtual = hr;
  minutoAtual = min;
}

function alterarValor(elemento, valor) {
  if (elemento.textContent !== padTo2Digits(valor)) {
    elemento.textContent = padTo2Digits(valor);
    elemento.classList.add('flip');

    setTimeout(function() {
      elemento.classList.remove('flip');
    }, 400);
  }
}

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

atualizarHoraInicial(); // Exibe a hora correta no carregamento inicial
requestAnimationFrame(time); // Inicia o loop do relógio