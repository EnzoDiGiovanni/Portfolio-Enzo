<script>
</script>

<form name="contact" netlify method="POST">
  <input type="hidden" name="form-name" value="contact" />
  <p>
    <label>Votre nom : <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Votre email : <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Message : <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Envoyer</button>
  </p>
</form>

<style lang="scss">
  form {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    background: var(--interactive);
    border-radius: 8px;

    p {
      margin-bottom: 12px;
    }

    label {
      font-size: 14px;
      color: var(--secondary-text);
      margin-bottom: 4px;
      display: block;
    }

    input[type="text"],
    input[type="email"],
    textarea {
      width: 100%;
      padding: 8px;
      border: 1px solid var(--border-separator);
      border-radius: 4px;
      font-size: 14px;
      transition: border-color 0.2s;

      &:focus {
        border-color: var(--ring);
        outline: none;
      }
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
