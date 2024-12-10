import { E as pop, B as push, F as attr, G as stringify, I as slot } from "../../chunks/index.js";
import "../../chunks/client.js";
function Footer($$payload) {
  $$payload.out += `<footer></footer>`;
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
function Header($$payload) {
  $$payload.out += `<header class="svelte-h6ka1w"><nav class="container svelte-h6ka1w"><a href="/"><img src="/images/logo_edg.svg" class="logo interactif svelte-h6ka1w" alt="logo"></a> <div class="wrapper interactif svelte-h6ka1w">`;
  Dark_mode_toggle($$payload);
  $$payload.out += `<!----> <button class="burger-menu svelte-h6ka1w" aria-label="Toggle navigation"><i class="fa-regular fa-compass svelte-h6ka1w"></i></button></div> <div${attr("class", `side_nav svelte-h6ka1w ${stringify([""].filter(Boolean).join(" "))}`)}><ul class="nav_links svelte-h6ka1w"><li${attr("class", `svelte-h6ka1w ${stringify([""].filter(Boolean).join(" "))}`)}><a href="#projects" class="svelte-h6ka1w">PROJETS <i class="fa-solid fa-arrow-right svelte-h6ka1w"></i></a></li> <li${attr("class", `svelte-h6ka1w ${stringify([""].filter(Boolean).join(" "))}`)}><a href="#competence" class="svelte-h6ka1w">COMPÉTENCES <i class="fa-solid fa-arrow-right svelte-h6ka1w"></i></a></li> <li${attr("class", `svelte-h6ka1w ${stringify([""].filter(Boolean).join(" "))}`)}><a href="#contact" class="svelte-h6ka1w">ME CONTACTER <i class="fa-solid fa-arrow-right svelte-h6ka1w"></i></a></li></ul></div></nav></header>`;
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
