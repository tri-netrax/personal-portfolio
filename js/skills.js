/* ========================= SKILLS SECTION ========================= */
const skillCards = document.querySelectorAll('.skill-card');

function revealSkills() {
  skillCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (cardTop < screenHeight - 50) {
      card.classList.add('slide-in');
    }
  });
}

window.addEventListener('scroll', revealSkills);
