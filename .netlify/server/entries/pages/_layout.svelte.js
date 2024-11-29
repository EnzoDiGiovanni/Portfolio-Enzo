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
  $$payload.out += `<header class="svelte-1zcpn"><nav class="container svelte-1zcpn"><a href="/"><img src="/images/logo_edg.svg" class="logo svelte-1zcpn" alt="logo"></a> <div class="wrapper svelte-1zcpn">`;
  Dark_mode_toggle($$payload);
  $$payload.out += `<!----> <button class="burger-menu svelte-1zcpn" aria-label="Toggle navigation"><i class="fa-regular fa-compass svelte-1zcpn"></i></button></div> <div${attr("class", `side_nav svelte-1zcpn ${stringify([""].filter(Boolean).join(" "))}`)}><ul class="nav_links svelte-1zcpn"><li${attr("class", `svelte-1zcpn ${stringify([""].filter(Boolean).join(" "))}`)}><a href="#projects" class="svelte-1zcpn">PROJETS <i class="fa-solid fa-arrow-right svelte-1zcpn"></i></a></li> <li${attr("class", `svelte-1zcpn ${stringify([""].filter(Boolean).join(" "))}`)}><a href="#competence" class="svelte-1zcpn">COMPÉTENCES <i class="fa-solid fa-arrow-right svelte-1zcpn"></i></a></li> <li${attr("class", `svelte-1zcpn ${stringify([""].filter(Boolean).join(" "))}`)}><a href="#contact" class="svelte-1zcpn">ME CONTACTER <i class="fa-solid fa-arrow-right svelte-1zcpn"></i></a></li></ul></div></nav></header>`;
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
