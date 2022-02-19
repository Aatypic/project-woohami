// Main.js
// Aatypic
// Highlight menu by replacing class tag active.

const sections = document.querySelectorAll("section");
const navList = document.querySelectorAll("nav .primary-navigation li");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY > sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navList.forEach((li) => {
    li.classList.remove("active-menu");

    if (li.classList.contains(current)) {
      li.classList.add("active-menu");
    }
  });
  console.log(current);
});

// skill progress bars

// const skillBar = document.getElementsByClassName
