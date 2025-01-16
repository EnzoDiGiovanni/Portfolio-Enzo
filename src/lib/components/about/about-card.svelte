<script>
  const { title, desc } = $props();

  import { onMount } from "svelte";
  onMount(async () => {
    if (typeof window !== "undefined") {
      const ScrollReveal = (await import("scrollreveal")).default;

      ScrollReveal().reveal(".card-anim", {
        duration: 1700,
        origin: "right",
        distance: "200px",
        easing: "cubic-bezier( 0.6, 0.2, 0.1, 1 )",
      });
    }
  });
</script>

<div class="card card-anim">
  <h3>{title}</h3>
  <p>
    {desc}
  </p>
</div>

<style lang="scss">
  .card {
    padding: 10%;

    border-radius: 10px;
    max-width: 35rem;
    min-width: 10rem;

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
