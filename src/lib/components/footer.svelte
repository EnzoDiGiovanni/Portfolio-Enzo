<footer class="footer">
  <div class="footer-content">
    <div class="footer-left">
      <h4>Enzo Di Giovanni</h4>
      <p>Développeur Web full-stack</p>
    </div>
    <div class="footer-right">
      <span>&copy; 2024 — Tous droits réservés</span>
    </div>
  </div>
</footer>

<style lang="scss">
  .footer {
    padding: 3rem 2rem;
    background: var(--background);
    border-top: 1px solid var(--ring);
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
    color: var(--secondary-text);

    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
    }

    .footer-left {
      h4 {
        font-size: 1.1rem;
        font-weight: 700;
        color: var(--high-contrast-text);
        margin-bottom: 0.4rem;
      }

      p {
        font-size: 0.95rem;
        margin: 0;
      }
    }

    .footer-right {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      text-align: right;
      gap: 0.4rem;

      a {
        color: var(--high-contrast-text);
        font-weight: 500;
        text-decoration: none;
        font-size: 0.95rem;
        transition: color 0.3s ease;

        &:hover {
          color: var(--ring);
        }
      }

      span {
        font-size: 0.85rem;
        color: var(--secondary-text);
      }
    }

    @media (max-width: 600px) {
      .footer-content {
        flex-direction: column;
        text-align: center;
        align-items: center;
      }

      .footer-right {
        align-items: center;
        text-align: center;
      }
    }
  }
</style>
