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

    .card_info {
      position: sticky;
      top: 200px;
      height: 580px;
      width: 40%;
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 1px solid var(--border-separator);
      border-radius: 24px;
      box-shadow:
        0 10px 20px rgba(0, 0, 0, 0.2),
        0 6px 6px rgba(0, 0, 0, 0.3);
      justify-content: space-evenly;
      padding: 20px;

      p {
        color: var(--secondary-text);
        border: 1px solid var(--border-separator);
        padding: 15px;
        width: 100%;

        box-shadow:
          0 10px 20px rgba(0, 0, 0, 0.2),
          0 6px 6px rgba(0, 0, 0, 0.3);
      }

      img {
        border: 1px solid var(--interactive);
        padding: 15px;
        width: 150px;
        border-radius: 16px;
        box-shadow:
          0 10px 20px rgba(0, 0, 0, 0.2),
          0 6px 6px rgba(0, 0, 0, 0.3);
      }

      .card_info-rs {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;

        .button {
          --b: 3px; /* border thickness */
          --s: 0.45em; /* size of the corner */
          --color: var(--button);

          padding: calc(0.5em + var(--s)) calc(0.9em + var(--s));
          color: var(--ring);
          --_p: var(--s);
          background: conic-gradient(
              from 90deg at var(--b) var(--b),
              #0000 90deg,
              var(--ring) 0
            )
            var(--_p) var(--_p) / calc(100% - var(--b) - 2 * var(--_p))
            calc(100% - var(--b) - 2 * var(--_p));
          transition:
            0.3s linear,
            color 0s,
            background-color 0s;
          outline: var(--b) solid #0000;
          outline-offset: 0.6em;
          font-size: 16px;

          border: 0;

          user-select: none;
          -webkit-user-select: none;
          touch-action: manipulation;
        }

        .button:hover,
        .button:focus-visible {
          --_p: 0px;
          outline-color: var(--color);
          outline-offset: 0.05em;
        }

        .button:active {
          background: var(--color);
          color: var(--interactive);
        }
      }
    }

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
