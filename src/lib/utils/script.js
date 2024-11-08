const navLinks = document.querySelectorAll("article");
const nameHeader = document.querySelector(".name");
const nameContainer = document.querySelector(".name_container");
const sideNav = document.querySelector(".side_nav");
const burgerMenu = document.querySelector(".fa-compass");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Enlever la classe "active" de tous les liens
    navLinks.forEach((link) => {
      link.classList.remove("active");
      nameHeader.style.display = "none";
    });
    // Ajouter la classe "active" uniquement au lien survolé
    link.classList.add("active");

    if (nameContainer?.classList.contains("active")) {
      nameHeader.style.display = "inline";
    }
  });
});

burgerMenu?.addEventListener("click", () => {
  sideNav?.classList.toggle("open");
});
