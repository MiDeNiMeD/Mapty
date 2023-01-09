'strict mode';

const body = document.querySelector('.body');
const span = document.querySelector('.textbox-span');
const iptPass = document.querySelector('.ipt-pass');
const iptName = document.querySelector('.ipt-name');
const spanLock = document.querySelector('.lock');
const login = document.querySelector('.login-btn');
const loginBox = document.querySelector('.login');

const modal = document.querySelector('.modalF');
const avatar = document.querySelector('.avatar-img');
const welcome = document.querySelector('.welcome');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelector('.show-modal');


let user;
let userNameO;
let src;
let number=Math.trunc(Math.random() * 6) + 1
avatar.src = `/img/avatar${number}.png`;
document.querySelector('.userName').addEventListener('change',()=>{

  if(document.querySelector('.userName').value=='medmideni')
  {
  userNameO = 'medmideni';
  avatar.src = `/img/avatar-med.jpg`;
  welcome.textContent="Welcome back Mideni"
  }
  if(document.querySelector('.userName').value=='yassinemiled')
  {
  userNameO = 'yassinemiled';
  avatar.src = `/img/avatar-yassine.jpg`;
  welcome.textContent="Welcome back Yassine"
  }

})
let passWordO = 'azerty';

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  const data = {
    to: 'mohamedamine.midani200@gmail.com',
    from: 'mohamedamine.midani200@gmail.com',
    subject: 'Login Alert',
    text: '🖐 hi Mideni 🖐 some one 👨‍💻 👩‍💻have the access and logged into your website 🖥️ .'
  };

  fetch('https://api.sendgrid.com/v3/mail/send', {

    method: 'POST',
    headers: {
      Authorization: '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',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(response => {
    console.log(response);
  }).catch(error => {
    console.error(error);
  });
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnOpenModal.addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const setErrorUserName = () => {
  document.querySelector('.userName').style.color = '#cc0033';
  document.querySelector('.userName').style.border = '2px solid #cc0033';
  document.querySelector('.account_circle').style.color = '#cc0033';
};

const setErrorPassWord = () => {
  document.querySelector('.passWord').style.color = '#cc0033';
  document.querySelector('.passWord').style.border = '2px solid #cc0033';
  document.querySelector('.lock').style.color = '#cc0033';
};

const reset = () => {
  document.querySelector('.passWord').style.border = '2px solid #152a54';
  document.querySelector('.passWord').style.color = 'inherit';
  document.querySelector('.lock').style.color = '#152a54';
  document.querySelector('.userName').style.border = '2px solid #152a54';
  document.querySelector('.userName').style.color = 'inherit';
  document.querySelector('.account_circle').style.color = '#152a54';
};

document.querySelector('.userName').addEventListener('click', function (event) {
  reset();
});

document.querySelector('.passWord').addEventListener('click', function (event) {
  reset();
});

login.addEventListener('click', function (event) {
  event.preventDefault();


  if (
    document.querySelector('.userName').value != userNameO &&
    document.querySelector('.passWord').value != passWordO
  ) {
    setErrorUserName();
    setErrorPassWord();
  } else if (
    document.querySelector('.userName').value == userNameO &&
    document.querySelector('.passWord').value != passWordO
  ) {
    setErrorPassWord();
  } else if (
    document.querySelector('.userName').value != userNameO &&
    document.querySelector('.passWord').value == passWordO
  ) {
    setErrorUserName();
  } else {
    window.location.href = 'Home.html';
  }
});

////////////////////////////////
// document.body.style = 'background-color: var(--bs-dark);transition: 0.5s;';
const sun =
  'https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg';
const moon =
  'https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg';

var theme = 'dark';
const root = document.querySelector(':root');
const container = document.getElementsByClassName('theme-container')[0];
const themeIcon = document.getElementById('theme-icon');
container.addEventListener('click', setTheme);
function setTheme() {
  switch (theme) {
    case 'dark':
      setLight();
      theme = 'light';
      break;
    case 'light':
      setDark();
      theme = 'dark';
      break;
  }
}

function setLight() {
  root.style.setProperty(
    '--bs-dark',
    'linear-gradient(318.32deg, #c3d1e4 0%, #dde7f3 55%, #d4e0ed 100%)'
  );

  body.style.setProperty('background-image', `url('../bgLight.svg')`);
  login.style.setProperty('background', '#58C5FF');
  loginBox.style.setProperty('background', '#43AAE1');
  loginBox.style.setProperty('color', '#161616');
  login.style.setProperty('color', '#152a54');
  iptPass.style.setProperty('border', '2px solid #152a54');
  iptName.style.setProperty('border', '2px solid #152a54');
  span.style.setProperty('color', '#161616');
  spanLock.style.setProperty('color', '#161616');

  container.classList.remove('shadow-dark');
  setTimeout(() => {
    container.classList.add('shadow-light');
    themeIcon.classList.remove('change');
  }, 300);
  themeIcon.classList.add('change');
  themeIcon.src = sun;
}
function setDark() {
  root.style.setProperty('--bs-dark', '#212529');

  body.style.setProperty('background-image', `url('../bgDark.svg')`);
  login.style.setProperty('background', '#152a54');
  loginBox.style.setProperty('background', '#000013');
  loginBox.style.setProperty('color', '#f9f9f9');

  login.style.setProperty('color', '#f9f9f9');

  iptPass.style.setProperty('border', '2px solid rgba(255, 255, 255, 0.1)');
  iptName.style.setProperty('border', '2px solid rgba(255, 255, 255, 0.1)');
  span.style.setProperty('color', 'rgba(255, 255, 255, 0.38)');
  spanLock.style.setProperty('color', 'rgba(255, 255, 255, 0.38)');

  container.classList.remove('shadow-light');
  setTimeout(() => {
    container.classList.add('shadow-dark');
    themeIcon.classList.remove('change');
  }, 300);
  themeIcon.classList.add('change');
  themeIcon.src = moon;
}
