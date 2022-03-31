const submitLog = document.getElementById('entrar');
const login = document.getElementById('email');
const password = document.getElementById('password');
const enviar = document.getElementById('submit-btn');
const area = document.getElementById('textarea');
const counter = document.getElementById('counter');

submitLog.addEventListener('click', () => {
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

document.getElementById('agreement').addEventListener('click', () => {
  if (enviar.disabled === false) {
    enviar.disabled = true;
  } else {
    enviar.disabled = false;
  }
});

area.addEventListener('keyup', () => {
  counter.innerText = 500 - area.value.length;
});
