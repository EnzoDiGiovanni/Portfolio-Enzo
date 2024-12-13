<section class="skills" id="competence">
  <h2>Mes Compétences !</h2>
  <div class="front-end">
    <p>FRONT - END</p>
    <div class="skillsContainer">
      <div class="skill">
        <i class="fa-brands fa-html5"></i>
        <span>HTML</span>
      </div>
      <div class="skill">
        <i class="fa-brands fa-sass"></i>
        <span>SCSS</span>
      </div>
      <div class="skill">
        <i class="fa-brands fa-square-js"></i>
        <span>JAVASCRIPT</span>
      </div>
      
    </div>
  </div>
  <div class="back-end">
    <p>BACK - END</p>
    <div class="skillsContainer">
      <div class="skill">
        <i class="fa-brands fa-golang"></i>
        <span>GO</span>
      </div>
      <div class="skill">
        <i class="fa-brands fa-php"></i>

        <span>PHP</span>
      </div>
      
    </div>
  </div>
  <div class="mobile">
    <p>MOBILE</p>
    <div class="skillsContainer">
      <div class="skill">
        <i class="fa-brands fa-flutter"></i>
        <span>FLUTTER</span>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  .skills {
    padding: 155px 120px 120px 120px;

    h2 {
      color: var(--high-contrast-text);
      text-align: center;
    }

    p {
      color: var(--secondary-text);
      font-size: xx-large;
      padding: 0 0 30px 0;
      margin: 40px 0;
      border-bottom: 1px solid var(--border-separator);
      border-width: 2px;
    }

    i {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 60px;
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }

    .skillsContainer {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      place-items: start;
    }
    .front-end {
      .skill {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 20px;

        &:nth-child(1) {
          i {
            color: #e65000;
          
          }
          span {
            color: #e65000;
          }
        }

        &:nth-child(2) {
          i {
            color: #ec407a;
           
          }
          span {
            color: #ec407a;
          }
        }
        &:nth-child(3) {
          i {
            color: #efd81b;
          
          }
          span {
            color: #efd81b;
          }
        }
        
      }
    }
    .back-end {
      .skill {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 20px;

        &:nth-child(1) {
          i {
            color: #00AED8;


          }
          span {
            color: #00AED8;
          }
        }
        &:nth-child(2) {
          i {
            color: #7a86b8;
          }
          span {
            color: #7a86b8;
          }
        }
    }

    
  }
  .mobile {
      .skill {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 20px;
        &:nth-child(1) {
          i {
            color: #5dc7f8;
         
          }
          span {
            color: #5dc7f8;
          }
        }
      }
    }
}
</style>
