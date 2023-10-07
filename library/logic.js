const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const modalRegister = document.querySelector('.modal-register');
const buttonRegister = document.querySelector('#register-btn');
const iconImg = document.querySelector('.icon-img');
const imgIconImg = document.querySelector('.img-icon-img');
const textMyProfile = document.querySelector('.text-my-profile');
const modalProfile = document.querySelector('.profile');
const dropMenuContent = document.querySelector('.drop-menu-content');
const noAuth = document.querySelector('.no-auth');
const withAuth = document.querySelector('.with-auth');
const textRegister = document.querySelector('.p-reg-log');
const closeModal = document.querySelector('.close');
const closeProfile = document.querySelector('.close-profile');
const modal = document.querySelector('.modal');
const shortName = document.querySelector('.short-name');
const fullName = document.querySelector('.full-name');
const visitsCount = document.querySelector('.count-visits');
const bonusesCount = document.querySelector('.count-bonuses');
const booksCount = document.querySelector('.count-books');
const rentedList = document.querySelector('.rented-list');
const cardNumber = document.querySelector('.card-number-p');
const textLogOut = document.querySelector('.log-out');
const numberProfileCard = document.querySelector('.number-profile-card');

/*closeModal.addEventListener('click', () => {
    /*создать массив из элементов modal*/
/*let arr = [modal];
arr.map.style.display = 'none';
})*/

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
})

textLogOut.addEventListener('click', () => {
    sessionStorage.clear();
    location.reload();
})


function isUserLogged() {
    return sessionStorage.getItem('currentUser') !== null;
}

iconImg.addEventListener('click', () => {
    if (!isUserLogged()) {
        dropMenuContent.classList.toggle('active')
        noAuth.classList.toggle('active');
    }
    else {
        dropMenuContent.classList.toggle('active');
        withAuth.classList.toggle('active');
    }
})

imgIconImg.addEventListener('click', () => {
    if (isUserLogged()) {
        dropMenuContent.classList.toggle('active')
        withAuth.classList.toggle('active');
    }
})

/*---функция Юзер через конструктор*/
function User(firstName, lastName, email, password, visits, bonuses, books, cardNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.visits = visits;
    this.bonuses = bonuses;
    this.books = books;
    this.cardNumber = cardNumber;
    this.initials = function () {
        return this.firstName.slice(0, 1).toUpperCase() + this.lastName.slice(0, 1).toUpperCase();
    }
}
/*функция Юзер через конструктор---*/

textRegister.addEventListener('click', () => {
    modalRegister.style.display = 'flex';
    dropMenuContent.classList.remove('active')
    noAuth.classList.remove('active');
})

buttonRegister.addEventListener('click', () => {
    let firstNameValue = firstName.value;
    let lastNameValue = lastName.value;
    let emailValue = email.value;
    let passwordValue = password.value;
    let visits = 1;
    let bonuses = 0;
    let books = [];
    let cardNumber = generateCardNumber();
    let user = new User(firstNameValue, lastNameValue, emailValue, passwordValue, visits, bonuses, books, cardNumber);
    if (firstNameValue == '' || lastNameValue == '' || emailValue == '' || passwordValue == '') {
        modalRegister.style.display = 'flex';
    }
    else {
        localStorage.setItem(emailValue, JSON.stringify(user));
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        modalRegister.style.display = 'none';
        doInitials(user);
    }
})

function getLoggedUser() {
    if (isUserLogged()) {
        const userSession = sessionStorage.getItem('currentUser');
        const user = JSON.parse(userSession);
        let userLogged = new User(user.firstName, user.lastName, user.email, user.password, user.visits, user.bonuses, user.books, user.cardNumber);
        return userLogged;
    }
    else {
        return null;
    }
}

textMyProfile.addEventListener('click', () => {
    modalProfile.style.display = 'flex';
    dropMenuContent.classList.remove('active')
    withAuth.classList.remove('active');
    let user = getLoggedUser();
    shortName.innerHTML = user.initials();
    fullName.innerHTML = user.firstName + user.lastName;
    visitsCount.innerHTML = user.visits;
    bonusesCount.innerHTML = user.bonuses;
    booksCount.innerHTML = user.books.length;
    cardNumber.innerHTML = user.cardNumber;
    numberProfileCard.innerHTML = "s";
})


function doInitials(user) {
    iconImg.style.display = 'none';
    imgIconImg.style.display = 'flex';
    imgIconImg.innerHTML = user.initials();
}


const generateCardNumber = () => {
    const min = 0x100000000;
    const max = 0x1FFFFFFFF;
    const cardNumber = Math.floor(Math.random() * (max - min) + min);
    return cardNumber.toString(16).toUpperCase();
}

















