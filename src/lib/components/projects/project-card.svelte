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
</script>

<div class="card" style:--bg={color}>
  <div class="card-title">
    <h2>{title}</h2>
    <p>{desc}</p>
  </div>

  <div class="card-img">
    <img src={imgSrc} alt="" />
  </div>
</div>

<style lang="scss">
  .card {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    border: 1px solid var(--border-separator);
    height: 720px;
    z-index: 2;

    &::before {
      content: "";
      display: block;
      width: 100%;
      height: 0;
      background: var(--bg);
      position: absolute;
      top: 0;
      left: 0;
      transition: all 0.7s ease-in-out;
      z-index: -1;
    }

    .card-title {
      h2 {
        color: var(--high-contrast-text);
        margin-top: 30px;
        text-align: center;
      }

      p {
        color: var(--secondary-text);
        text-align: center;
        margin-bottom: 30px;
      }
    }

    .card-img {
      width: 60%;
      height: 60%;
      transition: all 0.7s ease-in-out;
      padding: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;

      img {
        width: 80%;
        height: 80%;
        object-fit: cover;
        transition: all 0.5s ease-in-out;
      }
    }

    &:hover {
      &::before {
        height: 100%;
      }
      .card-img {
        width: 90%;
        height: 70%;
      }

      img {
        transform: scale(1.2);
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
