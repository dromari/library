const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');

const modalRegister = document.querySelector('.modal-register');
const closeRegister = document.querySelector('.close-register');
const modalLogin = document.querySelector('.modal-login');
const closeLogin = document.querySelector('.close-login');
const modalProfile = document.querySelector('.profile');
const closeProfile = document.querySelector('.close-profile');
const modalLibrary = document.querySelector('.modal-library');
const closeLibrary = document.querySelector('.close-library');

const registerButton = document.querySelector('#register-btn');
const iconImg = document.querySelector('.icon-img');
const imgIconImg = document.querySelector('.img-icon-img');
const textMyProfile = document.querySelector('.text-my-profile');
const dropMenuContent = document.querySelector('.drop-menu-content');
const noAuth = document.querySelector('.no-auth');
const withAuth = document.querySelector('.with-auth');
const textRegister = document.querySelector('.p-reg-log');
const shortName = document.querySelector('.short-name');
const fullName = document.querySelector('.full-name');
const visitsCount = document.querySelector('.count-visits');
const bonusesCount = document.querySelector('.count-bonuses');
const booksCount = document.querySelector('.count-books');
const rentedList = document.querySelector('.rented-list');
const cardNumber = document.querySelector('.card-number-p');
const textLogIn = document.querySelector('.log-in');
const textLogOut = document.querySelector('.log-out');
const numberProfileCard = document.querySelector('.number-profile-card');
const readersName = document.querySelector('#readers-name');
const cardNumberInput = document.querySelector('#card-number');
const buttonCheckLibraryCard = document.querySelector('.button-check');
const statisticCard = document.querySelector('.statistic-card');
const statisticCountVisits = document.querySelector('.statistic-count-visits');
const statisticCountBonuses = document.querySelector('.statistic-count-bonuses');
const statisticCountBooks = document.querySelector('.statistic-count-books');

const inputContent = document.querySelector('.input-content');
const buttonSignInLibraryCard = document.querySelector('.button-sign-in');
const buttonLogInLibraryCard = document.querySelector('.button-log-in');
const loginHref = document.querySelector('.login-href');
const registerHref = document.querySelector('.register-href');

const loginButton = document.querySelector('#login-btn');
const emailLogin = document.querySelector('#email2');
const passwordLogin = document.querySelector('#password2');


closeRegister.addEventListener('click', () => {
    modalRegister.style.display = 'none';
})

closeLogin.addEventListener('click', () => {
    modalLogin.style.display = 'none';
})

closeProfile.addEventListener('click', () => {
    modalProfile.style.display = 'none';
})

closeLibrary.addEventListener('click', () => {
    modalLibrary.style.display = 'none';
})

buttonSignInLibraryCard.addEventListener('click', () => {
    modalRegister.style.display = 'flex';
})

buttonLogInLibraryCard.addEventListener('click', () => {
    modalLogin.style.display = 'flex';
})

textLogIn.addEventListener('click', () => {
    dropMenuContent.classList.remove('active')
    noAuth.classList.remove('active');
    modalLogin.style.display = 'flex';
})

textLogOut.addEventListener('click', () => {
    sessionStorage.clear();
    location.reload();
})

textRegister.addEventListener('click', () => {
    modalRegister.style.display = 'flex';
    dropMenuContent.classList.remove('active')
    noAuth.classList.remove('active');
})

textMyProfile.addEventListener('click', () => {
    modalProfile.style.display = 'flex';
    dropMenuContent.classList.remove('active')
    withAuth.classList.remove('active');
})

loginHref.addEventListener('click', () => {
    modalRegister.style.display = 'none';
    modalLogin.style.display = 'flex';
})

registerHref.addEventListener('click', () => {
    modalLogin.style.display = 'none';
    modalRegister.style.display = 'flex';
})

const generateCardNumber = () => {
    const min = 0x100000000;
    const max = 0x1FFFFFFFF;
    const cardNumber = Math.floor(Math.random() * (max - min) + min);
    return cardNumber.toString(16).toUpperCase();
}

function User(firstName, lastName, email, password, cardNumber, visits, bonuses, books) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.cardNumber = cardNumber;
    this.visits = visits;
    this.bonuses = bonuses;
    this.books = books;
    this.initials = function () {
        return firstName.slice(0, 1).toUpperCase() + lastName.slice(0, 1).toUpperCase();
    }
}

iconImg.addEventListener('click', () => {
    dropMenuContent.classList.toggle('active')
    noAuth.classList.toggle('active');
})

imgIconImg.addEventListener('click', () => {
    dropMenuContent.classList.toggle('active')
    withAuth.classList.toggle('active');
})

registerButton.addEventListener('click', () => {
    let firstNameV = firstName.value;
    let lastNameV = lastName.value;
    let emailV = email.value;
    let passwordV = password.value;
    let cardNumber = generateCardNumber();
    let visits = 1;
    let bonuses = 0;
    let books = [];
    let user = new User(firstNameV, lastNameV, emailV, passwordV, cardNumber, visits, bonuses, books);
    localStorage.setItem(emailV, JSON.stringify(user));
    sessionStorage.setItem('currentUser', JSON.stringify(user));
    modalRegister.style.display = 'none';
    updatePage();
})

function isLoggedUser() {
    return sessionStorage.getItem('currentUser') !== null;
}

function getLoggedUser() {
    let json = sessionStorage.getItem('currentUser');
    let jsonParse = JSON.parse(json);
    return new User(jsonParse.firstName, jsonParse.lastName, jsonParse.email, jsonParse.password, jsonParse.cardNumber, jsonParse.visits, jsonParse.bonuses, jsonParse.books);
}

const titleGetInfo = document.querySelector('.title-get-info');
const textGetInfo = document.querySelector('.text-get-info');
const profilebutton = document.querySelector('.button-profile');

function updatePage() {
    if (isLoggedUser()) {
        let user = getLoggedUser();
        dropMenuContent.classList.remove('active')
        noAuth.classList.remove('active');
        getInitials(user);
        generateCardNumber();
        numberProfileCard.innerHTML = user.cardNumber;
        cardNumber.innerHTML = user.cardNumber;
        shortName.innerHTML = user.initials();
        fullName.innerHTML = user.firstName + ' ' + user.lastName;
        visitsCount.innerHTML = user.visits;
        bonusesCount.innerHTML = user.bonuses;
        booksCount.innerHTML = user.books.length;
        buttonCheckLibraryCard.style.display = 'none';
        inputContent.style.height = '430px';
        readersName.value = user.firstName + ' ' + user.lastName;
        cardNumberInput.value = user.cardNumber;
        statisticCard.style.display = 'flex';
        statisticCountVisits.innerHTML = user.visits;
        statisticCountBonuses.innerHTML = user.bonuses;
        statisticCountBooks.innerHTML = user.books.length;
        titleGetInfo.innerHTML = 'Visit your profile';
        textGetInfo.innerHTML = 'With a digital library card you get free access to the Library’s wide array of digital resources including e-books, databases, educational resources, and more.';
        buttonSignInLibraryCard.style.display = 'none';
        buttonLogInLibraryCard.style.display = 'none';
        profilebutton.style.display = 'flex';
    }
}

function getInitials(user) {
    iconImg.style.display = 'none';
    imgIconImg.style.display = 'flex';
    imgIconImg.innerHTML = user.initials();
}
























