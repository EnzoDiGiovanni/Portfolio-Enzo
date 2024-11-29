import * as server from '../entries/pages/projects/_slug_/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/projects/[slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/3.DLAQgq3m.js","_app/immutable/chunks/disclose-version.BAkT7b9N.js","_app/immutable/chunks/runtime.BTKzIfWJ.js","_app/immutable/chunks/render.BDtaNQUw.js","_app/immutable/chunks/if.C3rJUaKc.js","_app/immutable/chunks/attributes.BdULIJE2.js","_app/immutable/chunks/props.B6lFUtoj.js","_app/immutable/chunks/proxy.pV5-LRDJ.js","_app/immutable/chunks/store.DVVLG3vt.js"];
export const stylesheets = ["_app/immutable/assets/3.DYTykhF7.css"];
export const fonts = [];
