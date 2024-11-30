import { K as escape_html, E as pop, B as push, N as add_styles, F as attr, O as ensure_array_like, G as stringify } from "../../chunks/index.js";
import "animejs";
import { p as projects } from "../../chunks/projects.js";
function About_card($$payload, $$props) {
  const { title, desc } = $$props;
  $$payload.out += `<div class="card svelte-8heef5"><h3 class="svelte-8heef5">${escape_html(title)}</h3> <p class="svelte-8heef5">${escape_html(desc)}</p></div>`;
}
function Section_about($$payload) {
  $$payload.out += `<section class="about-section svelte-ywh1ke"><h2 class="svelte-ywh1ke">À propos de moi !</h2> <div class="content-wrapper svelte-ywh1ke"><div class="profile-image svelte-ywh1ke"><img class="profile-picture svelte-ywh1ke" src="/images/profilpic.webp" loading="lazy" alt="Profil d'Enzo Di Giovanni"></div> <div class="info-cards svelte-ywh1ke">`;
  About_card($$payload, {
    title: "Bonjour, je m'appelle Enzo Di Giovanni",
    ",": true,
    desc: "Un futur développeur Full-Stack ! ☄️"
  });
  $$payload.out += `<!----> `;
  About_card($$payload, {
    title: "Depuis quand je code ?",
    ",": true,
    desc: "J'ai décidé de changer complètement de domaine après 2 ans de marketing et d'apprendre le développement web !\nAujourd'hui, ça fait 2 ans que je code en autodidacte et à l'école  👨🏽‍💻"
  });
  $$payload.out += `<!----> `;
  About_card($$payload, {
    title: "Ce que j'aime dans la vie ?",
    ",": true,
    desc: "J'adore le ski et les sports de combat ⛷️ 🤼\nJ'aime également apprendre toutes sortes de choses et sur n'importe quel sujet ! 🧠 "
  });
  $$payload.out += `<!----> `;
  About_card($$payload, {
    title: "Qu'est-ce que j'ai en plus ?",
    ",": true,
    desc: "Je suis soucieux d'apprendre et de bien faire, je m'efforce chaque jour de proposer la meilleure version de moi-même ! 💪🏽 "
  });
  $$payload.out += `<!----></div></div></section>`;
}
function Section_contact($$payload) {
  $$payload.out += `<form name="contact" id="contact" netlify="" method="POST" data-netlify="true" class="svelte-1i3p7n4"><input type="hidden" name="form-name" value="contact" class="svelte-1i3p7n4"> <div class="wrapper svelte-1i3p7n4"><p class="svelte-1i3p7n4"><label class="svelte-1i3p7n4">Votre nom : <input type="text" name="name" placeholder="Enzo" class="svelte-1i3p7n4"></label></p> <p class="svelte-1i3p7n4"><label class="svelte-1i3p7n4">Votre email : <input type="email" name="email" placeholder="Di Giovanni" class="svelte-1i3p7n4"></label></p></div> <p class="svelte-1i3p7n4"><label class="svelte-1i3p7n4">Message : <textarea name="message" placeholder="La raison de votre message" class="svelte-1i3p7n4"></textarea></label></p> <p class="svelte-1i3p7n4"><button type="submit" class="svelte-1i3p7n4">Envoyer</button></p></form>`;
}
function Homepage($$payload, $$props) {
  push();
  $$payload.out += `<div class="home-page svelte-16llmby"><h1 class="svelte-16llmby"><svg id="Calque_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 770.39 63.49" class="line-drawing svelte-16llmby"><defs><style>
          .cls-1 {
            z-index: 100;
            fill: none;
            stroke: var(--ring);
            stroke-width: 1;
            stroke-miterlimit: 10;
          }
        </style></defs><path class="cls-1" d="M.5.5h48.47v9.23H9.77v43.99h39.2v9.27H.5V.5ZM15.05,25.86h33.93v9.23H15.05v-9.23Z"></path><path class="cls-1" d="M60.4.5h12.04l27.2,49.09V.5h9.27v62.49h-12.04l-27.2-48.43v48.43h-9.27V.5Z"></path><path class="cls-1" d="M120.34,56.18l35.46-46.45h-35.46V.5h48.65v6.9l-35.38,46.45h35.2v9.14h-48.47v-6.81Z"></path><path class="cls-1" d="M180.41,18.08c0-3.25.84-6.2,2.53-8.85,1.68-2.65,3.93-4.77,6.75-6.35s5.93-2.37,9.36-2.37h14.63c3.43,0,6.55.79,9.38,2.37,2.83,1.58,5.08,3.7,6.75,6.35,1.67,2.65,2.5,5.6,2.5,8.85v27.33c0,3.22-.83,6.17-2.5,8.83-1.67,2.67-3.92,4.79-6.75,6.37-2.83,1.58-5.95,2.37-9.38,2.37h-14.63c-3.43,0-6.55-.79-9.36-2.37s-5.06-3.71-6.75-6.37c-1.69-2.67-2.53-5.61-2.53-8.83v-27.33ZM189.68,45.46c0,2.29.92,4.24,2.75,5.87,1.83,1.63,4.04,2.44,6.61,2.44h14.63c2.61,0,4.82-.81,6.64-2.44,1.82-1.63,2.72-3.58,2.72-5.87v-27.42c0-2.29-.91-4.24-2.72-5.87-1.82-1.63-4.03-2.44-6.64-2.44h-14.63c-2.58,0-4.78.81-6.61,2.44-1.83,1.63-2.75,3.58-2.75,5.87v27.42Z"></path><path class="cls-1" d="M270.98.5h33.22c3.25,0,6.22.79,8.9,2.37,2.68,1.58,4.81,3.7,6.39,6.35,1.58,2.65,2.37,5.6,2.37,8.85v27.51c0,3.19-.79,6.11-2.37,8.75s-3.71,4.74-6.39,6.31c-2.68,1.57-5.65,2.35-8.9,2.35h-33.22V.5ZM304.21,53.72c2.34,0,4.34-.81,5.98-2.42,1.64-1.61,2.46-3.56,2.46-5.84v-27.38c0-2.31-.82-4.28-2.46-5.91s-3.63-2.44-5.98-2.44h-23.95v43.99h23.95Z"></path><path class="cls-1" d="M333.3.5h9.27v62.49h-9.27V.5Z"></path><path class="cls-1" d="M380.36,18.08c0-3.25.84-6.2,2.53-8.85,1.68-2.65,3.93-4.77,6.74-6.35s5.93-2.37,9.36-2.37h29.58v9.23h-29.58c-2.58,0-4.78.81-6.61,2.44-1.83,1.63-2.75,3.58-2.75,5.87v27.42c0,2.29.92,4.24,2.75,5.87,1.83,1.63,4.04,2.44,6.61,2.44h14.63c2.61,0,4.82-.81,6.64-2.44s2.72-3.58,2.72-5.87v-8.17h-16.96v-9.23h26.24v17.36c0,3.22-.83,6.17-2.5,8.83-1.67,2.67-3.92,4.79-6.75,6.37s-5.95,2.37-9.38,2.37h-14.63c-3.43,0-6.55-.79-9.36-2.37s-5.06-3.71-6.74-6.37c-1.69-2.67-2.53-5.61-2.53-8.83v-27.33Z"></path><path class="cls-1" d="M443.69.5h9.27v62.49h-9.27V.5Z"></path><path class="cls-1" d="M465.27,18.08c0-3.25.84-6.2,2.53-8.85,1.68-2.65,3.93-4.77,6.75-6.35s5.93-2.37,9.36-2.37h14.63c3.43,0,6.55.79,9.38,2.37s5.08,3.7,6.75,6.35c1.67,2.65,2.5,5.6,2.5,8.85v27.33c0,3.22-.83,6.17-2.5,8.83-1.67,2.67-3.92,4.79-6.75,6.37s-5.95,2.37-9.38,2.37h-14.63c-3.43,0-6.55-.79-9.36-2.37s-5.06-3.71-6.75-6.37c-1.69-2.67-2.53-5.61-2.53-8.83v-27.33ZM474.54,45.46c0,2.29.92,4.24,2.75,5.87,1.83,1.63,4.04,2.44,6.61,2.44h14.63c2.61,0,4.82-.81,6.64-2.44s2.72-3.58,2.72-5.87v-27.42c0-2.29-.91-4.24-2.72-5.87s-4.03-2.44-6.64-2.44h-14.63c-2.58,0-4.78.81-6.61,2.44-1.83,1.63-2.75,3.58-2.75,5.87v27.42Z"></path><path class="cls-1" d="M533.2.5l18.28,51.24L569.72.5h9.89l-22.37,62.49h-11.56L523.32.5h9.89Z"></path><path class="cls-1" d="M597.15.5h11.56l22.37,62.49h-9.89l-6.81-18.81h-17.45l3.34-9.23h10.77l-8.09-22.32-18.28,50.36h-9.89L597.15.5Z"></path><path class="cls-1" d="M638.98.5h12.04l27.2,49.09V.5h9.27v62.49h-12.04l-27.2-48.43v48.43h-9.27V.5Z"></path><path class="cls-1" d="M699.8.5h12.04l27.2,49.09V.5h9.27v62.49h-12.04l-27.2-48.43v48.43h-9.27V.5Z"></path><path class="cls-1" d="M760.62.5h9.27v62.49h-9.27V.5Z"></path></svg></h1> <section class="info-section svelte-16llmby"><div class="location svelte-16llmby"><i class="fa-solid fa-location-dot svelte-16llmby"></i> <p class="svelte-16llmby">Lyon, Fr</p></div> <div class="availability svelte-16llmby"><p class="svelte-16llmby">Disponible pour travailler</p> <span class="status-indicator svelte-16llmby" aria-live="polite"></span></div></section> <section class="profile-section svelte-16llmby"><p class="role svelte-16llmby">Développeur Web</p> <div class="social-links svelte-16llmby"><a href="https://www.linkedin.com/in/enzodigiovanni/" aria-label="Lien vers mon profil LinkedIn" class="svelte-16llmby"><i class="fa-brands fa-linkedin svelte-16llmby"></i></a> <a href="https://github.com/EnzoDiGiovanni" aria-label="Lien vers mon profil Github" class="svelte-16llmby"><i class="fa-brands fa-square-github svelte-16llmby"></i></a></div></section> <p class="welcome-message svelte-16llmby">Bienvenue sur mon portfolio ! <span class="wave-emoji svelte-16llmby">👋🏽</span></p></div>`;
  pop();
}
function Min_elements($$payload) {
  $$payload.out += `<div class="scroller svelte-422nci"></div>`;
}
function Project_card($$payload, $$props) {
  push();
  const { title, desc, imgSrc } = $$props;
  let color = void 0;
  $$payload.out += `<div${add_styles({ "--bg": color })} class="card svelte-ysgc7h"><div class="card-title svelte-ysgc7h"><h2 class="svelte-ysgc7h">${escape_html(title)}</h2> <p class="svelte-ysgc7h">${escape_html(desc)}</p></div> <div class="card-img svelte-ysgc7h"><img${attr("src", imgSrc)} alt="" class="svelte-ysgc7h"></div></div>`;
  pop();
}
function Section_projects($$payload, $$props) {
  push();
  let selectedTech = "";
  const allTechnos = [
    ...new Set(Object.values(projects).flatMap((proj) => proj.technos))
  ];
  const each_array = ensure_array_like(allTechnos);
  const each_array_1 = ensure_array_like(Object.values(projects).filter((proj) => !selectedTech));
  $$payload.out += `<section id="projects" class="projects-section svelte-187aj3z"><header class="projects-header svelte-187aj3z"><h2 class="svelte-187aj3z">Projets</h2> <p class="svelte-187aj3z">Découvrez mes projets avec les différentes technologies/langages que
      j'aime utiliser !</p></header> <div class="projects-filter svelte-187aj3z"><ul class="svelte-187aj3z"><li class="svelte-187aj3z"><button type="button"${attr("class", `svelte-187aj3z ${stringify(["selected"].filter(Boolean).join(" "))}`)}>Tous</button></li> <!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let tech = each_array[$$index];
    $$payload.out += `<li class="svelte-187aj3z"><button type="button"${attr("class", `svelte-187aj3z ${stringify([selectedTech === tech ? "selected" : ""].filter(Boolean).join(" "))}`)}>${escape_html(tech)}</button></li>`;
  }
  $$payload.out += `<!--]--></ul></div> <div class="projects-grid svelte-187aj3z"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let project = each_array_1[$$index_1];
    $$payload.out += `<a${attr("href", project.link)}${attr("aria-label", `Détails du projet ${project.title}`)} class="svelte-187aj3z">`;
    Project_card($$payload, {
      title: project.title,
      desc: project.desc,
      imgSrc: project.imgSrc
    });
    $$payload.out += `<!----></a>`;
  }
  $$payload.out += `<!--]--></div></section>`;
  pop();
}
function Section_skills($$payload) {
  $$payload.out += `<section class="skills svelte-1yi9f8k" id="competence"><h2 class="svelte-1yi9f8k">Mes Compétences !</h2> <div class="web svelte-1yi9f8k"><p class="svelte-1yi9f8k">WEB</p> <div class="skillsContainer svelte-1yi9f8k"><div class="skill svelte-1yi9f8k"><i class="fa-brands fa-html5 svelte-1yi9f8k"></i> <span class="svelte-1yi9f8k">HTML</span></div> <div class="skill svelte-1yi9f8k"><i class="fa-brands fa-sass svelte-1yi9f8k"></i> <span class="svelte-1yi9f8k">SCSS</span></div> <div class="skill svelte-1yi9f8k"><i class="fa-brands fa-square-js svelte-1yi9f8k"></i> <span class="svelte-1yi9f8k">JAVASCRIPT</span></div> <div class="skill svelte-1yi9f8k"><i class="fa-brands fa-php svelte-1yi9f8k"></i> <span class="svelte-1yi9f8k">PHP</span></div></div></div> <div class="mobile svelte-1yi9f8k"><p class="svelte-1yi9f8k">MOBILE</p> <div class="skillsContainer svelte-1yi9f8k"><div class="skill svelte-1yi9f8k"><i class="fa-brands fa-flutter svelte-1yi9f8k"></i> <span class="svelte-1yi9f8k">FLUTTER</span></div></div></div></section>`;
}
function _page($$payload) {
  Min_elements($$payload);
  $$payload.out += `<!----> `;
  Homepage($$payload);
  $$payload.out += `<!----> `;
  Section_about($$payload);
  $$payload.out += `<!----> `;
  Section_projects($$payload);
  $$payload.out += `<!----> `;
  Section_skills($$payload);
  $$payload.out += `<!----> `;
  Section_contact($$payload);
  $$payload.out += `<!---->`;
}
export {
  _page as default
};
