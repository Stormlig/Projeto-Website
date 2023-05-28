
  function exibirTexto() {
    const elementosTexto = Array.from(document.getElementById('textos-list').children)
    const indice = Math.floor(Math.random() * elementosTexto.length)
    const textoAleatorio = elementosTexto[indice].innerHTML
    const elementoTexto = document.getElementById('texto')
    elementoTexto.innerHTML = textoAleatorio
  }


  let msg = document.getElementById('msg')
  let gerar = document.getElementById('gerar')

  function esconder() {
    msg.style.display = 'none'
  }

  document.addEventListener('DOMContentLoaded', function exibirTexto(){
    const gerar = document.getElementById('gerar')
    gerar.addEventListener('click', esconder)
  })
