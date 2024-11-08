const projectsNumber = document.querySelector(".projectsNumber");

anime({
  targets: ".line-drawing path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 1000,
  delay: function (el, i) {
    return i * 250;
  },
  direction: "alternate",
  loop: false,
});

const startAnimation = () => {
  anime
    .timeline({
      easing: "easeInOutSine",
      duration: 2000,
    })
    .add({
      targets: projectsNumber,
      innerHTML: [0, 10000],
      round: 1,
    })
    .add({
      targets: projectsNumber,
      innerHTML: [10000, 3],
      round: 1,
      duration: 1000,
      easing: "easeOutQuad",
    });
};

// Configuration de l'IntersectionObserver
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startAnimation(); // Lancer l'animation lorsque l'élément est visible
        observer.unobserve(entry.target); // Arrêter d'observer une fois l'animation déclenchée
      }
    });
  },
  { threshold: 0.5 }
); // La moitié de l'élément doit être visible pour déclencher l'animation

// Observer l'élément
observer.observe(projectsNumber);
