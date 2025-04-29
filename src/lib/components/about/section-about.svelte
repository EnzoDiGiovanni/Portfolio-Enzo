<script>
  import { onMount } from "svelte";

  onMount(async () => {
    if (typeof window !== "undefined") {
      const ScrollReveal = (await import("scrollreveal")).default;

      ScrollReveal().reveal(".about-left", {
        duration: 1200,
        origin: "left",
        distance: "80px",
        easing: "cubic-bezier(0.6, 0.2, 0.1, 1)",
      });

      ScrollReveal().reveal(".about-item", {
        duration: 1200,
        origin: "bottom",
        distance: "60px",
        easing: "cubic-bezier(0.6, 0.2, 0.1, 1)",
        opacity: 0,
        beforeReveal: (el) => {
          el.classList.add("active"); // 👉 ajoute la classe .active sur apparition
        },
      });
    }
  });
</script>

<section class="about-section">
  <h2>À propos</h2>

  <div class="about-wrapper">
    <div class="about-left">
      <img src="/images/pp.png" alt="Enzo Di Giovanni" loading="lazy" />
    </div>

    <div class="about-right">
      <div class="about-item">
        <h3>Qui suis-je ?</h3>
        <p>
          Je m'appelle Enzo Di Giovanni, passionné de développement web, futur
          développeur full-stack !
        </p>
      </div>

      <div class="about-item">
        <h3>Mon parcours</h3>
        <p>
          Après deux ans dans le marketing, j'ai décidé de changer de voie pour
          apprendre le développement en autodidacte puis en école. Aujourd'hui,
          cela fait plus de 2 ans que je code chaque jour !
        </p>
      </div>

      <div class="about-item">
        <h3>Mes passions</h3>
        <p>
          Le ski, les sports de combat, et apprendre en continu sur des sujets
          variés !
        </p>
      </div>

      <div class="about-item">
        <h3>Mes valeurs</h3>
        <p>
          Rigueur, persévérance et envie d'améliorer mes compétences chaque jour
          pour donner le meilleur de moi-même.
        </p>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  .about-section {
    padding: 8rem 2rem;
    max-width: 1300px;
    margin: 0 auto;

    h2 {
      font-size: 3rem;
      text-align: center;
      margin-bottom: 5rem;
      color: var(--high-contrast-text);
    }

    .about-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4rem;
      flex-wrap: wrap;

      .about-left {
        flex: 1;
        min-width: 280px;
        max-width: 400px;
        display: flex;
        justify-content: center;

        img {
          width: 100%;
          height: auto;
          border-radius: 20px;
          object-fit: cover;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
        }
      }

      .about-right {
        flex: 2;
        display: flex;
        flex-direction: column;
        gap: 2rem;

        .about-item {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--ring);
          padding: 2rem;
          border-radius: 16px;
          transition:
            transform 0.5s ease,
            background 0.5s ease;
          transform: translateY(0);

          h3 {
            font-size: 1.8rem;
            color: var(--high-contrast-text);
            margin-bottom: 1rem;
          }

          p {
            font-size: 1rem;
            line-height: 1.7;
            color: var(--secondary-text);
          }

          &.active {
            transform: translateY(-5px);
            background: var(--button);
          }
        }
      }
    }

    @media (max-width: 900px) {
      .about-wrapper {
        flex-direction: column;
        align-items: center;

        .about-left,
        .about-right {
          max-width: 100%;
        }
      }
    }
  }
</style>
