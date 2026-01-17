const slides = document.querySelectorAll('.slideshow .slide');
const buttons = document.querySelectorAll('.mS-menu');

let index = 0;
let timer = null;
const DELAY = 4000;

function showSlide(newIndex) {
  if (newIndex === index) return;

  slides.forEach((slide) => {
    slide.classList.remove('active', 'from-left', 'from-right');
  });

  buttons.forEach((b) => b.classList.remove('menuActive'));

  const direction = newIndex > index ? 'from-right' : 'from-left';

  slides[newIndex].classList.add('active', direction);
  buttons[newIndex].classList.add('menuActive');

  index = newIndex;
}

buttons.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    stopAutoplay();
    showSlide(i);
    startAutoplay();
  });
});

function startAutoplay() {
  stopAutoplay();
  timer = setInterval(() => {
    showSlide((index + 1) % slides.length);
  }, DELAY);
}

function stopAutoplay() {
  if (timer) clearInterval(timer);
}

showSlide(0);
startAutoplay();
const slideshow = document.querySelector('.slideshow');

slideshow.addEventListener('mouseenter', stopAutoplay);
slideshow.addEventListener('mouseleave', startAutoplay);
