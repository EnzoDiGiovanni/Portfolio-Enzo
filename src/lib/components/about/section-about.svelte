<script>
  import CardInfo from "./about-card.svelte";
</script>

<section class="about-section">
  <h2>À propos de moi !</h2>

  <div class="content-wrapper">
    <div class="profile-image">
      <img
        class="profile-picture"
        src="/images/profilpic.webp"
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
Aujourd'hui, ça fait 2 ans que je code en autodidacte et à l'école  👨🏽‍💻"
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

  <!-- <a href="https://github.com/EnzoDiGiovanni" target="_blank">
    <button class="button">
      GitHub <i class="fa-brands fa-square-github"></i>
    </button>
  </a> -->

  <!-- <a href="https://www.linkedin.com/in/enzodigiovanni/" target="_blank">
        <button class="button">
          LinkedIn <i class="fa-brands fa-linkedin"></i>
        </button>
      </a> -->

  <!-- <a class="button" href="/CV_Enzo_DG.pdf" download>
      Mon CV <i class="fa-solid fa-file"></i>
    </a> -->
</section>

<style lang="scss">
  .about-section {
    min-height: 100vh;

    h2 {
      color: var(--high-contrast-text);
      text-align: center;
      margin-bottom: 100px;
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

        .profile-picture {
          width: 100%;
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
