<script>
  import DarkModeToggle from "./dark-mode-toggle.svelte";

  let activeLink = null;
  let sideNavOpen = false;
  let nameHeaderVisible = false;

  // Fonction pour gérer le clic sur un lien de navigation
  const handleNavClick = (link) => {
    activeLink = link;
    nameHeaderVisible = activeLink === "active";
  };

  // Fonction pour basculer le menu burger
  const toggleSideNav = () => {
    sideNavOpen = !sideNavOpen;
  };
</script>

<header>
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
          <span class="rocket">🚀</span><a
            href="#projects"
            on:click={() => handleNavClick("projets")}>PROJETS</a
          >
          <span class="rocket">🚀</span>
        </li>
        <li class:active={activeLink === "competences"}>
          <span class="gear">⚙️</span><a
            href="#competence"
            on:click={() => handleNavClick("competences")}>COMPÉTENCES</a
          >
          <span class="gear">⚙️</span>
        </li>
        <li class:active={activeLink === "contact"}>
          <span class="phone">📞</span><a
            href="#contact"
            on:click={() => handleNavClick("contact")}>ME CONTACTER</a
          >
          <span class="phone">📞</span>
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
          animation: spin 7s linear infinite;
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

      .side_nav {
        overflow: hidden;
        position: fixed;
        top: 0;
        right: -250px;
        background: rgba(255, 255, 255, 0.1);
        transition: 0.5s;
        backdrop-filter: blur(10px);
        height: 100%;
        width: 250px;

        &.open {
          right: 0;
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

            .rocket {
              &:nth-child(1) {
                position: absolute;
                top: 20px;
                left: 20px;
                color: var(--button);
                transition:
                  transform 0.7s ease,
                  font-size 0.7s ease-in-out;
                transform: translate(0, 0);
              }
              &:nth-child(3) {
                position: absolute;
                bottom: 20px;
                right: 20px;
                color: var(--button);
                transition:
                  transform 0.7s ease,
                  font-size 0.7s ease-in-out;
                transform: translate(0, 0);
              }
            }

            .gear {
              &:nth-child(1) {
                position: absolute;
                top: 20px;
                left: 20px;
                color: var(--button);
                transition: transform 0.7s ease;
              }
              &:nth-child(3) {
                position: absolute;
                bottom: 20px;
                right: 20px;
                color: var(--button);
                transition: transform 0.7s ease;
              }
            }

            .phone {
              &:nth-child(1) {
                position: absolute;
                top: 20px;
                left: 20px;
                color: var(--button);
                transition: transform 0.7s ease;
              }
              &:nth-child(3) {
                position: absolute;
                bottom: 20px;
                right: 20px;
                color: var(--button);
                transition: transform 0.7s ease;
              }
            }

            &:hover {
              box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

              .rocket {
                &:nth-child(1) {
                  transform: translate(180px, 7px) rotate(90deg);
                  font-size: 35px;
                }
                &:nth-child(3) {
                  transform: translate(-180px, -7px) rotate(-90deg);
                  font-size: 35px;
                }
              }

              .gear {
                &:nth-child(1) {
                  transform: rotate(100deg) scale(1.4);
                }
                &:nth-child(3) {
                  transform: rotate(-100deg) scale(1.4);
                }
              }

              .phone {
                &:nth-child(1) {
                  animation: vibrate 0.5s ease infinite;
                }
                &:nth-child(3) {
                  animation: vibrate 0.5s ease infinite;
                }
              }

              a {
                color: var(--high-contrast-text);
              }
            }

            a {
              transition: color 0.65s ease;
              font-size: 20px;
            }
          }
        }
      }
    }

    .side_nav {
      overflow: hidden;
      position: fixed;
      top: 0;
      right: -250px;
      background: rgba(255, 255, 255, 0.1);
      transition: 0.5s;
      backdrop-filter: blur(10px);
      height: 100%;
      width: 250px;

      &.open {
        right: 0;
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

          .rocket {
            &:nth-child(1) {
              position: absolute;
              top: 20px;
              left: 20px;
              color: var(--button);
              transition:
                transform 0.7s ease,
                font-size 0.7s ease-in-out;
              transform: translate(0, 0);
            }
            &:nth-child(3) {
              position: absolute;
              bottom: 20px;
              right: 20px;
              color: var(--button);
              transition:
                transform 0.7s ease,
                font-size 0.7s ease-in-out;
              transform: translate(0, 0);
            }
          }

          .gear {
            &:nth-child(1) {
              position: absolute;
              top: 20px;
              left: 20px;
              color: var(--button);
              transition: transform 0.7s ease;
            }
            &:nth-child(3) {
              position: absolute;
              bottom: 20px;
              right: 20px;
              color: var(--button);
              transition: transform 0.7s ease;
            }
          }

          .phone {
            &:nth-child(1) {
              position: absolute;
              top: 20px;
              left: 20px;
              color: var(--button);
              transition: transform 0.7s ease;
            }
            &:nth-child(3) {
              position: absolute;
              bottom: 20px;
              right: 20px;
              color: var(--button);
              transition: transform 0.7s ease;
            }
          }

          &:hover {
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

            .rocket {
              &:nth-child(1) {
                transform: translate(180px, 7px) rotate(90deg);
                font-size: 35px;
              }
              &:nth-child(3) {
                transform: translate(-180px, -7px) rotate(-90deg);
                font-size: 35px;
              }
            }

            .gear {
              &:nth-child(1) {
                transform: rotate(100deg) scale(1.4);
              }
              &:nth-child(3) {
                transform: rotate(-100deg) scale(1.4);
              }
            }

            .phone {
              &:nth-child(1) {
                animation: vibrate 0.5s ease infinite;
              }
              &:nth-child(3) {
                animation: vibrate 0.5s ease infinite;
              }
            }

            a {
              color: var(--high-contrast-text);
            }
          }

          a {
            transition: color 0.65s ease;
            font-size: 20px;
          }
        }
      }
    }
  }
</style>
