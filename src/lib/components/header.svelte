<script>
  import { onMount } from "svelte";
  import DarkModeToggle from "./dark-mode-toggle.svelte";

  let activeLink = null;
  let sideNavOpen = false;

  let header;

  const toggleSideNav = () => {
    sideNavOpen = !sideNavOpen;
  };

  const addBorderOnScroll = () => {
    if (window.scrollY > 50) {
      header.style.boxShadow = "0px 29px 21px -8px rgba(0, 0, 0, 0.1)";
    } else {
      header.style.boxShadow = "none";
    }
  };

  onMount(() => {
    window.addEventListener("scroll", addBorderOnScroll);

    return () => {
      window.removeEventListener("scroll", addBorderOnScroll);
    };
  });
</script>

<header bind:this={header}>
  <DarkModeToggle />

  <nav class="container">
    <a href="/">
      <img src="/images/logo_edg.svg" class="logo" alt="logo" />
    </a>

    <button
      class="burger-menu"
      on:click={toggleSideNav}
      aria-label="Toggle navigation"
    >
      <i class="fa-regular fa-compass"></i>
    </button>

    <div class="side_nav" class:open={sideNavOpen}>
      <ul class="nav_links">
        <li class:active={activeLink === "projets"}>
          <a href="#projects" on:click={() => handleNavClick("projets")}>
            PROJETS
          </a>
        </li>
        <li class:active={activeLink === "competences"}>
          <a href="#competence" on:click={() => handleNavClick("competences")}>
            COMPÉTENCES
          </a>
        </li>
        <li class:active={activeLink === "contact"}>
          <a href="#contact" on:click={() => handleNavClick("contact")}>
            ME CONTACTER
          </a>
        </li>
      </ul>
    </div>
  </nav>
</header>

<style lang="scss">
  header {
    // backdrop-filter: blur(10px);

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
      background: rgba(255, 255, 255, 0.1);
      transition: 0.5s;
      backdrop-filter: blur(10px);
      height: 100%;
      width: 100%;

      &.open {
        top: 0;
      }

      .nav_links {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 130px;
        height: 100%;

        li {
          width: 100%;
          padding: 30px;
          text-align: center;
          transition: box-shadow 0.3s ease;
          position: relative;

          span {
            cursor: default;
          }

          &:hover {
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          }

          a {
            color: var(--secondary-text);
            transition: color 0.65s ease;
            font-size: 20px;
          }
        }
      }
    }
  }
</style>
