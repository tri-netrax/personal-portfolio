/* ========================= ABOUT SECTION ========================= */
const aboutSection = document.querySelector('.about-container');

function fadeInAbout() {
  const aboutTop = aboutSection.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (aboutTop < screenHeight - 100) {
    aboutSection.classList.add('fade-in');
  }
}

window.addEventListener('scroll', fadeInAbout);
