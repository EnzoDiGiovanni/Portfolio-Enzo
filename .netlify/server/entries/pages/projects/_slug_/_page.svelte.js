import { O as ensure_array_like, K as escape_html, F as attr, P as bind_props } from "../../../../chunks/index.js";
function _page($$payload, $$props) {
  let data = $$props["data"];
  const { project } = data;
  $$payload.out += `<section class="svelte-z839dm">`;
  if (project) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(project.technos);
    const each_array_1 = ensure_array_like(project.tags);
    $$payload.out += `<div class="project__title svelte-z839dm"><h3 class="svelte-z839dm">${escape_html(project.title)}</h3> <a${attr("href", project.link)} target="_blank" rel="noopener noreferrer" class="svelte-z839dm">Voir le projet</a></div> <div class="line svelte-z839dm"></div> <div class="description svelte-z839dm"><p class="svelte-z839dm">${escape_html(project.desc)}</p> <a${attr("href", project.gitSrc)} target="_blank" class="svelte-z839dm">Voir le GitHub</a> <p class="svelte-z839dm">${escape_html(project.date)}</p></div> <div class="wrapper svelte-z839dm"><div class="imgProject svelte-z839dm"><img${attr("src", project.imgSrc)} alt="" class="svelte-z839dm"></div> <ul class="technos svelte-z839dm"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let techno = each_array[$$index];
      $$payload.out += `<li class="svelte-z839dm">${escape_html(techno)}</li>`;
    }
    $$payload.out += `<!--]--></ul></div> <div class="wrapper-description svelte-z839dm"><div class="projectType svelte-z839dm"><ul class="svelte-z839dm"><!--[-->`;
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let tag = each_array_1[$$index_1];
      $$payload.out += `<li class="svelte-z839dm">${escape_html(tag)}</li>`;
    }
    $$payload.out += `<!--]--></ul></div> <div class="description svelte-z839dm"><p class="svelte-z839dm">${escape_html(project.about)}</p></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<p class="svelte-z839dm">Projet non trouvé</p>`;
  }
  $$payload.out += `<!--]--></section>`;
  bind_props($$props, { data });
}
export {
  _page as default
};
