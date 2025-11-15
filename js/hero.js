/* ========================= HERO SECTION TYPEWRITER ========================= */
const heroTextArray = [
  "Full Stack Developer",
  "Frontend Developer",
  "MERN Stack Developer",
];

let heroIndex = 0;
let heroCharIndex = 0;
const heroSpeed = 100;
const heroTypewriter = document.querySelector(".typewriter");

function heroTypeEffect() {
  if (heroCharIndex < heroTextArray[heroIndex].length) {
    heroTypewriter.innerHTML += heroTextArray[heroIndex].charAt(heroCharIndex);
    heroCharIndex++;
    setTimeout(heroTypeEffect, heroSpeed);
  } else {
    setTimeout(heroEraseEffect, 1200);
  }
}

function heroEraseEffect() {
  if (heroCharIndex > 0) {
    heroTypewriter.innerHTML = heroTextArray[heroIndex].substring(0, heroCharIndex - 1);
    heroCharIndex--;
    setTimeout(heroEraseEffect, 50);
  } else {
    heroIndex = (heroIndex + 1) % heroTextArray.length;
    setTimeout(heroTypeEffect, 300);
  }
}

document.addEventListener("DOMContentLoaded", heroTypeEffect);
