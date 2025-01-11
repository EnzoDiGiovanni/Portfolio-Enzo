import { O as ensure_array_like, K as escape_html, F as attr, P as bind_props } from "../../../../chunks/index.js";
function _page($$payload, $$props) {
  let data = $$props["data"];
  const { project } = data;
  $$payload.out += `<section class="svelte-bvf6xz">`;
  if (project) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(project.technos);
    const each_array_1 = ensure_array_like(project.tags);
    $$payload.out += `<div class="project__title svelte-bvf6xz"><h3 class="svelte-bvf6xz">${escape_html(project.title)}</h3> <div class="project__title-button svelte-bvf6xz"><a${attr("href", project.gitSrc)} target="_blank" rel="noopener noreferrer" class="svelte-bvf6xz">Voir le projet</a> <a${attr("href", project.code)} target="_blank" rel="noopener noreferrer" class="svelte-bvf6xz">Voir le code</a> <a href="/#projects" rel="noopener noreferrer" class="svelte-bvf6xz">Retour aux projets</a></div></div> <div class="line svelte-bvf6xz"></div> <div class="description svelte-bvf6xz"><p class="svelte-bvf6xz">${escape_html(project.desc)}</p> <p class="svelte-bvf6xz">${escape_html(project.date)}</p></div> <div class="wrapper svelte-bvf6xz"><div class="imgProject svelte-bvf6xz"><img${attr("src", project.imgSrc)} alt="" class="svelte-bvf6xz"></div> <ul class="technos svelte-bvf6xz"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let techno = each_array[$$index];
      $$payload.out += `<li class="svelte-bvf6xz">${escape_html(techno)}</li>`;
    }
    $$payload.out += `<!--]--></ul></div> <div class="wrapper-description svelte-bvf6xz"><div class="projectType svelte-bvf6xz"><div class="description svelte-bvf6xz"><p class="svelte-bvf6xz">${escape_html(project.about)}</p></div> <ul class="svelte-bvf6xz"><!--[-->`;
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let tag = each_array_1[$$index_1];
      $$payload.out += `<li class="svelte-bvf6xz">| ${escape_html(tag)} |</li>`;
    }
    $$payload.out += `<!--]--></ul></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<p class="svelte-bvf6xz">Projet non trouvé</p>`;
  }
  $$payload.out += `<!--]--></section>`;
  bind_props($$props, { data });
}
export {
  _page as default
};
