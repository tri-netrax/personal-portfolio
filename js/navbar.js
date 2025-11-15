/* ========================= NAVBAR & SIDEBAR ========================= */

/* Toggle sidebar for mobile */
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
}

/* Highlight active link on scroll */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links li a");
const sideLinks = document.querySelectorAll(".sidebar a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });

  sideLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
