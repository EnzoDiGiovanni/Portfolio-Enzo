<script>
  import ProjectCard from "./project-card.svelte";
</script>

<section id="#projects">
  <div class="projects-presentation">
    <h2>Projets</h2>
    <p>
      Découvrez mes projets avec les différentes technologies / langages que
      j'aime utiliser !
    </p>
  </div>

  <div class="projects-filter">
    <ul>
      <!-- <li><a href="#">Projets Perso</a></li>
    <li><a href="#">Projets d'école</a></li> -->
      <p>À faire</p>
    </ul>
  </div>

  <div class="projects-section">
    <a href="/projects/pokedex">
      <ProjectCard
        title="Pokédex"
        desc="Pokédex créé en Svelte"
        imgSrc="/images/pokedex.webp"
      />
    </a>
    <a href="/projects/arcade">
      <ProjectCard
        title="Arcade Games"
        desc="Site de jeux connus, réalisé avec JavaScript"
        imgSrc="/images/arcadegame.webp"
      />
    </a>
  </div>
</section>

<style lang="scss">
  .projects-presentation {
    margin-top: 100px;
    h2 {
      text-align: center;
    }

    h2,
    p {
      color: var(--high-contrast-text);
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
