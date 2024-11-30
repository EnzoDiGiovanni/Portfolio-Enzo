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
  $$payload.out += `<header class="svelte-c3kmkz"><nav class="container svelte-c3kmkz"><a href="/"><img src="/images/logo_edg.svg" class="logo svelte-c3kmkz" alt="logo"></a> <div class="wrapper svelte-c3kmkz">`;
  Dark_mode_toggle($$payload);
  $$payload.out += `<!----> <button class="burger-menu svelte-c3kmkz" aria-label="Toggle navigation"><i class="fa-regular fa-compass svelte-c3kmkz"></i></button></div> <div${attr("class", `side_nav svelte-c3kmkz ${stringify([""].filter(Boolean).join(" "))}`)}><ul class="nav_links svelte-c3kmkz"><li${attr("class", `svelte-c3kmkz ${stringify([""].filter(Boolean).join(" "))}`)}><a href="#projects" class="svelte-c3kmkz">PROJETS <i class="fa-solid fa-arrow-right svelte-c3kmkz"></i></a></li> <li${attr("class", `svelte-c3kmkz ${stringify([""].filter(Boolean).join(" "))}`)}><a href="#competence" class="svelte-c3kmkz">COMPÉTENCES <i class="fa-solid fa-arrow-right svelte-c3kmkz"></i></a></li> <li${attr("class", `svelte-c3kmkz ${stringify([""].filter(Boolean).join(" "))}`)}><a href="#contact" class="svelte-c3kmkz">ME CONTACTER <i class="fa-solid fa-arrow-right svelte-c3kmkz"></i></a></li></ul></div></nav></header>`;
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
