import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.Dg5_YofD.js","_app/immutable/chunks/disclose-version.Cvdwx_D7.js","_app/immutable/chunks/runtime.C5lH2f4f.js","_app/immutable/chunks/render.CkygGTKt.js","_app/immutable/chunks/lifecycle.CEFX69Zg.js","_app/immutable/chunks/index-client.CA_UrKhf.js","_app/immutable/chunks/attributes.DDEQ3KzV.js","_app/immutable/chunks/class.Bvena8yX.js","_app/immutable/chunks/proxy.CEW60m8I.js"];
export const stylesheets = ["_app/immutable/assets/2.Bl2QzhfC.css"];
export const fonts = [];
