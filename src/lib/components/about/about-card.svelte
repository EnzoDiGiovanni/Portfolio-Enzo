<script>
  const { title, desc } = $props();
</script>

<div class="card">
  <h3>{title}</h3>
  <p>
    {desc}
  </p>
</div>

<style lang="scss">
  .card {
    padding: 10%;

    border-radius: 10px;
    max-width: 520px;
    min-width: 250px;

    h3 {
      font-size: 2rem;
      color: var(--high-contrast-text);
      margin-bottom: 20px;
      white-space: pre-wrap;
    }

    p {
      font-size: 1.2rem;
      color: var(--secondary-text);
      white-space: pre-wrap;
    }
  }
</style>
