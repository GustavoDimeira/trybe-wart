const submitLog = document.getElementById('entrar');
const login = document.getElementById('email');
const password = document.getElementById('password');

submitLog.addEventListener('click', () => {
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
