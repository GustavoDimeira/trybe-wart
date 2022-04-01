const submitLog = document.getElementById('entrar');
const login = document.getElementById('email');
const password = document.getElementById('password');
const enviar = document.getElementById('submit-btn');
const area = document.getElementById('textarea');
const counter = document.getElementById('counter');
//21
const form = document.getElementById('evaluation-form');

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

//21
function addP(event) {
  event.preventDefault()
  //nome
  const fullName = document.getElementById('input-name').value + ' ' + document.getElementById('input-lastname').value
  const pFullName = document.createElement('p');
  pFullName.innerText = 'Nome: ' + fullName;
  //email
  const email = document.getElementById('input-email').value + ''
  const pEmail = document.createElement('p');
  pEmail.innerText = 'Email: ' + email;
  //casa
  const select = document.getElementById('house');
  const house = select.options[select.selectedIndex].text;
  const pHouse = document.createElement('p');
  pHouse.innerText = 'Casa: ' + house;
  //familia
  const pFamily = document.createElement('p');
  if (document.getElementById('frontend').checked) {
    pFamily.innerText = 'Família: Frontend'
  } else if (document.getElementById('backend').checked) {
    pFamily.innerText = 'Família: Backend'
  } else if (document.getElementById('fullStack').checked) {
    pFamily.innerText = 'Família: FullStack'
  } else {
    pFamily.innerText = 'Família: ';
  }
  //matérias incompleto
  let pSubject = document.createElement('p');
  pSubject.innerText = "Matérias: "
  if (document.getElementsByClassName('subject')[0].checked) {
    pSubject.innerText += "HoFs";
  };
  if (document.getElementsByClassName('subject')[1].checked && pSubject.innerText.length > 10) {
    pSubject.innerText += ", Jest";
  } else if(document.getElementsByClassName('subject')[1].checked && pSubject.innerText.length == 10){
    pSubject.innerText += "Jest";
  };
  if (document.getElementsByClassName('subject')[2].checked && pSubject.innerText.length > 10) {
    pSubject.innerText += ", Promises";
  } else if(document.getElementsByClassName('subject')[2].checked && pSubject.innerText.length == 10){
    pSubject.innerText += "Promises";
  };
  if (document.getElementsByClassName('subject')[3].checked && pSubject.innerText.length > 10) {
    pSubject.innerText += ", React";
  } else if(document.getElementsByClassName('subject')[3].checked && pSubject.innerText.length == 10){
    pSubject.innerText += "React";
  };
  if (document.getElementsByClassName('subject')[4].checked && pSubject.innerText.length > 10) {
    pSubject.innerText += ", SQL";
  } else if(document.getElementsByClassName('subject')[4].checked && pSubject.innerText.length == 10){
    pSubject.innerText += "SQL";
  };
  if (document.getElementsByClassName('subject')[5].checked && pSubject.innerText.length > 10) {
    pSubject.innerText += ", Python";
  } else if(document.getElementsByClassName('subject')[5].checked && pSubject.innerText.length == 10){
    pSubject.innerText += "Python";
  };
  //avaliação
  const pAvaliation = document.createElement('p');
  if (document.getElementById('valor1').checked) {
    pAvaliation.innerText = 'Avaliação: 1'
  } else if (document.getElementById('valor2').checked) {
    pAvaliation.innerText = 'Avaliação: 2'
  } else if (document.getElementById('valor3').checked) {
    pAvaliation.innerText = 'Avaliação: 3'
  } else if (document.getElementById('valor4').checked) {
    pAvaliation.innerText = 'Avaliação: 4'
  } else if (document.getElementById('valor5').checked) {
    pAvaliation.innerText = 'Avaliação: 5'
  } else if (document.getElementById('valor6').checked) {
    pAvaliation.innerText = 'Avaliação: 6'
  } else if (document.getElementById('valor7').checked) {
    pAvaliation.innerText = 'Avaliação: 7'
  } else if (document.getElementById('valor8').checked) {
    pAvaliation.innerText = 'Avaliação: 8'
  } else if (document.getElementById('valor9').checked) {
    pAvaliation.innerText = 'Avaliação: 9'
  } else if (document.getElementById('valor10').checked) {
    pAvaliation.innerText = 'Avaliação: 10'
  } else {
    pAvaliation.innerText = 'Avaliação: '
  }
  //observações
  const observation = document.getElementById('textarea').value;
  const pObservation = document.createElement('p');
  pObservation.innerText = 'Observações: ' + observation;

  form.innerHTML = '';
  form.appendChild(pFullName);
  form.appendChild(pEmail);
  form.appendChild(pHouse);
  form.appendChild(pFamily);
  form.appendChild(pSubject);
  form.appendChild(pAvaliation);
  form.appendChild(pObservation);
  console.log(pAvaliation);
}
enviar.addEventListener('click', addP);
