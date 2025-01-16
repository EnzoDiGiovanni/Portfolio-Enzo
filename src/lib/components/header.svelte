<script>
  import { onMount } from "svelte";
  import DarkModeToggle from "./dark-mode-toggle.svelte";

  let activeLink = null;
  let sideNavOpen = false;
  let scrolled = false;

  const toggleSideNav = () => {
    sideNavOpen = !sideNavOpen;
  };

  const closeSideNav = () => {
    sideNavOpen = false;
  };

  onMount(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 0;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
</script>

<header id="header" class:scrolled>
  <nav class="container">
    <a href="/">
      <img src="/images/logo_edg.svg" class="logo" alt="logo" />
    </a>

    <div class="wrapper interactif">
      <DarkModeToggle />

      <button
        class="burger-menu"
        on:click={toggleSideNav}
        aria-label="Toggle navigation"
      >
        <i class="fa-regular fa-compass"></i>
      </button>
    </div>

    <div class="side_nav {sideNavOpen ? 'open' : ''}">
      <ul class="nav_links">
        <li class:active={activeLink === "projets"}>
          <a href="/#projects" on:click={closeSideNav}> PROJETS </a>
        </li>
        <li class:active={activeLink === "competences"}>
          <a href="/#competence" on:click={closeSideNav}> COMPÉTENCES </a>
        </li>
        <li class:active={activeLink === "contact"}>
          <a href="/#contact" on:click={closeSideNav}> ME CONTACTER </a>
        </li>
      </ul>
    </div>
  </nav>
</header>

<style lang="scss">
  #header {
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: var(--background);
    box-shadow: none;
    transition: box-shadow 0.3s ease;

    &.scrolled {
      box-shadow: 0 2px 10px var(--ring);
    }

    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 30px 15px;
      margin: 0 30px;

      .logo {
        width: 50px;
        cursor: pointer;
        transition: transform 0.3s ease;

        &:hover {
          transform: scale(1.2) rotate(-5deg);
        }
      }

      .wrapper {
        display: flex;
        align-items: center;
        gap: 20px;
      }

      .burger-menu {
        background: transparent;
        border: none;
        z-index: 10;
        transition: transform 0.3s ease-in-out;

        &:hover {
          transform: scale(1.2) rotate(-5deg);
        }

        .fa-compass {
          font-size: 50px;
          color: var(--button);
          animation: compass_spin 7s linear infinite;
          cursor: pointer;
          transition:
            rotate 0.3s ease,
            color 0.3s ease;

          &:hover {
            rotate: 200deg;
            font-weight: bold;
            color: var(--ring);
          }
        }
      }
    }

    .side_nav {
      position: fixed;
      top: -100%;
      left: 0;
      width: 100%;
      height: 100%;
      backdrop-filter: blur(15px);
      transition: top 0.6s ease-in-out;
      display: flex;
      align-items: center;
      justify-content: center;

      &.open {
        top: 0;
      }

      .nav_links {
        display: flex;
        flex-direction: column;
        list-style: none;
        padding: 0;
        text-align: center;

        li {
          margin: 20px 0;
          font-size: 24px;
          font-weight: bold;

          a {
            color: var(--high-contrast-text);
            text-transform: uppercase;
            letter-spacing: 2px;
            padding: 12px 30px;
            border-radius: 50px;
            border: 2px solid var(--ring);
            transition: all 0.4s ease-in-out;

            &:hover {
              background: var(--ring);
              color: var(--background);
              transform: scale(1.1);
            }
          }
        }
      }
    }
  }
</style>
