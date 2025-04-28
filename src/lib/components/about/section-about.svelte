<script>
  import { onMount } from "svelte";
  import CardInfo from "./about-card.svelte";

  onMount(async () => {
    if (typeof window !== "undefined") {
      const ScrollReveal = (await import("scrollreveal")).default;

      ScrollReveal().reveal(".profile-image", {
        duration: 1000,
        origin: "bottom",
        distance: "50px",
        opacity: 0,
        easing: "ease-in-out",
      });
    }
  });
</script>

<section class="about-section">
  <h2>À propos de moi !</h2>

  <div class="content-wrapper">
    <div class="profile-image">
      <img
        class="profile-picture"
        src="/images/pp.webp"
        loading="lazy"
        alt="Profil d'Enzo Di Giovanni"
      />
    </div>

    <div class="info-cards">
      <CardInfo
        title="Bonjour, je m'appelle Enzo Di Giovanni"
        ,
        desc="Un futur développeur Full-Stack ! ☄️"
      />
      <CardInfo
        title="Depuis quand je code ?"
        ,
        desc="J'ai décidé de changer complètement de domaine après 2 ans de marketing et d'apprendre le développement web !
Aujourd'hui, ça fait 2 ans que je code en autodidacte et à l'école 👨🏽‍💻"
      />

      <CardInfo
        title="Ce que j'aime dans la vie ?"
        ,
        desc="J'adore le ski et les sports de combat ⛷️ 🤼
J'aime également apprendre toutes sortes de choses et sur n'importe quel sujet ! 🧠 "
      />
      <CardInfo
        title="Qu'est-ce que j'ai en plus ?"
        ,
        desc="Je suis soucieux d'apprendre et de bien faire, je m'efforce chaque jour de proposer la meilleure version de moi-même ! 💪🏽 "
      />
    </div>
  </div>
</section>

<style lang="scss">
  .about-section {
    min-height: 100vh;

    h2 {
      color: var(--high-contrast-text);
      text-align: center;
      margin-bottom: 100px;
      font-size: 3rem;
    }

    .content-wrapper {
      position: relative;
      display: flex;
      justify-content: center;
      gap: 25%;

      .profile-image {
        position: sticky;
        top: 35%;
        left: 0;
        height: 100%;
        width: 300px;
        overflow: hidden;

        .profile-picture {
          width: 100%;
          border-radius: 540% 300% 0 0;
          mask-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 1) 70%,
            rgba(0, 0, 0, 0) 100%
          );
          -webkit-mask-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 1) 70%,
            rgba(0, 0, 0, 0) 100%
          );
        }
      }

      .info-cards {
        margin-top: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
        gap: 400px;
      }
    }
  }
</style>
