<script>
  import ProjectCard from "$lib/components/project-card.svelte";
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
    title="mon projet"
    desc="premier projet"
    imgSrc="/images/pokedex.webp"
  />
  <ProjectCard
    title="mon projet"
    desc="premier projet"
    imgSrc="/images/pokedex.webp"
  />
  <ProjectCard
    title="mon projet"
    desc="premier projet"
    imgSrc="/images/pokedex.webp"
  />
  <ProjectCard
    title="mon projet"
    desc="premier projet"
    imgSrc="/images/pokedex.webp"
  />
</div>

<style lang="scss">
  .projects-presentation {
    padding-top: 200px;

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
