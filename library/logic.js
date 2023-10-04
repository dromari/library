const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const modalRegister = document.querySelector('.modal-register');
const buttonRegister = document.querySelector('#register-btn');
const iconImg = document.querySelector('.icon-img');
const iconImgAuth = document.querySelector('.icon-img-auth');
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
    if (isUserLogged) {
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
    if (firstNameValue == '' || lastNameValue == '' || emailValue == '' || passwordValue == '') {
        modalRegister.style.display = 'flex';
    }
    else {
        localStorage.setItem(emailValue, JSON.stringify(user));
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        modalRegister.style.display = 'none';
    }
})

function isUserLogged() {
    sessionStorage.getItem('currentUser') !== null;
    dropMenuContent.classList.toggle('active');
    withAuth.classList.toggle('active');
}

function doInitials() {
    iconImgAuth.innerHTML = '';
    let initials = firstName.value.slice(0, 1).toUpperCase() + lastName.value.slice(0, 1).toUpperCase();
    iconImg.style.display = 'none';
    iconImgAuth.style.display = 'flex';
    iconImgAuth.append(initials);
}





