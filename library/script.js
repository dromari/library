/*Register*/

/*--drop-menu--*/

const iconIcon = document.querySelector('.icon');
const dropMenuContent = document.querySelector('.drop-menu-content');
const noAuth = document.querySelector('.no-auth');
const withAuth = document.querySelector('.with-auth');

const toggleDropMenu = () => {
  iconIcon.classList.toggle('active');
  dropMenuContent.classList.toggle('active');
  noAuth.classList.toggle('active');
}

iconIcon.addEventListener('click', e => {
  toggleDropMenu();
});



/*My profile*/

/*copy-number-card

const copyCardNumber = document.querySelector('.copy-number-card');

copyCardNumber.addEventListener('click', function (event) {
  const cardNumber = document.querySelector('.card-number-p');
  const range = document.createRange();
  range.selectNode(cardNumber);
  window.getSelection().addRange(range);

  try {

    const successful = document.execCommand('copy');
    const msg = successful ? 'successful' : 'unsuccessful';
    console.log('Сard number copied ' + msg);
  } catch (err) {
    console.log('Error');
  }

  window.getSelection().removeAllRanges();
});

/*---USER---*/

function User(firstName, lastName, email, password) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.password = password;
  this.inicials = function () {
    return this.firstName.slice(0, 1).toUpperCase() +
      this.lastName.slice(0, 1).toUpperCase();
  }
}



/*---REGISTRATION---*/

const modalLogin = document.querySelector('.modal-login');
const modalRegister = document.querySelector('.modal-register');
const buttonSignup = document.querySelector('.signup-btn');
const registerHref = document.querySelector('.register-href');
const loginHref = document.querySelector('.login-href');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerHref.addEventListener('click', () => {
  modalLogin.style.display = 'none';
  modalRegister.style.display = 'flex';
})

loginHref.addEventListener('click', () => {
  modalLogin.style.display = 'none';
})

registerBtn.addEventListener('click', () => {
  modalRegister.style.display = 'none';
})

modalRegister.addEventListener('submit', (event) => {
  event.preventDefault();
  registr();
});

function registr() {
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const user = new User(firstName, lastName, email, password);

  localStorage.setItem(email, JSON.stringify(user));
  sessionStorage.setItem('activeUser', JSON.stringify(user));
}

/*---обновляет страницу---*/

function updatePage() {
  updateIcon();
  updateProfile();
}

function updateIcon() {

}

function updateProfile() {

}

function isUserLogged() {

}



modalLogin.addEventListener('submit', (event) => {
  event.preventDefault();
  log();
});

function log() {
  const noAuth = document.querySelector('.no-auth');
  const withAuth = document.querySelector('.with-auth');
  const email2 = document.getElementById('email2').value;
  const password2 = document.getElementById('password2').value;
  const keyLocalStorage = `${email}`;
  const password = document.getElementById('password').value;

  sessionStorage.setItem(keyLocalStorage, JSON.stringify(user));

  if (sessionStorage.getItem(keyLocalStorage) != null ||
    keyLocalStorage === email2 || password === password2) {

    noAuth.style.display = 'none';
    withAuth.style.display = 'flex';

  }

}

/*---LOGIN---*/

const buttonBuyBook = document.querySelector('.button-buy-book');

buttonBuyBook.addEventListener('click', () => {
  modalLogin.style.display = 'flex';
})


/*const iconImg = document.querySelector('.icon-img');
const iconImgAuth = document.querySelector('.icon-img-auth');
const profileTitle = document.getElementById('profile-title');
const inputFormTitle = document.getElementById('input-form-title');
const readersName = document.getElementById('readers-name');
const cardNumber = document.getElementById('card-number');
const buttonCheck = document.querySelector('.button-check');
const statisticCard = document.querySelector('.statistic-card');
const titleGetInfo = document.querySelector('.title-get-info');
const textGetInfo = document.querySelector('.text-get-info');
const twoButtonGet = document.querySelector('.two-button-get');
const shortName = document.querySelector('.short-name');
const fullName = document.querySelector('.full-name');
const cardNumberP = document.querySelector('.card-number-p');
const rentedList = document.querySelector('.rented-list');
const nameBook = document.querySelector('.name-book');*/







