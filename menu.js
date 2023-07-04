var projetosLink = document.getElementById('projetos-link');
var projetosConteudo = document.getElementById('projetos-conteudo');
var gamesLink = document.getElementById('games-link');
var gamesConteudo = document.getElementById('games-conteudo');

var projetosLinkDropdown = document.getElementById('projetos-link-dropdown');
var projetosConteudoDropdown = document.getElementById('projetos-conteudo-dropdown');
var gamesLinkDropdown = document.getElementById('games-link-dropdown');
var gamesConteudoDropdown = document.getElementById('games-conteudo-dropdown');

var projetosAberto = false; // reastrear se os projeto está visivel ou não
var gamesAberto = false;

var projetosAbertoDropdown = false;
var gamesAbertoDropdown = false;


projetosLink.addEventListener('click', function(event) {
  event.stopPropagation();
  
  projetosConteudo.style.opacity = projetosAberto ? 0 : 1;
  projetosConteudo.style.visibility = projetosAberto ? 'hidden' : 'visible';
  projetosAberto = !projetosAberto;
  
  if (gamesAberto) {
    gamesConteudo.style.opacity = 0;
    gamesConteudo.style.visibility = 'hidden';
    gamesAberto = false;
  }
});

gamesLink.addEventListener('click', function(event) {
  event.stopPropagation();

  gamesConteudo.style.opacity = gamesAberto ? 0 : 1;
  gamesConteudo.style.visibility = gamesAberto ? 'hidden' : 'visible';
  gamesAberto = !gamesAberto;
  
  if (projetosAberto) {
    projetosConteudo.style.opacity = 0;
    projetosConteudo.style.visibility = 'hidden';
    projetosAberto = false;
  }
});

document.addEventListener('click', function(event) {
  if (projetosAberto && !projetosLink.contains(event.target) && !projetosConteudo.contains(event.target)) {
    projetosConteudo.style.opacity = 0;
    projetosConteudo.style.visibility = 'hidden';
    projetosAberto = false;
  }

  if (gamesAberto && !gamesLink.contains(event.target) && !gamesConteudo.contains(event.target)) {
    gamesConteudo.style.opacity = 0;
    gamesConteudo.style.visibility = 'hidden';
    gamesAberto = false;
  }
});

// Dropdown
projetosLinkDropdown.addEventListener('click', function(event) {
  event.stopPropagation();
  
  projetosConteudoDropdown.style.opacity = projetosAbertoDropdown ? 0 : 1;
  projetosConteudoDropdown.style.visibility = projetosAbertoDropdown ? 'hidden' : 'visible';
  projetosConteudoDropdown.style.display = projetosAbertoDropdown ? 'none' : 'block';
  projetosAbertoDropdown = !projetosAbertoDropdown;
  
  if (gamesAbertoDropdown) {
    gamesConteudoDropdown.style.opacity = 0;
    gamesConteudoDropdown.style.visibility = 'hidden';
    gamesConteudoDropdown.style.display = 'none';
    gamesAbertoDropdown = false;
  }
});

gamesLinkDropdown.addEventListener('click', function(event) {
  event.stopPropagation();

  gamesConteudoDropdown.style.opacity = gamesAbertoDropdown ? 0 : 1;
  gamesConteudoDropdown.style.visibility = gamesAbertoDropdown ? 'hidden' : 'visible';
  gamesConteudoDropdown.style.display = gamesAbertoDropdown ? 'none' : 'block';
  gamesAbertoDropdown = !gamesAbertoDropdown;
  
  if (projetosAbertoDropdown) {
    projetosConteudoDropdown.style.opacity = 0;
    projetosConteudoDropdown.style.visibility = 'hidden';
    projetosConteudoDropdown.style.display = 'none';
    projetosAbertoDropdown = false;
  }
});

document.addEventListener('click', function(event) {
  if (projetosAbertoDropdown && !projetosLinkDropdown.contains(event.target) && !projetosConteudoDropdown.contains(event.target)) {
    projetosConteudoDropdown.style.opacity = 0;
    projetosConteudoDropdown.style.visibility = 'hidden';
    projetosConteudoDropdown.style.display = 'none';
    projetosAbertoDropdown = false;
  }

  if (gamesAbertoDropdown && !gamesLinkDropdown.contains(event.target) && !gamesConteudoDropdown.contains(event.target)) {
    gamesConteudoDropdown.style.opacity = 0;
    gamesConteudoDropdown.style.visibility = 'hidden';
    gamesConteudoDropdown.style.display = 'none';
    gamesAbertoDropdown = false;
  }
});


// MENU-DROPDOWN //

var toggleBtn = document.querySelector('.toggle_btn')
var toggleBtnIcon = document.querySelector('.toggle_btn i')
var dropDownMenu = document.querySelector('.dropdown_menu')


toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle('open')
  var isOpen = dropDownMenu.classList.contains('open')

  toggleBtnIcon.classList = isOpen
  ? 'fa-solid fa-xmark'
  : 'fa-solid fa-bars'
}