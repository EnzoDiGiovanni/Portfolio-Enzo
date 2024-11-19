<script>
  export let data;
  const { project } = data;
</script>

<section>
  {#if project}
    <div class="project__title">
      <h3>{project.title}</h3>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        Voir le projet
      </a>
    </div>

    <div class="line"></div>

    <div class="description">
      <p>{project.desc}</p>
      <p>{project.date}</p>
    </div>

    <div class="imgProject">
      <img src={project.imgSrc} alt="" />
    </div>

    <ul class="technos">
      {#each project.technos as techno}
        <li>{techno}</li>
      {/each}
    </ul>
  {:else}
    <p>Projet non trouvé</p>
  {/if}
</section>

<style lang="scss">
  h2,
  h3,
  h4 {
    color: var(--high-contrast-text);
  }

  p {
    color: var(--secondary-text);
  }

  a {
    color: var(--high-contrast-text);
  }

  section {
    padding: 150px 30px 0 30px;
    display: flex;
    flex-direction: column;
    height: 5000px;
    width: 100vw;

    .project__title {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;

      h3 {
        padding: 20px;
        font-size: clamp(2rem, 10vw, 10rem);
      }

      a {
        position: relative;
        border: 1px solid var(--ring);
        padding: 20px;
        border-radius: 30px;
        overflow: hidden;
        z-index: 2;

        &::before {
          content: "";
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          background-color: var(--button);
          width: 100%;
          height: 100%;
          transform: scaleY(0);
          transition: transform 0.3s ease;
          transform-origin: top;
          z-index: -1;
        }

        &:hover::before {
          transform: scaleY(1);
        }
        &:not(:hover)::before {
          transform: scaleY(0);
          transform-origin: bottom;
        }
      }
    }

    .line {
      height: 2px;
      width: 100%;
      background-color: var(--border-separator);
      margin: 40px 0;
    }

    .description {
      margin-bottom: 40px;
      display: flex;
      justify-content: space-between;
    }

    .imgProject {
      img {
        width: 100%;
      }
    }
  }
</style>
