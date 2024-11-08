<section class="about_me">
  <div class="card_info">
    <img src="/images/profilpic.webp" loading="lazy" alt="Profil Pic" />
    <p>Mon téléphone : 06.27.03.33.76</p>

    <p>Mail : digiovannienzo1@gmail.com</p>
    <p>Permis: B | Véhiculé</p>
    <div class="card_info-rs">
      <button class="button">
        LinkedIn <i class="fa-brands fa-linkedin"></i>
      </button>
      <button class="button">
        GitHub <i class="fa-brands fa-square-github"></i>
      </button>
    </div>
  </div>
  <ul>
    <li><h3>Passionné de Technologies</h3></li>
    <li><h3>Étudiant en Web</h3></li>
    <li><h3>Explorateur du Monde Digital</h3></li>
    <li><h3>Expert en Apprentissage Continu</h3></li>
    <li><h3>Collaborateur Enthousiaste</h3></li>
    <li><h3>Amoureux du Code Bien Fait</h3></li>
  </ul>
</section>

<style lang="scss">
  .about_me {
    margin: 0 0 300px 0;
    display: flex;
    flex-direction: row;
    min-height: 100vh;
    height: 1500px;
    justify-content: space-evenly;

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      gap: 10px;
      z-index: 10;

      li {
        backdrop-filter: blur(40px);
        &:nth-child(odd) {
          margin-left: 90px;
        }

        &:nth-child(even) {
          margin-right: 90px;
        }

        border: 1px solid var(--border-separator);
        border-radius: 999px;
        padding: 40px;
        box-shadow:
          0 10px 20px rgba(0, 0, 0, 0.2),
          0 6px 6px rgba(0, 0, 0, 0.3);

        h1 {
          color: var(--high-contrast-text);
        }
        h3 {
          color: var(--high-contrast-text);
        }
      }
    }
  }
</style>
