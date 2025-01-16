<style lang="scss">
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
