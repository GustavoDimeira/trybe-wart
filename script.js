const submitLog = document.getElementById('entrar');
const login = document.getElementById('email');
const password = document.getElementById('password');
const enviar = document.getElementById('submit-btn');
const area = document.getElementById('textarea');
const counter = document.getElementById('counter');
const nomeValor = document.getElementById('input-name');
const sobrenomeValor = document.getElementById('input-lastname');
const emailValor = document.getElementById('input-email');
const select = document.getElementById('house');
const frontEnd = document.getElementById('frontend');
const backEnd = document.getElementById('backend');
const fullStack = document.getElementById('fullStack');
const subject1 = document.getElementsByClassName('subject')[0];
const subject2 = document.getElementsByClassName('subject')[1];
const subject3 = document.getElementsByClassName('subject')[2];
const subject4 = document.getElementsByClassName('subject')[3];
const subject5 = document.getElementsByClassName('subject')[4];
const subject6 = document.getElementsByClassName('subject')[5];
const subjects = [subject1, subject2, subject3, subject4, subject5, subject6];
const valor1 = document.getElementById('valor1');
const valor2 = document.getElementById('valor2');
const valor3 = document.getElementById('valor3');
const valor4 = document.getElementById('valor4');
const valor5 = document.getElementById('valor5');
const valor6 = document.getElementById('valor6');
const valor7 = document.getElementById('valor7');
const valor8 = document.getElementById('valor8');
const valor9 = document.getElementById('valor9');
const valor10 = document.getElementById('valor10');
const valores = [valor1, valor2, valor3, valor4, valor5, valor6, valor7, valor8, valor9, valor10];
const observation = document.getElementById('textarea');

// 21
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

// 21
// nome
function insertNome() {
  const fullName = `${nomeValor.value} ${sobrenomeValor.value}`;
  const pFullName = document.createElement('p');
  pFullName.innerText = `Nome: ${fullName}`;
  form.appendChild(pFullName);
}
// email
function insertEmail() {
  const pEmail = document.createElement('p');
  pEmail.innerText = `Email: ${emailValor.value}`;
  form.appendChild(pEmail);
}
// casa
function insertCasa() {
  const house = select.options[select.selectedIndex].text;
  const pHouse = document.createElement('p');
  pHouse.innerText = `Casa: ${house}`;
  form.appendChild(pHouse);
}
// familia
function insertFamily() {
  const pFamily = document.createElement('p');
  if (frontEnd.checked) {
    pFamily.innerText = 'Família: Frontend';
  } else if (backEnd.checked) {
    pFamily.innerText = 'Família: Backend';
  } else if (fullStack.checked) {
    pFamily.innerText = 'Família: FullStack';
  } else {
    pFamily.innerText = 'Família: ';
  }
  form.appendChild(pFamily);
}
// matérias
function insertSubjects() {
  const pSubject = document.createElement('p');
  pSubject.innerText = 'Matérias: ';

  for (let i = 0; i < subjects.length; i += 1) {
    if (subjects[i].checked) {
      pSubject.innerText += `${subjects[i].value}, `;
    }
  }
  form.appendChild(pSubject);
}
// avaliação
function insertAvaliation() {
  const pAvaliation = document.createElement('p');
  for (let i = 0; i < valores.length; i += 1) {
    if (valores[i].checked) {
      pAvaliation.innerText = `Avaliação: ${i + 1}`;
    }
  }
  form.appendChild(pAvaliation);
}
// observações
function insertObservation() {
  const pObservation = document.createElement('p');
  pObservation.innerText = `Observações: ${observation.value}`;
  form.appendChild(pObservation);
}

enviar.addEventListener('click', (event) => {
  event.preventDefault();
  form.innerHTML = '';

  insertNome();
  insertEmail();
  insertCasa();
  insertFamily();
  insertSubjects();
  insertAvaliation();
  insertObservation();
});
