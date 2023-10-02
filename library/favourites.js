const winter = document.querySelector('.winter');
const spring = document.querySelector('.spring');
const summer = document.querySelector('.summer');
const autumn = document.querySelector('.autumn');
const winterId = document.querySelector('winter');
const springId = document.querySelector('spring');
const summerId = document.querySelector('summer');
const autumnId = document.querySelector('autumn');
const winterBooks = document.querySelector('.winter-books');
const springBooks = document.querySelector('.spring-books');
const summerBooks = document.querySelector('.summer-books');
const autumnBooks = document.querySelector('.autumn-books');
const animationEndWinter = document.querySelector('.animation-end-winter');
const animationEndSpring = document.querySelector('.animation-end-spring');
const animationEndSummer = document.querySelector('.animation-end-summer');
const animationEndAutumn = document.querySelector('.animation-end-autumn');

window.onclick = function (event) {
  if (event.target === winter || event.target === winterId) {
    winterBooks.style.display = "block";
    animationEndSpring.style.display = "block";
    springBooks.style.display = "none";
    summerBooks.style.display = "none";
    autumnBooks.style.display = "none";
  }
  if (event.target === spring || event.target === springId) {
    springBooks.style.display = "block";
    winterBooks.style.display = "none";
    summerBooks.style.display = "none";
    autumnBooks.style.display = "none";
  }
  if (event.target === summer || event.target === summerId) {
    summerBooks.style.display = "block";
    springBooks.style.display = "none";
    winterBooks.style.display = "none";
    autumnBooks.style.display = "none";
  }
  if (event.target === autumn || event.target === autumnId) {
    autumnBooks.style.display = "block";
    springBooks.style.display = "none";
    summerBooks.style.display = "none";
    winterBooks.style.display = "none";
  }
}