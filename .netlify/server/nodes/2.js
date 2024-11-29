import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.DCtXIr-N.js","_app/immutable/chunks/disclose-version.BAkT7b9N.js","_app/immutable/chunks/runtime.BTKzIfWJ.js","_app/immutable/chunks/render.BDtaNQUw.js","_app/immutable/chunks/lifecycle.LN_ObgXi.js","_app/immutable/chunks/index-client.D64eSVxZ.js","_app/immutable/chunks/attributes.BdULIJE2.js","_app/immutable/chunks/proxy.pV5-LRDJ.js"];
export const stylesheets = ["_app/immutable/assets/2.CurIPMJX.css"];
export const fonts = [];
