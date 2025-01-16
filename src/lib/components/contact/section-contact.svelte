<script>
</script>

<h2>Et si on prenait contact ?</h2>

<form name="contact" id="contact" netlify method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  <div class=" wrapper">
    <p>
      <label
        >Votre nom : <input
          type="text"
          name="name"
          placeholder="Enzo"
          required
        /></label
      >
    </p>
    <p>
      <label
        >Votre email : <input
          type="email"
          name="email"
          placeholder="Di Giovanni"
          required
        /></label
      >
    </p>
  </div>
  <p>
    <label
      >Message : <textarea
        name="message"
        placeholder="La raison de votre message"
        required
      ></textarea></label
    >
  </p>
  <p>
    <button type="submit">Envoyer</button>
  </p>
</form>

<style lang="scss">
  h2 {
    color: var(--high-contrast-text);
    text-align: center;

    font-weight: bold;
    margin-bottom: 3rem;
  }
  form {
    width: 80%;
    margin: 0 auto;
    padding: 20px 20px 70px 20px;
    border-radius: 8px;

    .wrapper {
      gap: 20px;
      display: flex;
      justify-content: space-between;

      p {
        flex: 1;
      }
    }

    p {
      margin-bottom: 12px;
    }

    label {
      font-size: 14px;
      color: var(--secondary-text);
      margin-bottom: 25px;
      display: block;
    }

    input[type="text"],
    input[type="email"],
    textarea {
      width: 100%;
      padding: 8px;
      background-color: transparent;
      border: 1px solid var(--border-separator);
      border-radius: 4px;
      font-size: 14px;
      transition: border-color 0.3s;
      resize: none;
      color: white;

      &:focus {
        border-color: var(--high-contrast-text);
        outline: none;
      }
    }

    input,
    textarea {
      margin-top: 20px;
    }

    textarea {
      height: 100px;
    }

    button {
      width: 100%;
      padding: 10px;
      background-color: var(--button);
      color: #fff;
      font-size: 14px;
      font-weight: bold;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.2s;

      &:hover {
        background-color: var(--ring);
      }

      &:active {
        background-color: var(--ring);
      }
    }
  }
</style>
