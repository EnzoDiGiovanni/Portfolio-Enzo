<script>
  import projects from "$lib/data/projects.json";
  import { onMount } from "svelte";
  import ProjectCard from "./project-card.svelte";

  let selectedTech = "";
  const allTechnos = [
    ...new Set(Object.values(projects).flatMap((proj) => proj.technos)),
  ];

  onMount(async () => {
    if (typeof window !== "undefined") {
      const ScrollReveal = (await import("scrollreveal")).default;

      ScrollReveal().reveal(".projects-header", {
        duration: 1000,
        origin: "bottom",
        distance: "1000px",
        easing: "cubic-bezier( 0.6, 0.2, 0.1, 1 )",
      });
      ScrollReveal().reveal(".projects-filter", {
        duration: 1500,
        origin: "bottom",
        distance: "1000px",
        easing: "cubic-bezier( 0.6, 0.2, 0.1, 1 )",
      });
    }
  });
</script>

<section id="projects" class="projects-section">
  <header class="projects-header">
    <h2>Projets</h2>
    <p>
      Découvrez mes projets avec les différentes technologies/langages que
      j'aime utiliser !
    </p>
    <a href="https://github.com/EnzoDiGiovanni?tab=repositories" target="_blank"
      ><button class="allProjects">Voir tous mes projets</button></a
    >
  </header>

  <div class="projects-filter">
    <ul>
      <li>
        <button
          type="button"
          on:click={() => (selectedTech = "")}
          class:selected={selectedTech === ""}
        >
          Tous
        </button>
      </li>
      {#each allTechnos as tech}
        <li>
          <button
            type="button"
            on:click={() => (selectedTech = tech)}
            class:selected={selectedTech === tech}
          >
            {tech}
          </button>
        </li>
      {/each}
    </ul>
  </div>

  <div class="projects-grid">
    {#each Object.values(projects).filter((proj) => !selectedTech || proj.technos.includes(selectedTech)) as project}
      <a href={project.link} aria-label={`Détails du projet ${project.title}`}>
        <ProjectCard
          title={project.title}
          desc={project.desc}
          imgSrc={project.imgSrc}
        />
      </a>
    {/each}
  </div>
</section>

<style lang="scss">
  .projects-section {
    margin: 130px auto;
    padding: 0 20px;

    .projects-header {
      text-align: center;
      margin-bottom: 40px;

      h2 {
        font-size: 3rem;
        color: var(--high-contrast-text);
      }

      p {
        font-size: 1.2rem;
        color: var(--secondary-text);
        margin: 30px 0;
      }

      .allProjects {
        cursor: pointer;
        padding: 10px;
        border: 1px solid var(--ring);
        background-color: var(--button);
        border-radius: 20px;
        color: var(--interactive);
        transition:
          transform 0.3s ease,
          color 0.3s ease;

        &:hover {
          transform: scale(1.1);
          color: var(--high-contrast-text);
        }
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
        justify-content: center;
        flex-wrap: wrap;
        list-style: none;
        gap: 10px;
        padding: 0;

        li {
          button {
            background-color: transparent;
            border: 1px solid var(--ring);
            color: var(--secondary-text);
            padding: 10px 20px;
            font-size: 1rem;
            border-radius: 5px;
            cursor: pointer;
            transition: all 0.3s ease;

            &.selected {
              background-color: var(--background);
              color: var(--high-contrast-text);
              border-color: var(--background);
              transform: scale(1.1);
            }

            &:hover {
              background-color: var(--button);

              transform: scale(1.1);
            }
          }
        }
      }
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(250px, 1fr));
      gap: 20px;

      a {
        text-decoration: none;
        transition: transform 0.3s ease;

        &:hover {
          transform: scale(1.05);
        }
      }

      @media (max-width: 768px) {
        grid-template-columns: repeat(1, minmax(250px, 1fr));
      }

      @media (max-width: 480px) {
        gap: 10px;
        grid-template-columns: 1fr;
      }
    }
  }
</style>
