<script>
  import Parallax from "./parallax.svelte";
</script>

<div class="scroller"></div>
<div class="bubble"></div>
<div class="bubble"></div>

<div class="illustration">
  <Parallax parallaxRatio={0.3}>
    <img
      src="/images/square1.png"
      width="30px"
      height="30px"
      class="illustration__square1"
      alt="illustration"
    />
  </Parallax>

  <Parallax parallaxRatio={-0.45}>
    <img
      src="/images/square2.webp"
      width="30px"
      height="30px"
      class="illustration__square2"
      alt="illustration"
    />
  </Parallax>

  <Parallax parallaxRatio={0.35}>
    <img
      src="/images/cool.webp"
      width="30px"
      height="30px"
      class="illustration__cool"
      alt="illustration"
    />
  </Parallax>
</div>

<style lang="scss">
  .bubble {
    position: absolute;
    width: 25vw;
    height: 25vw;
    border-radius: 50%;
    background: var(--bubble);
    filter: blur(130px);
    opacity: 0.6;

    &:nth-child(1) {
      top: 5%;
      left: 5%;
    }
    &:nth-child(2) {
      top: 10%;
      right: 5%;
    }
  }

  .illustration {
    .illustration__square1 {
      position: absolute;
      top: 450px;
      left: 13%;
      z-index: 1;
    }
    .illustration__square2 {
      position: absolute;
      top: 360px;
      left: 20%;
      z-index: 1;
    }
    .illustration__cool {
      position: absolute;
      top: 140px;
      left: 80%;
      z-index: 1;
    }
  }

  .scroller {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    z-index: 1000;
    background: linear-gradient(
      to right,
      var(--interactive) 100%,
      rgba(255, 148, 166, 0) 100%
    );
    background-repeat: no-repeat;
    background-size: 0;
    transform-origin: left;
  }
</style>
