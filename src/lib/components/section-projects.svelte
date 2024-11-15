<script>
  import anime from "animejs";
  import { onMount } from "svelte";
  import ProjectCard from "./project-card.svelte";
  let projectsNumber;

  onMount(() => {
    // Animation de dessin de ligne
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

    // Fonction pour démarrer l'animation de compteur
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

    // Configurer l'IntersectionObserver pour lancer l'animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimation(); // Démarre l'animation quand visible
            observer.unobserve(entry.target); // Arrête l'observation
          }
        });
      },
      { threshold: 0.5 } // Active l'animation à moitié visible
    );

    // Observe l'élément
    observer.observe(projectsNumber);
  });
</script>

<div class="projects-presentation">
  <h2>Projets</h2>
  <p>Découvrez chaque projet du plus basique au plus compliqué</p>
</div>

<div class="projects-filter">
  <ul>
    <li><a href="#">Projets Perso</a></li>
    <li><a href="#">Projets d'école</a></li>
  </ul>
</div>

<div class="projects-section">
  <ProjectCard
    title="Pokedex"
    desc="Pokdex créer en Svelte "
    imgSrc="/images/pokedex.webp"
  />
  <ProjectCard
    title="Arcade Games"
    desc="Site de jeu les plus connu tout en JavaScript"
    imgSrc="/images/arcadegame.webp"
  />
</div>

<style lang="scss">
  .projects-presentation {
    h2,
    p {
      padding: 0 60px 60px 60px;
    }
  }

  .projects-filter {
    border: 1px solid var(--ring);
    color: var(--secondary-text);
    padding: 30px;

    ul {
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: row;
    }
  }

  .projects-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
</style>
