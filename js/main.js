const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')



// menu pop up from top
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

// closing the menu
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
// const navLink = document.querySelectorAll('.nav__link')

// const linkAction = () =>{
//     const navMenu = document.getElementById('nav-menu')
//     // When we click on each nav__link, we remove the show-menu class
//     navMenu.classList.remove('show-menu')
// }
// navLink.forEach(n => n.addEventListener('click', linkAction))



// adding the blur to the header
const blurHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

// scrollup arrow
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// const sections = document.querySelectorAll('section[id]')
    
// const scrollActive = () =>{
//   	const scrollY = window.pageYOffset

// 	sections.forEach(current =>{
// 		const sectionHeight = current.offsetHeight,
// 			  sectionTop = current.offsetTop - 58,
// 			  sectionId = current.getAttribute('id'),
// 			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

// 		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
// 			sectionsClass.classList.add('active-link')
// 		}else{
// 			sectionsClass.classList.remove('active-link')
// 		}                                                    
// 	})
// }
// window.addEventListener('scroll', scrollActive)

// scroll reveal animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 3000,
    delay: 400,
    // repeating the animation, for when scrolling back up
    reset: true
})

sr.reveal(`.home__data, .nature__data, .nature__user, .footer__container`)
sr.reveal(`.home__card`, {delay: 600, distance: '100px', interval: 100})
sr.reveal(`.popular__card`, {interval: 200})  


// typewriter text
const texts = ["I'm Aleena", "I'm a Photographer", "I'm a Designer"]; 
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.getElementById('typewriter').textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 150);
})();
