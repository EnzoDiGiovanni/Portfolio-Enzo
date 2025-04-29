<section class="contact-section" id="contact">
  <div class="contact-intro">
    <h2>Un projet ? Une question ?</h2>
    <p>N'hésitez pas à m'écrire. Je vous répondrai rapidement.</p>
  </div>

  <form name="contact" method="POST" netlify data-netlify="true">
    <input type="hidden" name="form-name" value="contact" />

    <div class="form-grid">
      <div class="input-group">
        <label for="name">Votre nom</label>
        <input type="text" name="name" id="name" placeholder="Enzo" required />
      </div>

      <div class="input-group">
        <label for="email">Votre email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="enzo.digiovanni@exemple.com"
          required
        />
      </div>
    </div>

    <div class="input-group full">
      <label for="message">Votre message</label>
      <textarea
        name="message"
        id="message"
        placeholder="Dites m'en plus..."
        required
      ></textarea>
    </div>

    <div class="submit-wrapper">
      <button type="submit">Envoyer le message</button>
    </div>
  </form>
</section>

<style lang="scss">
  .contact-section {
    padding: 6rem 2rem;
    max-width: 900px;
    margin: 0 auto;

    .contact-intro {
      text-align: center;
      margin-bottom: 3rem;

      h2 {
        font-size: 2.8rem;
        color: var(--high-contrast-text);
        margin-bottom: 1rem;
      }

      p {
        color: var(--secondary-text);
        font-size: 1.1rem;
      }
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      .form-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 2rem;
      }

      .input-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        label {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--secondary-text);
        }

        input,
        textarea {
          padding: 0.8rem 1rem;
          background: transparent;
          border: 1px solid var(--ring);
          border-radius: 8px;
          font-size: 1rem;
          color: var(--high-contrast-text);
          transition: border-color 0.3s ease;

          &:focus {
            border-color: var(--interactive);
            outline: none;
          }
        }

        textarea {
          min-height: 140px;
          resize: vertical;
        }

        &.full {
          grid-column: 1 / -1;
        }
      }

      .submit-wrapper {
        text-align: center;

        button {
          background: var(--interactive);
          color: var(--high-contrast-text);
          border: none;
          border-radius: 50px;
          padding: 0.9rem 2rem;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.3s ease;

          &:hover {
            background: var(--ring);
          }
        }
      }
    }
  }
</style>
