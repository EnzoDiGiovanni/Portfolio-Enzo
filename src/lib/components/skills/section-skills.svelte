<section class="skills" id="competence">
  <h2>Mes Compétences</h2>

  <div class="skills-grid">
    <div class="skill-category">
      <h3>Front-end</h3>
      <div class="skills-list">
        <div class="skill-item">
          <img src="/images/html.svg" alt="HTML" />
          <span>HTML</span>
        </div>
        <div class="skill-item">
          <img src="/images/scss.svg" alt="SCSS" />
          <span>SCSS</span>
        </div>
        <div class="skill-item">
          <img src="/images/tailwind.webp" alt="Tailwind" />
          <span>Tailwind</span>
        </div>
        <div class="skill-item">
          <img src="/images/javascript.webp" alt="JavaScript" />
          <span>JavaScript</span>
        </div>
        <div class="skill-item">
          <img src="/images/svelte.webp" alt="Angular" />
          <span>Svelte</span>
        </div>
        <div class="skill-item">
          <img src="/images/vue.webp" alt="Angular" />
          <span>Vue</span>
        </div>
      </div>
    </div>

    <div class="skill-category">
      <h3>Back-end</h3>
      <div class="skills-list">
        <div class="skill-item">
          <img src="/images/php.svg" alt="PHP" />
          <span>PHP</span>
        </div>
        <div class="skill-item">
          <img src="/images/laravel.svg" alt="Laravel" />
          <span>Laravel</span>
        </div>
        <div class="skill-item">
          <img src="/images/mysql.webp" alt="MySQL" />
          <span>MySQL</span>
        </div>
      </div>
    </div>

    <div class="skill-category">
      <h3>Outils</h3>
      <div class="skills-list">
        <div class="skill-item">
          <img src="/images/git.svg" alt="Git" />
          <span>Git</span>
        </div>
        <div class="skill-item">
          <img src="/images/vscode.webp" alt="VS Code" />
          <span>VS Code</span>
        </div>
        <div class="skill-item">
          <img src="/images/phpstorm.webp" alt="VS Code" />
          <span>Php Storm</span>
        </div>
        <div class="skill-item">
          <img src="/images/postman.webp" alt="Postman" />
          <span>Postman</span>
        </div>
        <div class="skill-item">
          <img src="/images/figma.webp" alt="Figma" />
          <span>Figma</span>
        </div>
        <div class="skill-item">
          <img src="/images/trello.svg" alt="Trello" />
          <span>Trello</span>
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  .skills {
    padding: 100px 20px;
    background: var(--background);
    text-align: center;

    h2 {
      font-size: 3rem;
      color: var(--high-contrast-text);
      margin-bottom: 4rem;
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 3rem;
    }

    .skill-category {
      background: linear-gradient(135deg, var(--interactive), var(--ring));
      padding: 2rem;
      border-radius: 18px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
      }

      h3 {
        font-size: 2rem;
        margin-bottom: 2rem;
        color: var(--high-contrast-text);
      }

      .skills-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1.5rem;

        .skill-item {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--ring);
          border-radius: 12px;
          padding: 1rem;
          width: 100px;
          height: 120px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;

          img {
            width: 40px;
            height: 40px;
            margin-bottom: 0.5rem;
          }

          span {
            font-size: 0.9rem;
            font-weight: 600;
            color: var(--secondary-text);
          }

          &:hover {
            background: var(--button);
            transform: translateY(-5px) scale(1.05);

            span {
              color: var(--high-contrast-text);
            }
          }
        }
      }
    }

    @media (max-width: 600px) {
      h2 {
        font-size: 2.2rem;
      }
      .skill-category h3 {
        font-size: 1.6rem;
      }
    }
  }
</style>
