const divHora = document.getElementById('hora');
const divMinuto = document.getElementById('minuto');
const divSegundo = document.getElementById('segundo');

let horaAtual = null;
let minutoAtual = null;

const relogio = setInterval(function time() {
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
}, 1500);

function alterarValor(elemento, valor) {
  if (elemento.textContent !== padTo2Digits(valor)) {
    elemento.textContent = padTo2Digits(valor); // atualiza o valor somente se for diferente
    elemento.classList.add('flip');

    setTimeout(function() {
      elemento.classList.remove('flip');
    }, 900); // remove a classe flip após 0,9 segundos
  }
}

// Função para adicionar o 0 na frente da hora
function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function carregar() {
  let foto = document.getElementById('foto')
  if (hr >= 4 && hr < 10) {
    // Good Morning
    img.src = 'imagens/morning1.png'
    document.body.style.background = '#E1A77F'
  } else if ( hr >= 9 && hr <12 ) {
    img.src = 'imagens/morning2.png'
    document.body.style.background = '#94B3C5'

  } else if ( hr >= 12 && hr < 18) {
    // Good Afternoon
    img.src = 'imagens/afternoon1.png'
    document.body.style.background = '#D4784C'
  } else if ( hr >= 18 && hr < 19) {
    // Good Everning
    img.src = 'imagens/afternoon2.png'
    document.body.style.background = '#BC2F00'

  } else if ( hr >= 20 && hr < 21) {
    // Good everning
    img.src = 'imagens/everning2.png'
    document.body.style.background = '#8A5068'
  } else if (hr >= 21 && hr < 22) {
    img.src = 'imagens/everning.png'
    document.body.style.background = '#8A5068'

  } else if (hr >= 23 || hr <= 0) {
    img.src = 'imagens/night1.png'
    document.body.style.background = '#0A252F'
  } else {
    // Daybreak
    img.src = 'imagens/night2.png'
    document.body.style.background = '#071C1F'
  }
}