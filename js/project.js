/* ========================= PROJECTS SECTION ========================= */
const projectCards = document.querySelectorAll('.project-card');

function revealProjects() {
  const triggerBottom = window.innerHeight - 100;

  projectCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add('slide-in');
    }
  });
}

window.addEventListener('scroll', revealProjects);
