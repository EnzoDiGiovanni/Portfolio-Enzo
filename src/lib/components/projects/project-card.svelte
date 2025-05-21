<script>
  import { onMount } from "svelte";

  const { title, desc, imgSrc } = $props();

  let color = $state();

  const colors = [
    "#611623",
    "#72232D",
    "#8C333A",
    "#B54548",
    "#FF9592",
    "#E5484D",
  ];

  onMount(() => {
    color = colors[Math.floor(Math.random() * colors.length)];
  });

  onMount(async () => {
    if (typeof window !== "undefined") {
      const ScrollReveal = (await import("scrollreveal")).default;
      ScrollReveal().reveal(".anim-r", {
        duration: 1200,
        origin: "bottom",
        distance: "80px",
        easing: "cubic-bezier(0.6, 0.2, 0.1, 1)",
      });
    }
  });
</script>

<div class="card anim-r" style:--bg={color}>
  <div class="card-content">
    <div class="card-img">
      <img src={imgSrc} alt={title} />
    </div>
    <div class="card-info">
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  </div>
</div>

<style lang="scss">
  .card {
    position: relative;
    background: var(--background);
    border: 1px solid var(--ring);
    border-radius: 16px;
    overflow: hidden;
    transition: box-shadow 0.3s ease;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
    }

    .card-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 2rem;
      width: 100%;
      height: 100%;
      background: linear-gradient(to top right, var(--bg), transparent 50%);
    }

    .card-img {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;

      img {
        max-width: 100%;
        max-height: 180px;
        object-fit: contain;
        transition: transform 0.4s ease;
      }

      &:hover img {
        transform: scale(1.05);
      }
    }

    .card-info {
      flex: none;
      margin-top: 1rem;

      h2 {
        font-size: 2rem;
        margin-bottom: 0.5rem;
        color: var(--high-contrast-text);
      }

      p {
        font-size: 1rem;
        color: var(--secondary-text);
      }
    }
  }
</style>
