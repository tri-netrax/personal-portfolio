/* ========================= EDUCATION SECTION ========================= */
const eduItems = document.querySelectorAll('.edu-item');

function revealEducation() {
  const triggerBottom = window.innerHeight - 100;

  eduItems.forEach((item, index) => {
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < triggerBottom) {
      item.classList.add('slide-left');
    }
  });
}

window.addEventListener('scroll', revealEducation);

