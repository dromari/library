



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

    localStorage.setItem(emailValue, JSON.stringify(user));
    sessionStorage.setItem('currentUser', JSON.stringify(user));
    modalRegister.style.display = 'none';
    updatePage(user);

})



loginButton.addEventListener('click', () => {
    let email = emailLogin.value;
    let password = passwordLogin.value;
    let userLocal = localStorage.getItem(email);
    let json = JSON.parse(userLocal);
    if (userLocal === null) {
        alert('User does not exist');
    }
    else if (password !== json.password) {
        alert('Incorrect password');
    } else {
        let visits = json.visits + 1;
        let user = new User(json.firstName, json.lastName, json.email, json.password, visits, json.bonuses, json.books, json.cardNumber);
        modalLogin.style.display = 'none';
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        localStorage.setItem(email, JSON.stringify(user));
        updatePage(user);
    }
})

function updatePage(user) {
    numberProfileCard.innerHTML = user.cardNumber;
    readersName.value = user.firstName + ' ' + user.lastName;
    cardNumberInput.value = user.cardNumber;
    buttonCheckLibraryCard.style.display = 'none';
    inputContent.style.height = '430px';
    statisticCard.style.display = 'flex';
    visitsCount.innerHTML = user.visits;
    bonusesCount.innerHTML = user.bonuses;
    booksCount.innerHTML = user.books.length;
    statisticCountVisits.innerHTML = user.visits;
    statisticCountBonuses.innerHTML = user.bonuses;
    statisticCountBooks.innerHTML = user.books.length;
    doInitials(user);
}

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
    if (isUserLogged()) {
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
    }
})

function doInitials(user) {
    iconImg.style.display = 'none';
    imgIconImg.style.display = 'flex';
    imgIconImg.innerHTML = user.initials();
}