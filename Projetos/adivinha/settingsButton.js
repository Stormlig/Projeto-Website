const display = document.getElementById('receivetxt')
const buttonEnter = document.getElementById('send')

document.addEventListener('keydown', function() {
  display.focus()
  if (event.key === 'Enter' && event.target.value.trim() !== '') {
    buttonEnter.click();
  }
});


