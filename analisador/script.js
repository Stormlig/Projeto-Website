let receb = document.querySelector('input#receb')
let display = document.querySelector('select#display')
let tela = document.querySelector('div#tela')
let vetor = []

function oNumero(n) {
  if(Number(n) >= 1 && Number(n) <= 100) {
    return true
  } else {
    return false
  }
}

function inLista(n, l) {
// Se na lista . indexOf o Number(n) for diferente de -1 
  if(l.indexOf(Number(n)) != -1) {
    return true
  } else {
    return false
  }
}

function adicionar() {
  // só vai adicionar se for um numero e se ele não estiver na lista.
  if(oNumero(receb.value) && !inLista(receb.value, vetor)) {
    vetor.push(Number(receb.value))
    let item = document.createElement('option')
    item.text = `Valor ${receb.value} adicionado.`
    display.appendChild(item)
    tela.innerHTML = ''
  } else {
    window.alert('Valor inválido ou já encontrado na lista!')
  }
  receb.value = '' // limpa a caixa  sempre que for terminado a funcao
  receb.focus() // dá foco a uma caixa determinada.
}

function finalizar() {
  // Se o vetor estiver vazio
  if (vetor.length == 0) {
    window.alert('Adicione valores antes de finalizar!')
  } else {
    let total = vetor.length // efetuo a soma
    let soma = 0
    let media = 0
    let maior = vetor [0]
    let menor = vetor [0]

    // verificação dos numeros de dentro da variavel.
    for(let pos in vetor) {
      soma += vetor[pos]

      if(vetor[pos] > maior)
        maior = vetor[pos]
      if(vetor[pos] < menor)
        menor = vetor[pos]
    }
    media = soma / total

    let desvio = 0 // Inicializa a variável do desvio padrão

    // Calculo da soma das diferenças quadradas 
    for(let pos in vetor) {
      let diferenca = vetor[pos] - media
      desvio += diferenca ** 2

      // Exibição do cálculo das diferenças
      tela.innerHTML += `<p>Diferença ${pos}: ${vetor[pos]} - ${media} = ${diferenca}</p>`
      // Exibição do cálculo das diferenças quadradas
      tela.innerHTML += `<p>Diferença ao quadrado ${pos}: ${diferenca}^2 = ${diferenca ** 2}</p>`
    }

    // Divisão pelo número total de elementos
    desvio /= total;
    // Cálculo da raiz quadrada
    desvio = Math.sqrt(desvio);


    tela.innerHTML = ''
    tela.innerHTML += `<p>Ao todo, temos <strong>${total}</strong> números cadastrados. </p><br>`
    tela.innerHTML += `<p>O maior valor informado foi <strong>${maior}</strong>.</p><br>`
    tela.innerHTML += `<p>O menor valor informado foi <strong>${menor}</strong>.</p><br>`
    tela.innerHTML += `<p>Somando todos os valores, temos <strong>${soma}</strong></p><br>`
    tela.innerHTML += `<p>A média dos valores digitados é <strong>${media}</strong>.</p><br>`
    tela.innerHTML += `<p><strong>Desvio padrão</strong> = <sup>\u221A</sup><strong>${desvio}</strong></p>`
    tela.innerHTML += `<p>O desvio padrão dos valores digitados é <strong>${desvio}</strong>.</p>`
  }
}



/*
        Segunda opção: 

let vetor = []

function adicionar() {
let chatt = document.getElementById('chat').value
let tela = document.getElementById('exibirvalor')
let valor = chatt

if (chatt.length === 0) {
  window.alert('[ERRO] Adicione um valor!')
} else {
    let valorIndex = vetor.indexOf(valor)
    if (valorIndex !== -1) {
      window.alert('O valor digitado já foi adicionado anteriormente. Por favor digite outro numero.')
      } else if (valor < 1 || valor > 100) {
        window.alert('[ERRO] Adicione um valor entre 1 a 100!')
      } else {
        vetor.push(valor)
        let item = document.createElement('option')
        item.text = `Valor ${valor} adicionado.`
        tela.appendChild(item)
      }
  }
}

function finish() {
  vetor.push()
  let maxV = Math.max(...vetor)
  let smalleR = Math.min(...vetor)
  let sum = vetor.reduce((acumulador, valor) => acumulador + Number(valor), 0)  // Para efetuar a soma dos valores que estão dentro do vetor.

  // Essas 3 linhas abaixo foram feitas para colocar em ordem  os valores do vetor 
  // Classificar ser é par ou impar 
  // E efetuar o calculo para descobrir a mediana dos valores.
  const sorted = vetor.sort((a, b) => a - b)
  const meio = Math.floor(sorted.length / 2)
  const media = sorted.length % 2 === 1 ? sorted[meio] : (sorted[meio - 1] + sorted[meio]) / 2



  let display = document.getElementById('display')
  display.innerHTML = ''
  if (vetor.length <=1 ) {
    display.innerHTML = `Ao todo, temos ${vetor.length} numero cadastrado. <br>`
  } else {
    display.innerHTML += ` Ao todo, temos ${vetor.length} numeros cadastrados. <br>`
  }
  display.innerHTML += `O maior valor informado foi ${maxV}. <br>`
  display.innerHTML += `O menor valor informado foi ${smalleR}. <br>`
  display.innerHTML += `Somando todos os valores, temos ${sum}. <br>`
  display.innerHTML += `A média dos valores digitados é: ${media} <br>`
}

*/