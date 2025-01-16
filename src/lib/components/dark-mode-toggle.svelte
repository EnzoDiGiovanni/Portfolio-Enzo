<script>
  import { onMount } from "svelte";
  let isDarkMode = false;

  onMount(() => {
    const darkModeSetting = localStorage.getItem("dark-mode");
    isDarkMode = darkModeSetting === "active";
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    }
  });

  function toggleDarkMode() {
    isDarkMode = !isDarkMode;

    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("dark-mode", "active");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("dark-mode", "inactive");
    }
  }
</script>

<button id="theme-switch" aria-label="button" on:click={toggleDarkMode}>
  {#if isDarkMode}
    <i class="fa-solid fa-sun"></i>
  {:else}
    <i class="fa-solid fa-moon"></i>
  {/if}
</button>

<style lang="scss">
  #theme-switch {
    cursor: pointer;
    width: 50px;
    height: 50px;
    padding: 0;
    border: none;
    border-radius: 50%;
    background-color: var(--interactive);
    display: flex;
    align-items: center;
    justify-content: center;

    transition: transform 0.2s;

    &:hover {
      transform: scale(1.2) rotate(-50deg);
    }

    i {
      color: var(--secondary-text);
      font-size: 25px;
    }
  }
</style>
