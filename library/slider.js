const sliderImg = document.querySelectorAll('.slider-img');
const sliderRow = document.querySelector('.slider-row');
const littleCircle = document.querySelectorAll('.little-circle');
const arrowNext = document.querySelector('.arrow-next');
const arrowPrev = document.querySelector('.arrow-prev');

let sliderIndex = 0,
  sliderWidth;

window.addEventListener('resize', showSlide);

arrowNext.addEventListener('click', nextSlide);
arrowPrev.addEventListener('click', prevSlide);

function showSlide() {
  sliderWidth = document.querySelector('.slider-container').offsetWidth;
  rollSlider();
}
showSlide();

function nextSlide() {
  sliderIndex++;
  if (sliderIndex >= sliderImg.length) sliderIndex = 4;
  rollSlider();
  thisSlide(sliderIndex);
}

function prevSlide() {
  sliderIndex--;
  if (sliderIndex < 0) sliderIndex = 0;
  rollSlider();
  thisSlide(sliderIndex);
}

function rollSlider() {
  sliderRow.style.transform = `translateX(${sliderIndex * -450}px)`;
}

function thisSlide(index) {
  littleCircle.forEach(item => item.classList.remove('active-dot'));
  littleCircle[index].classList.add('active-dot');
}

littleCircle.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    sliderIndex = index;
    rollSlider();
    thisSlide(sliderIndex);
  });
})
