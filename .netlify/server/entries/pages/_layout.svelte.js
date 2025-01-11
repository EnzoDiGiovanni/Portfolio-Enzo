import { E as pop, B as push, F as attr, G as stringify, I as slot } from "../../chunks/index.js";
import "../../chunks/client.js";
function Footer($$payload) {
  $$payload.out += `<footer class="svelte-1ax8h94"><div class="footer-container svelte-1ax8h94"><div class="footer-section svelte-1ax8h94"><p class="svelte-1ax8h94">Enzo Di Giovanni - Développeur Web</p> <p class="svelte-1ax8h94"><a href="mailto:digiovannienzo1@gmail.com" class="svelte-1ax8h94">digiovannienzo1@gmail.com</a></p></div></div> <p class="footer-credits svelte-1ax8h94">© 2024 Enzo Di Giovanni. Tous droits réservés.</p></footer>`;
}
function Dark_mode_toggle($$payload, $$props) {
  push();
  $$payload.out += `<button id="theme-switch" aria-label="button" class="svelte-1mh0sj4">`;
  {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<i class="fa-solid fa-moon svelte-1mh0sj4"></i>`;
  }
  $$payload.out += `<!--]--></button>`;
  pop();
}
function Header($$payload, $$props) {
  push();
  $$payload.out += `<header id="header"${attr("class", `svelte-1nmb3d ${stringify([""].filter(Boolean).join(" "))}`)}><nav class="container svelte-1nmb3d"><a href="/"><img src="/images/logo_edg.svg" class="logo svelte-1nmb3d" alt="logo"></a> <div class="wrapper interactif svelte-1nmb3d">`;
  Dark_mode_toggle($$payload);
  $$payload.out += `<!----> <button class="burger-menu svelte-1nmb3d" aria-label="Toggle navigation"><i class="fa-regular fa-compass svelte-1nmb3d"></i></button></div> <div${attr("class", `side_nav ${stringify("")} svelte-1nmb3d`)}><ul class="nav_links svelte-1nmb3d"><li${attr("class", `svelte-1nmb3d ${stringify([""].filter(Boolean).join(" "))}`)}><a href="#projects" class="svelte-1nmb3d">PROJETS <i class="fa-solid fa-arrow-right svelte-1nmb3d"></i></a></li> <li${attr("class", `svelte-1nmb3d ${stringify([""].filter(Boolean).join(" "))}`)}><a href="#competence" class="svelte-1nmb3d">COMPÉTENCES <i class="fa-solid fa-arrow-right svelte-1nmb3d"></i></a></li> <li${attr("class", `svelte-1nmb3d ${stringify([""].filter(Boolean).join(" "))}`)}><a href="#contact" class="svelte-1nmb3d">ME CONTACTER <i class="fa-solid fa-arrow-right svelte-1nmb3d"></i></a></li></ul></div></nav></header>`;
  pop();
}
function _layout($$payload, $$props) {
  push();
  Header($$payload);
  $$payload.out += `<!----> <main><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></main> `;
  Footer($$payload);
  $$payload.out += `<!---->`;
  pop();
}
export {
  _layout as default
};
