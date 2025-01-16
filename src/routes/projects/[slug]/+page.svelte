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
        <div class="details-grid">
          <div class="detail-item">
            <h3>Contexte</h3>
            <p>{project.context}</p>
          </div>
          <div class="detail-item">
            <h3>Objectif</h3>
            <p>{project.objective}</p>
          </div>
          <div class="detail-item">
            <h3>Challenge</h3>
            <p>{project.challenge}</p>
          </div>
          <div class="detail-item">
            <h3>Résultat</h3>
            <p>{project.result}</p>
          </div>
          <div class="detail-item">
            <h3>Liens avec mon futur ?</h3>
            <p>{project.linkToFutur}</p>
          </div>
        </div>
        <ul>
          {#each project.tags as tag}
            <li>| {tag} |</li>
          {/each}
        </ul>
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
      margin-top: 70px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .projectType {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        margin-bottom: 80px;

        .details-grid {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin: 40px 0;
          padding: 20px;
          background-color: var(--ring);
          border-radius: 15px;

          .detail-item {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 15px 20px;

            color: var(--high-contrast-text);
            border-radius: 10px;
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
            transition:
              transform 0.3s ease,
              box-shadow 0.3s ease;

            &:hover {
              transform: translateY(-5px);
              box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
            }

            h3 {
              font-size: 1.6rem;
              margin-bottom: 8px;
              color: var(--high-contrast-text);
              text-transform: uppercase;
              letter-spacing: 0.5px;
            }

            p {
              font-size: 1rem;
              line-height: 1.6;
              color: var(--high-contrast-text);
              margin-top: 5px;
              padding: 10px;
              background-color: rgba(255, 255, 255, 0.1);
              border-radius: 8px;
            }
          }
        }

        ul {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;

          gap: 20px;
          li {
            color: var(--secondary-text);
          }
        }
      }
    }
  }
</style>
