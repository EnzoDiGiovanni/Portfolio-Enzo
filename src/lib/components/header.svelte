<script>
  import DarkModeToggle from "./dark-mode-toggle.svelte";

  let activeLink = null;
  let sideNavOpen = false;

  let header;

  const toggleSideNav = () => {
    sideNavOpen = !sideNavOpen;
  };
</script>

<header bind:this={header}>
  <nav class="container">
    <a href="/">
      <img src="/images/logo_edg.svg" class="logo" alt="logo" />
    </a>

    <div class="wrapper">
      <DarkModeToggle />

      <button
        class="burger-menu"
        on:click={toggleSideNav}
        aria-label="Toggle navigation"
      >
        <i class="fa-regular fa-compass"></i>
      </button>
    </div>

    <div class="side_nav" class:open={sideNavOpen}>
      <ul class="nav_links">
        <li class:active={activeLink === "projets"}>
          <a href="#projects">
            PROJETS <i class="fa-solid fa-arrow-right"></i>
          </a>
        </li>
        <li class:active={activeLink === "competences"}>
          <a href="#competence">
            COMPÉTENCES <i class="fa-solid fa-arrow-right"></i>
          </a>
        </li>
        <li class:active={activeLink === "contact"}>
          <a href="#contact">
            ME CONTACTER <i class="fa-solid fa-arrow-right"></i>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</header>

<style lang="scss">
  header {
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: transparent;
    transition: box-shadow 0.3s ease;

    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 30px;

      img {
        width: 70px;
        transition: transform 0.5s ease-out;
        cursor: pointer;
      }

      .wrapper {
        display: flex;
        gap: 20px;
      }

      .burger-menu {
        background: transparent;
        border: none;
        z-index: 10;

        .fa-compass {
          font-size: 50px;
          color: var(--button);
          animation: compass_spin 7s linear infinite;
          cursor: pointer;
          transition:
            rotate 0.3s ease,
            color 0.3s ease;

          &:hover {
            rotate: 360deg;
            font-weight: bold;
            color: var(--ring);
          }
        }
      }
    }

    .side_nav {
      overflow: hidden;
      position: fixed;
      top: -100%;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: var(--background);
      transition: 0.5s;
      backdrop-filter: blur(10px);
      height: 100%;
      width: 100%;

      &.open {
        top: 0;
      }

      .nav_links {
        padding: 40px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        height: 100%;

        li {
          padding: 30px;
          text-align: center;
          transition: box-shadow 0.3s ease;
          position: relative;
          overflow: hidden;

          span {
            cursor: default;
          }

          a {
            display: block;
            color: var(--secondary-text);
            transition: color 0.65s ease;
            font-size: 20px;
            width: 100%;

            .fa-arrow-right {
              transition: all 0.2s ease;
              transform: rotate(320deg);
              visibility: hidden;
              opacity: 0;

              transform: translate(30px, 0px);
              rotate: 320deg;
            }

            &:hover .fa-arrow-right {
              visibility: visible;
              opacity: 1;
              transform: translate(0, 0);
            }
          }
        }
      }
    }
  }
</style>
