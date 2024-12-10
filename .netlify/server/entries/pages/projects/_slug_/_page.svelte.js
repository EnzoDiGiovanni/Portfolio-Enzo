import { O as ensure_array_like, K as escape_html, F as attr, P as bind_props } from "../../../../chunks/index.js";
function _page($$payload, $$props) {
  let data = $$props["data"];
  const { project } = data;
  $$payload.out += `<section class="svelte-52tmj6">`;
  if (project) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(project.technos);
    const each_array_1 = ensure_array_like(project.tags);
    $$payload.out += `<div class="project__title svelte-52tmj6"><h3 class="svelte-52tmj6">${escape_html(project.title)}</h3> <a${attr("href", project.gitSrc)} target="_blank" rel="noopener noreferrer" class="svelte-52tmj6">Voir le projet</a> <a href="/#projects" rel="noopener noreferrer" class="svelte-52tmj6">Retour aux projets</a></div> <div class="line svelte-52tmj6"></div> <div class="description svelte-52tmj6"><p class="svelte-52tmj6">${escape_html(project.desc)}</p> <p class="svelte-52tmj6">${escape_html(project.date)}</p></div> <div class="wrapper svelte-52tmj6"><div class="imgProject svelte-52tmj6"><img${attr("src", project.imgSrc)} alt="" class="svelte-52tmj6"></div> <ul class="technos svelte-52tmj6"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let techno = each_array[$$index];
      $$payload.out += `<li class="svelte-52tmj6">${escape_html(techno)}</li>`;
    }
    $$payload.out += `<!--]--></ul></div> <div class="wrapper-description svelte-52tmj6"><div class="projectType svelte-52tmj6"><div class="description svelte-52tmj6"><p class="svelte-52tmj6">${escape_html(project.about)}</p></div> <ul class="svelte-52tmj6"><!--[-->`;
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let tag = each_array_1[$$index_1];
      $$payload.out += `<li class="svelte-52tmj6">| ${escape_html(tag)} |</li>`;
    }
    $$payload.out += `<!--]--></ul></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<p class="svelte-52tmj6">Projet non trouvé</p>`;
  }
  $$payload.out += `<!--]--></section>`;
  bind_props($$props, { data });
}
export {
  _page as default
};
