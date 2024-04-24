const slides = document.querySelectorAll('.food__container');
const dotsContainer = document.querySelector('.dots');
const prevBtn = document.querySelectorAll('.prev');
const nextBtn = document.querySelectorAll('.next');
let slideIndex = 0;

function showSlides() {
  console.log(slideIndex);

  slides.forEach((slide, index) => {
    slide.classList.add('_hidden');
    slide.classList.add('_opacityFull');
    if (index === slideIndex) {
      slide.classList.remove('_hidden');
    }
  });

  const dots = Array.from(dotsContainer.children);
  dots.forEach(dot => dot.classList.remove('active'));
  dots[slideIndex].classList.add('active');
}

function nextSlide() {
  console.log('next')
  if (slideIndex === slides.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  showSlides();
}

function prevSlide() {
  console.log('prev')
  if (slideIndex === 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex--;
  }
  showSlides();
}

nextBtn.forEach((nextSlideBtn) => {
  nextSlideBtn.addEventListener('click', nextSlide);
});
prevBtn.forEach((prevSlideBtn) => {
  prevSlideBtn.addEventListener('click', prevSlide);
});

// dots for carousel
slides.forEach((_, index) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (index === 0) {
    dot.classList.add('active');
  }
  dot.addEventListener('click', () => {
    slideIndex = index;
    showSlides();
  });
  dotsContainer.appendChild(dot);
});

showSlides();
