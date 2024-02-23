let text = document.getElementById('text')
let leaf = document.getElementById('leaf')
let hill1 = document.getElementById('hill1')
let hill4 = document.getElementById('hill2')
let hill5 = document.getElementById('hill5')
let hill3 = document.getElementById('hill3')
window.addEventListener('scroll', () => {
  let value = window.scrollY;

  text.style.marginTop = value * 2.5 + 'px';
  leaf.style.top = value * -1.5 + 'px';
  leaf.style.left = value * 1.5 + 'px';
  hill5.style.left = value * 1.5 + 'px';
  hill4.style.left = value * -1.5 + 'px';
  hill3.style.right = value * 1 + 'px';
  hill1.style.top = value * 1 + 'px';
});


//Dropdown_menu

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