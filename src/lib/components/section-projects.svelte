<script>
  import anime from "animejs";
  import { onMount } from "svelte";
  let projectsNumber;

  onMount(() => {
    // Animation de dessin de ligne
    anime({
      targets: ".line-drawing path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 1000,
      delay: function (el, i) {
        return i * 250;
      },
      direction: "alternate",
      loop: false,
    });

    // Fonction pour démarrer l'animation de compteur
    const startAnimation = () => {
      anime
        .timeline({
          easing: "easeInOutSine",
          duration: 2000,
        })
        .add({
          targets: projectsNumber,
          innerHTML: [0, 10000],
          round: 1,
        })
        .add({
          targets: projectsNumber,
          innerHTML: [10000, 3],
          round: 1,
          duration: 1000,
          easing: "easeOutQuad",
        });
    };

    // Configurer l'IntersectionObserver pour lancer l'animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimation(); // Démarre l'animation quand visible
            observer.unobserve(entry.target); // Arrête l'observation
          }
        });
      },
      { threshold: 0.5 } // Active l'animation à moitié visible
    );

    // Observe l'élément
    observer.observe(projectsNumber);
  });
</script>

<section class="projects" id="projects">
  <div class="waveContainer">
    <div class="wave wave1"></div>
    <div class="wave wave2"></div>
    <div class="wave wave3"></div>
    <div class="wave wave4"></div>
    <svg
      id="visual"
      viewBox="0 0 900 600"
      width="900"
      height="600"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
    >
      <path
        d="M0 397L21.5 398.7C43 400.3 86 403.7 128.8 403.2C171.7 402.7 214.3 398.3 257.2 399.3C300 400.3 343 406.7 385.8 410.7C428.7 414.7 471.3 416.3 514.2 409.3C557 402.3 600 386.7 642.8 389C685.7 391.3 728.3 411.7 771.2 418.5C814 425.3 857 418.7 878.5 415.3L900 412L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
        fill="#fa7268"
      ></path><path
        d="M0 396L21.5 406.5C43 417 86 438 128.8 443.2C171.7 448.3 214.3 437.7 257.2 440.8C300 444 343 461 385.8 459.8C428.7 458.7 471.3 439.3 514.2 428.8C557 418.3 600 416.7 642.8 424.8C685.7 433 728.3 451 771.2 453.7C814 456.3 857 443.7 878.5 437.3L900 431L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
        fill="#ef5f67"
      ></path><path
        d="M0 496L21.5 493.7C43 491.3 86 486.7 128.8 487C171.7 487.3 214.3 492.7 257.2 487.3C300 482 343 466 385.8 460C428.7 454 471.3 458 514.2 462C557 466 600 470 642.8 475.5C685.7 481 728.3 488 771.2 493C814 498 857 501 878.5 502.5L900 504L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
        fill="#e34c67"
      ></path><path
        d="M0 519L21.5 517C43 515 86 511 128.8 511.8C171.7 512.7 214.3 518.3 257.2 516.5C300 514.7 343 505.3 385.8 506.5C428.7 507.7 471.3 519.3 514.2 518.5C557 517.7 600 504.3 642.8 499.7C685.7 495 728.3 499 771.2 504.3C814 509.7 857 516.3 878.5 519.7L900 523L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
        fill="#d53867"
      ></path><path
        d="M0 558L21.5 559.7C43 561.3 86 564.7 128.8 560.7C171.7 556.7 214.3 545.3 257.2 539.7C300 534 343 534 385.8 534.2C428.7 534.3 471.3 534.7 514.2 540.2C557 545.7 600 556.3 642.8 557.3C685.7 558.3 728.3 549.7 771.2 543.5C814 537.3 857 533.7 878.5 531.8L900 530L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
        fill="#c62368"
      ></path></svg
    >
  </div>

  <h2>Mes projets !</h2>

  <p>
    Voici mes <br />
    <span bind:this={projectsNumber} class="projectsNumber">3</span> <br />
    meilleurs projets :)
  </p>

  <div class="cards__container">
    <div class="card">
      <div class="wrapper">
        <img src="/images/pokedex.webp" loading="lazy" alt="Projects images" />
        <h4>Pokedex</h4>
        <p>
          Dans le cadre de mes projets personnels et de mes premiers pas dans
          les API, j'ai décidé de faire un Pokedex avec l'API française !
        </p>
      </div>

      <div class="stack__used">
        <ul>
          <li data-info="HTML" style="--accent-color: #e65000">
            <i class="fa-brands fa-html5"></i>
          </li>
          <li data-info="SCSS" style="--accent-color: #ec407a">
            <i class="fa-brands fa-sass"></i>
          </li>
          <li data-info="JAVASCRIPT" style="--accent-color: #efd81b">
            <i class="fa-brands fa-square-js"></i>
          </li>
          <li data-info="API" style="--accent-color: #535870">
            <i class="fa-solid fa-bezier-curve"></i>
          </li>
        </ul>
      </div>
      <div class="card__button">
        <a href="https://github.com/EnzoDiGiovanni/pokedex">
          <button class="button">
            GitHub <i class="fa-brands fa-square-github"></i>
          </button>
        </a>
        <a href="https://enzodigiovanni.github.io/pokedex/">
          <button class="button">
            Découvrir <i class="fa-solid fa-play"></i>
          </button>
        </a>
      </div>
    </div>
    <div class="card">
      <div class="wrapper">
        <img
          src="/images/firstPortfolio.webp"
          loading="lazy"
          alt="Projects Images"
        />
        <h4>Premier Portfolio</h4>
        <p>
          Passage obligatoire de tout développeur ! Découvrez mon premier
          portfolio :)
        </p>
      </div>

      <div class="stack__used">
        <ul>
          <li data-info="HTML" style="--accent-color: #e65000">
            <i class="fa-brands fa-html5"></i>
          </li>
          <li data-info="SCSS" style="--accent-color: #ec407a">
            <i class="fa-brands fa-sass"></i>
          </li>
          <li data-info="JAVASCRIPT" style="--accent-color: #efd81b">
            <i class="fa-brands fa-square-js"></i>
          </li>
        </ul>
      </div>
      <div class="card__button">
        <a href="https://github.com/EnzoDiGiovanni/website">
          <button class="button">
            GitHub <i class="fa-brands fa-square-github"></i>
          </button>
        </a>
        <a href="enzodigiovanni.fr/">
          <button class="button">
            Découvrir <i class="fa-solid fa-play"></i>
          </button>
        </a>
      </div>
    </div>
    <div class="card">
      <div class="wrapper">
        <img
          src="/images/arcadegame.webp"
          loading="lazy"
          alt="Projects Images"
        />
        <h4>Arcade Games</h4>
        <p>
          Ce projet a été mon premier gros projet. Tout est parti de l'amour que
          je porte à ces vieux jeux !
        </p>
      </div>

      <div class="stack__used">
        <ul>
          <li data-info="HTML" style="--accent-color: #e65000">
            <i class="fa-brands fa-html5"></i>
          </li>
          <li data-info="SCSS" style="--accent-color: #ec407a">
            <i class="fa-brands fa-sass"></i>
          </li>
          <li data-info="JAVASCRIPT" style="--accent-color: #efd81b">
            <i class="fa-brands fa-square-js"></i>
          </li>
        </ul>
      </div>
      <div class="card__button">
        <a href="https://github.com/EnzoDiGiovanni/ArcadeGames">
          <button class="button">
            GitHub <i class="fa-brands fa-square-github"></i>
          </button>
        </a>
        <a href="enzodigiovanni.github.io/ArcadeGames/">
          <button class="button">
            Découvrir <i class="fa-solid fa-play"></i>
          </button>
        </a>
      </div>
    </div>
  </div>

  <a href="/projects">Clique ici</a>

  <div class="custom-shape-divider-bottom-1729860618">
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
        opacity=".25"
        class="shape-fill"
      ></path>
      <path
        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
        opacity=".5"
        class="shape-fill"
      ></path>
      <path
        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
        class="shape-fill"
      ></path>
    </svg>
  </div>
</section>

<style lang="scss">
  .projects {
    position: relative;
    background-color: var(--border-separator);

    h2 {
      text-align: center;
      color: var(--high-contrast-text);
      padding: 60px 0;
    }

    & > p {
      text-align: center;
      padding-bottom: 60px;
      font-size: 20px;

      span {
        margin: 20px 0;
        display: inline-block;
        width: 4ch;
        text-align: center;
      }
    }

    .waveContainer {
      position: absolute;
      top: -100px;
      left: 0;
      width: 100%;
      height: 100px;
      overflow: hidden;
      z-index: 1;

      .wave {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100px;
        background: url(/assets/images/Wave.webp);
        background-size: 1000px 100px;

        &.wave1 {
          animation: animate 50s linear infinite;
          animation-delay: 0s;
          z-index: 999;
          opacity: 1;
          top: 49.3%;
        }
        &.wave2 {
          animation: animate2 35s linear infinite;
          z-index: 998;
          opacity: 0.5;
          animation-delay: -5s;
          top: 49%;
        }
        &.wave3 {
          animation: animate 50s linear infinite;
          z-index: 997;
          opacity: 0.2;
          animation-delay: -2s;
          top: 49.1%;
        }
        &.wave4 {
          animation: animate2 15s linear infinite;
          z-index: 996;
          opacity: 0.6;
          animation-delay: -5s;
          top: 48.8%;
        }
      }
    }

    .custom-shape-divider-bottom-1729860618 {
      position: relative;
      bottom: -160px;
      left: 0;
      width: 100%;
      overflow: hidden;
      line-height: 0;
      transform: rotate(0deg);

      & svg {
        position: relative;
        display: block;
        width: calc(164% + 1.3px);
        height: 168px;
      }

      .shape-fill {
        fill: var(--border-separator);
      }
    }
  }
</style>
