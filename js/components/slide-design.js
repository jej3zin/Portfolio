/* =========== Slide design =========== */
(() => {
  const slides = document.querySelectorAll('.designer-slide');
  const buttons = document.querySelectorAll('.designer-btn');
  const slider = document.getElementById('designerSlider');

  let current = 0;
  let timer = null;
  const DELAY = 8000;

  function showDesignerSlide(i) {
    slides.forEach((s) => s.classList.remove('active'));
    buttons.forEach((b) => b.classList.remove('active'));

    slides[i].classList.add('active');
    buttons[i].classList.add('active');
    current = i;
  }

  function startDesignerAutoplay() {
    if (timer) return;
    timer = setInterval(() => {
      showDesignerSlide((current + 1) % slides.length);
    }, DELAY);
  }

  function stopDesignerAutoplay() {
    clearInterval(timer);
    timer = null;
  }

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      showDesignerSlide(+btn.dataset.slide);
      stopDesignerAutoplay();
      startDesignerAutoplay();
    });
  });

  // 🎯 PAUSE NO HOVER
  slider.addEventListener('mouseenter', stopDesignerAutoplay);
  slider.addEventListener('mouseleave', startDesignerAutoplay);

  showDesignerSlide(0);
  startDesignerAutoplay();
})();
