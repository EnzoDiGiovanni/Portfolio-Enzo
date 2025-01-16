<footer>
  <div class="footer-container">
    <div class="footer-section">
      <p>Enzo Di Giovanni - Développeur Web</p>
      <p>
        <a href="mailto:digiovannienzo1@gmail.com">digiovannienzo1@gmail.com</a>
      </p>
    </div>
  </div>
  <p class="footer-credits">
    &copy; 2024 Enzo Di Giovanni. Tous droits réservés.
  </p>
</footer>

<style lang="scss">
  footer {
    position: relative;
    z-index: 10;
    background-color: var(--background);
    padding: 2rem 1rem;
    border-top: 1px solid var(--ring);
    text-align: center;
    box-shadow: 0 -2px 10px var(--ring) !important;

    .footer-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;

      .footer-section {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        p,
        a {
          color: var(--secondary-text);
          font-size: 0.9rem;
          margin: 0;
          text-decoration: none;
        }

        a {
          font-weight: bold;
          transition: color 0.3s ease;
        }
      }
    }

    .footer-credits {
      margin-top: 1.5rem;
      color: var(--secondary-text);
      font-size: 0.8rem;
    }
  }
</style>
