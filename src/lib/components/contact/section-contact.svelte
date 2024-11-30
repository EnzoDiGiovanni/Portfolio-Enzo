<script>
</script>

<form name="contact" id="contact" netlify method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  <div class=" wrapper">

    <p>
      <label>Votre nom : <input type="text" name="name" placeholder="Enzo"/></label>
    </p>
    <p>
      <label>Votre email : <input type="email" name="email" placeholder="Di Giovanni" /></label>
    </p>
  </div>
    <p>
      <label>Message : <textarea name="message" placeholder="La raison de votre message"></textarea></label>
    </p>
  <p>
    <button type="submit">Envoyer</button>
  </p>
</form>

<style lang="scss">
  form {
    width: 80%;
    margin: 0 auto;
    padding: 20px;
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
      border: 1px solid var(--border-separator);
      border-radius: 4px;
      font-size: 14px;
      transition: border-color 0.2s;

      &:focus {
        border-color: var(--ring);
        outline: none;
      }
    }

    input, textarea {
      margin-top: 20px;
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
