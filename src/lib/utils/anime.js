import anime from "animejs";

// Animation de dessin de ligne
export const animLine = () => {
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
};
