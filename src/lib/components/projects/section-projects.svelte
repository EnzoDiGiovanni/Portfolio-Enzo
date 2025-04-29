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
        distance: "100px",
        easing: "cubic-bezier(0.6, 0.2, 0.1, 1)",
      });
      ScrollReveal().reveal(".projects-filter", {
        duration: 1200,
        origin: "bottom",
        distance: "100px",
        easing: "cubic-bezier(0.6, 0.2, 0.1, 1)",
      });
    }
  });
</script>

<section id="projects" class="projects-section">
  <header class="projects-header">
    <h2>Mes Projets</h2>
    <p>Découvrez mes réalisations basées sur mes technos favorites.</p>
    <a
      href="https://github.com/EnzoDiGiovanni?tab=repositories"
      target="_blank"
    >
      <button class="all-projects">Voir tous les projets</button>
    </a>
  </header>

  <div class="projects-filter">
    <select bind:value={selectedTech}>
      <option value="">Tous</option>
      {#each allTechnos as tech}
        <option value={tech}>{tech}</option>
      {/each}
    </select>
  </div>

  <div class="projects-grid">
    {#each Object.values(projects).filter((proj) => !selectedTech || proj.technos.includes(selectedTech)) as project}
      <a href={project.link} aria-label={`Accéder au projet ${project.title}`}>
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
    margin: 8rem auto;
    padding: 0 2rem;
    max-width: 1200px;

    .projects-header {
      text-align: center;
      margin-bottom: 4rem;

      h2 {
        font-size: 3rem;
        font-weight: bold;
        color: var(--high-contrast-text);
      }

      p {
        font-size: 1.25rem;
        color: var(--secondary-text);
        margin-top: 1.5rem;
      }

      .all-projects {
        margin-top: 2rem;
        padding: 0.75rem 1.5rem;
        background: var(--button);
        color: var(--high-contrast-text);
        border: 1px solid var(--ring);
        border-radius: 12px;
        font-weight: 600;
        transition: all 0.3s ease;

        &:hover {
          transform: translateY(-4px);
          background: var(--interactive);
          color: var(--high-contrast-text);
          cursor: pointer;
        }
      }
    }

    .projects-filter {
      margin-bottom: 3rem;
      text-align: center;

      select {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;

        padding: 0.75rem 1.5rem;
        text-align: center;
        font-size: 1rem;
        font-weight: 500;
        background: linear-gradient(
          135deg,
          var(--background),
          rgba(255, 255, 255, 0.03)
        );
        border: 1px solid var(--ring);
        border-radius: 12px;
        color: var(--high-contrast-text);
        cursor: pointer;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
        transition: all 0.3s ease;
        position: relative;

        &:hover {
          background: var(--button);
          color: var(--background);
          box-shadow: 0 6px 14px rgba(0, 0, 0, 0.12);
          border-color: var(--hover-color);
        }

        &:focus {
          outline: none;
          border-color: var(--ring);
          box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
        }
      }
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;

      a {
        text-decoration: none;
        transition: transform 0.3s ease;

        &:hover {
          transform: scale(1.03);
        }
      }
    }
  }
</style>
