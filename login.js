

var usuarios = [];

// Função para obter os usuários armazenados no armazenamento local
function getUsuariosFromLocalStorage() {
  var usuariosString = localStorage.getItem('usuarios');
  if (usuariosString) {
    usuarios = JSON.parse(usuariosString);
  }
}

// Função para salvar os usuários no armazenamento local
function saveUsuariosToLocalStorage() {
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

// Função para criar uma nova conta
function criarConta() {
  var login = document.getElementById('criar-login').value;
  var senha = document.getElementById('criar-senha').value;

  // Verifica se o ID já existe
  var usuarioExistente = usuarios.find(function(usuario) {
    return usuario.login === login;
  });

  if (usuarioExistente) {
    showNotification('ID já existe. Por favor, escolha outro ID.');
    setTimeout(hideNotification, 2500);
  } else {
    usuarios.push({ login: login, senha: senha, pontos: 0 });
    saveUsuariosToLocalStorage(); // Salva os usuários no armazenamento local
    showNotification('Conta criada com sucesso!');
    setTimeout(hideNotification, 2500);
  }

  // Limpa os campos de input após a criação da conta
  document.getElementById('criar-login').value = '';
  document.getElementById('criar-senha').value = '';
}

// Função para realizar o login
function fazerLogin() {
  var login = document.getElementById('login-login').value;
  var senha = document.getElementById('login-senha').value;

  // Verifica se a conta já está cadastrada
  var usuarioExistente = usuarios.find(function(usuario) {
    return usuario.login === login && usuario.senha === senha;
  });

  if (!usuarioExistente) {
    showNotification('Você não tem uma conta. Por favor, crie uma conta.');
    setTimeout(hideNotification, 2500);
  } else if (usuarioExistente.senha !== senha) {
    showNotification('Senha incorreta. Por favor, tente novamente com a senha correta.');
    setTimeout(hideNotification, 2500);
  } else {
    showNotification('Login feito com sucesso!');
    setTimeout(hideNotification, 2000);
    localStorage.setItem('autenticado', 'true');
    localStorage.setItem('nomeUsuario', login); // Armazena o nome de usuário

    var pontosUsuario = getPontosUsuario(login); // Obter os pontos do usuário
    localStorage.setItem('pontosUsuario', pontosUsuario); // Armazena os pontos do usuário

    window.location.href = 'game.html'; // Redirecionar para a próxima página após o login
  }

  // Limpa os campos de input após o login
  document.getElementById('login-login').value = '';
  document.getElementById('login-senha').value = '';
}

// Função para obter os pontos de um usuário
function getPontosUsuario(login) {
  var usuario = usuarios.find(function(usuario) {
    return usuario.login === login;
  });

  return usuario ? usuario.pontos : 0;
}

// Função para adicionar pontos a um usuário
function adicionarPontosUsuario(login, quantidade) {
  var usuario = usuarios.find(function(usuario) {
    return usuario.login === login;
  });

  if (usuario) {
    usuario.pontos += quantidade;
    saveUsuariosToLocalStorage();
  }
}

// Obtém os usuários armazenados ao carregar a página
getUsuariosFromLocalStorage();

function showNotification(message) {
  var notification = document.getElementById('notification');
  notification.textContent = message;
  notification.style.display = 'block';
}

function hideNotification() {
  var notification = document.getElementById('notification');
  notification.style.display = 'none';
}