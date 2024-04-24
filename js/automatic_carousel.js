const carousel = document.querySelector('.carousel');
let counter = 0;

setInterval(() => {
  const currentImg = document.querySelector(`#img${counter}`);
  const nextImg = document.querySelector(`#img${((counter+1)%carousel.children.length)}`);
  currentImg.classList.add('_hidden');
  nextImg.classList.remove('_hidden');

  counter++;
  if (counter === carousel.children.length) {
    counter = 0;
  }
}, 3000);



// PREFERS REDUCED MOTION
// const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// const carousel = document.querySelector('.carousel');
// let counter = 0;

// if (!prefersReducedMotion) {
//   setInterval(() => {
//     const currentImg = document.querySelector(`#img${counter}`);
//     const nextImg = document.querySelector(`#img${((counter+1)%carousel.children.length)}`);
//     currentImg.classList.add('_hidden');
//     nextImg.classList.remove('_hidden');

//     counter++;
//     if (counter === carousel.children.length) {
//       counter = 0;
//     }
//   }, 3000);
// }