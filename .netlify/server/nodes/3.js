import * as server from '../entries/pages/projects/_slug_/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/projects/[slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/3.Bbf09QOO.js","_app/immutable/chunks/disclose-version.Cvdwx_D7.js","_app/immutable/chunks/runtime.C5lH2f4f.js","_app/immutable/chunks/render.CkygGTKt.js","_app/immutable/chunks/if.D1uc_kSA.js","_app/immutable/chunks/attributes.DDEQ3KzV.js","_app/immutable/chunks/props.CUoA3DGL.js","_app/immutable/chunks/proxy.CEW60m8I.js","_app/immutable/chunks/store.dIO1iWD5.js"];
export const stylesheets = ["_app/immutable/assets/3.BwsmsZh0.css"];
export const fonts = [];
