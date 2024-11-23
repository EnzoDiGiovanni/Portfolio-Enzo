<script>
  import ProjectCard from "./project-card.svelte";
</script>

<section id="#projects" class="projects-section">
  <header class="projects-header">
    <h2>Projets</h2>
    <p>
      Découvrez mes projets avec les différentes technologies / langages que
      j'aime utiliser !
    </p>
  </header>

  <div class="projects-filter">
    <ul>
      <!-- <li><a href="#">Projets Perso</a></li>
    <li><a href="#">Projets d'école</a></li> -->
      <p>À faire</p>
    </ul>
  </div>

  <div class="projects-grid">
    <a href="/projects/pokedex" aria-label="Détails du projet Pokédex">
      <ProjectCard
        title="Pokédex"
        desc="Pokédex créé en Svelte"
        imgSrc="/images/pokedex.webp"
      />
    </a>
    <a href="/projects/arcade" aria-label="Détails du projet Arcade Games">
      <ProjectCard
        title="Arcade Games"
        desc="Site de jeux connus, réalisé avec JavaScript"
        imgSrc="/images/arcadegame.webp"
      />
    </a>
  </div>
</section>

<style lang="scss">
  .projects-section {
    margin: 130px auto;
    padding: 0 20px;

    header {
      text-align: center;
      margin-bottom: 40px;

      h2 {
        font-size: 2rem;
        color: var(--high-contrast-text);
      }

      p {
        font-size: 1.2rem;
        color: var(--secondary-text);
        margin-top: 10px;
      }
    }

    .projects-filter {
      border: 1px solid var(--ring);
      border-radius: 8px;
      margin: 20px auto;
      padding: 15px;
      text-align: center;

      ul {
        display: flex;
        justify-content: space-evenly;
        list-style: none;
        padding: 0;

        li {
          padding: 10px 20px;
          cursor: pointer;

          a {
            color: var(--secondary-text);
            text-decoration: none;

            &:hover {
              color: var(--primary-text);
            }
          }
        }

        p {
          font-style: italic;
          color: var(--secondary-text);
        }
      }
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;

      a {
        text-decoration: none;
        transition: transform 0.3s ease;

        &:hover {
          transform: scale(1.05);
        }
      }
    }
  }
</style>
