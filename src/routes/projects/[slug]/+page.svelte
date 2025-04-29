<script>
  export let data;
  const { project } = data;
</script>

<section>
  {#if project}
    <div class="project__title">
      <h3>{project.title}</h3>
      <div class="project__title-button">
        {#if project.projectLink}
          <a
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir le projet
          </a>
        {/if}

        <a href={project.gitSrc} target="_blank" rel="noopener noreferrer">
          Voir le code
        </a>
        <a href="/#projects" rel="noopener noreferrer"> Retour aux projets </a>
      </div>
    </div>

    <div class="line"></div>

    <div class="description">
      <p>{project.desc}</p>

      <p>{project.date}</p>
    </div>

    <div class="wrapper">
      <div class="imgProject">
        <img src={project.imgSrc} alt="" />
      </div>

      <ul class="technos">
        {#each project.technos as techno}
          <li>{techno}</li>
        {/each}
      </ul>
    </div>

    <div class="wrapper-description">
      <div class="projectType">
        <div class="line-block">
          <h4>Contexte</h4>
          <p>{project.context}</p>
        </div>
        <div class="line-block">
          <h4>Objectif</h4>
          <p>{project.objective}</p>
        </div>
        <div class="line-block">
          <h4>Challenge</h4>
          <p>{project.challenge}</p>
        </div>
        <div class="line-block">
          <h4>Résultat</h4>
          <p>{project.result}</p>
        </div>
        <div class="line-block">
          <h4>Projection</h4>
          <p>{project.linkToFutur}</p>
        </div>

        <div class="tags">
          {#each project.tags as tag}
            <span>{tag}</span>
          {/each}
        </div>
      </div>
    </div>
  {:else}
    <p>Projet non trouvé</p>
  {/if}
</section>

<style lang="scss">
  h3 {
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

    width: 100vw;

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

    .project__title {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;

      .project__title-button {
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 30px;
      }

      h3 {
        padding: 20px;
        font-size: clamp(2rem, 9vw, 10rem);
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
      align-items: center;
      flex-wrap: wrap;
    }

    .wrapper {
      display: flex;
      justify-content: space-between;
      border: 2px solid var(--border-separator);
      overflow: hidden;

      .imgProject {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80%;

        img {
          width: 100%;
        }
      }

      .technos {
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        flex: 1;

        li {
          display: flex;
          align-items: center;
          justify-content: center;
          border-left: 2px solid var(--border-separator);
          height: 100%;
          width: 100%;
          color: var(--secondary-text);
        }
      }
    }

    .wrapper-description {
      margin-top: 6rem;
      padding: 4rem 2rem;
      border-top: 1px solid var(--ring);

      .projectType {
        max-width: 1000px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 2.5rem;

        .line-block {
          display: grid;
          grid-template-columns: 150px 1fr;
          gap: 2rem;
          align-items: start;

          @media (max-width: 700px) {
            grid-template-columns: 1fr;
          }

          h4 {
            font-size: 1.1rem;
            font-weight: 600;
            color: var(--high-contrast-text);
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin: 0;
          }

          p {
            font-size: 1rem;
            line-height: 1.7;
            color: var(--secondary-text);
            margin: 0;
          }
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-top: 2rem;
          justify-content: center;

          span {
            background: var(--ring);
            padding: 0.4rem 0.8rem;
            font-size: 0.85rem;
            color: var(--high-contrast-text);
            border-radius: 9999px;
            font-weight: 500;
            border: 1px solid var(--border-separator);
          }
        }
      }
    }
  }
</style>
