const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const modalRegister = document.querySelector('.modal-register');
const buttonRegister = document.querySelector('#register-btn');
const iconImg = document.querySelector('.icon-img');
const imgIconImg = document.querySelector('.img-icon-img');

const dropMenuContent = document.querySelector('.drop-menu-content');
const noAuth = document.querySelector('.no-auth');
const withAuth = document.querySelector('.with-auth');
const textRegister = document.querySelector('.p-reg-log');
const closeModal = document.querySelector('.close');
const modal = document.querySelector('.modal');

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
})

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

textRegister.addEventListener('click', () => {
    modalRegister.style.display = 'flex';
    dropMenuContent.classList.remove('active')
    noAuth.classList.remove('active');
})

/*---функция Юзер через конструктор*/
function User(firstName, lastName, email, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.initials = function () {
        return this.firstName.slice(0, 1).toUpperCase() + this.lastName.slice(0, 1).toUpperCase();
    }
}
/*функция Юзер через конструктор---*/

buttonRegister.addEventListener('click', () => {
    let firstNameValue = firstName.value;
    let lastNameValue = lastName.value;
    let emailValue = email.value;
    let passwordValue = password.value;
    let user = new User(firstNameValue, lastNameValue, emailValue, passwordValue);
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

function isUserLogged() {
    return sessionStorage.getItem('currentUser') !== null;
}

function doInitials(user) {
    iconImg.style.display = 'none';
    imgIconImg.style.display = 'flex';
    imgIconImg.innerHTML = user.initials();
}

function getLoggedUser() {
    const userSession = sessionStorage.getItem('currentUser');
    const user = JSON.parse(userSession);
    let firstName = user.firstName;
    let lastName = user.lastName;
    let email = user.email;
    let password = user.password;    
    let userLogged = new User(firstName, lastName, email, password);
    return getLoggedUser(userLogged);
}











