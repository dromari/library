const burgerIcon = document.querySelector('.burger-icon');
const headerNav = document.querySelector('.header-navigation');
const oneSpan = document.querySelector('.one-span');
/*const icon = document.querySelector('.icon');*/
const toggleMenu = () => {
  document.body.classList.toggle('lock');
  headerNav.classList.toggle('active');
  burgerIcon.classList.toggle('active');
  oneSpan.classList.toggle('active');
  /*icon.classList.toggle('active');*/
  /*iconIcon.classList.remove('active');*/
  dropMenuContent.classList.remove('active');
  noAuth.classList.remove('active');

}

burgerIcon.addEventListener('click', e => {
  e.stopPropagation();
  toggleMenu();
});

document.addEventListener('click', e => {
  let target = e.target;
  let its_headerNav = target == headerNav || headerNav.contains(target);
  let its_burgerIcon = target == burgerIcon;
  let headerNav_is_active = headerNav.classList.contains('active');
  if (!its_headerNav && !its_burgerIcon && headerNav_is_active) {
    toggleMenu();
  }

  if (burgerIcon.classList.contains('active')) {
    document.body.classList.remove('lock');
    headerNav.classList.remove('active');
    burgerIcon.classList.remove('active');
    oneSpan.classList.remove('active');
    /*icon.classList.remove('active');*/
  }
})
