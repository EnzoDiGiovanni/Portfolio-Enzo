<script>
  import { onMount } from "svelte";
  import DarkModeToggle from "./dark-mode-toggle.svelte";

  let menuOpen = false;
  let scrolled = false;

  const toggleMenu = () => {
    menuOpen = !menuOpen;
  };

  const closeMenu = () => {
    menuOpen = false;
  };

  onMount(() => {
    const onScroll = () => {
      scrolled = window.scrollY > 10;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });
</script>

<header class:scrolled>
  <nav class="nav-container">
    <a href="/" class="logo-area">
      <img src="/images/logo_edg.svg" alt="Logo" class="logo" />
    </a>

    <div class="links-area">
      <ul class:open={menuOpen}>
        <li><a href="/#projects" on:click={closeMenu}>Projets</a></li>
        <li><a href="/#competence" on:click={closeMenu}>Compétences</a></li>
        <li><a href="/#contact" on:click={closeMenu}>Contact</a></li>
      </ul>

      <DarkModeToggle />

      <button
        class="menu-toggle"
        on:click={toggleMenu}
        aria-label="Ouvrir le menu"
      >
        <i class="fa-solid fa-bars"></i>
      </button>
    </div>
  </nav>
</header>

<style lang="scss">
  header {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    background: var(--background);
    padding: 1.5rem 2rem;
    transition: all 0.3s ease;
    box-shadow: none;

    &.scrolled {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      backdrop-filter: blur(10px);
    }

    .nav-container {
      max-width: 1400px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .logo-area {
      display: flex;
      align-items: center;

      .logo {
        height: 50px;
        transition: transform 0.3s ease;

        &:hover {
          transform: scale(1.1) rotate(-5deg);
        }
      }
    }

    .links-area {
      display: flex;
      align-items: center;
      gap: 2rem;
      position: relative;

      ul {
        display: flex;
        gap: 2rem;
        list-style: none;
        align-items: center;

        li {
          a {
            text-decoration: none;
            color: var(--high-contrast-text);
            font-weight: 500;
            letter-spacing: 0.05rem;
            padding: 0.5rem 1rem;
            border-radius: 30px;
            transition: all 0.3s ease;

            &:hover {
              background: var(--ring);
              color: var(--background);
            }
          }
        }
      }

      .menu-toggle {
        display: none;
        background: none;
        border: none;
        font-size: 2rem;
        color: var(--high-contrast-text);
        cursor: pointer;
      }
    }

    @media (max-width: 768px) {
      .links-area {
        ul {
          display: none;
          position: absolute;
          top: 70px;
          right: 0;
          flex-direction: column;
          background: var(--background);
          width: 200px;
          padding: 1rem;
          border-radius: 10px;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);

          &.open {
            display: flex;
          }

          li {
            margin-bottom: 1rem;

            a {
              font-size: 1rem;
            }
          }
        }

        .menu-toggle {
          display: block;
        }
      }
    }
  }
</style>
