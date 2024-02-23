function cadastrar() {
  var usuario = document.getElementById('usuario').value;
  var senha = document.getElementById('senha').value;
  
  localStorage.setItem(usuario, senha);
  
  alert('Cadastro realizado com sucesso!');
}

function logar() {
  var usuario = document.getElementById('usuario').value;
  var senha = document.getElementById('senha').value;
  
  var senhaArmazenada = localStorage.getItem(usuario);
  
  if (senhaArmazenada === senha) {
    alert('Login realizado com sucesso!');
  } else {
    alert('Usuário ou senha incorretos!');
  }
}