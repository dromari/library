const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const modalRegister = document.querySelector('.modal-register');
const buttonRegister = document.querySelector('#register-btn');
const iconImg = document.querySelector('.icon-img');
const dropMenuContent = document.querySelector('.drop-menu-content');
const noAuth = document.querySelector('.no-auth');
const withAuth = document.querySelector('.with-auth');
const textRegister = document.querySelector('.p-reg-log');

iconImg.addEventListener('click', () => {
    if (isUserLogged) {
        dropMenuContent.classList.toggle('active');
        withAuth.classList.toggle('active');
    }
    else {
        dropMenuContent.classList.toggle('active')
        noAuth.classList.toggle('active');
    }

})

textRegister.addEventListener('click', () => {
    modalRegister.style.display = 'flex';
    dropMenuContent.classList.remove('active')
    noAuth.classList.remove('active');
})


function User(firstName, lastName, email, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
}

buttonRegister.addEventListener('click', () => {
    let firstNameValue = firstName.value;
    let lastNameValue = lastName.value;
    let emailValue = email.value;
    let passwordValue = password.value;
    let user = new User(firstNameValue, lastNameValue, emailValue, passwordValue);
    localStorage.setItem(emailValue, JSON.stringify(user));
    sessionStorage.setItem('currentUser', JSON.stringify(user));
    modalRegister.style.display = 'none';
})

function isUserLogged() {
    return sessionStorage.getItem('currentUser') !== null;
}



