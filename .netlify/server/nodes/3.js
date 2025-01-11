import * as server from '../entries/pages/projects/_slug_/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/projects/[slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/3.TdjK7Xat.js","_app/immutable/chunks/disclose-version.BxytZ1Ma.js","_app/immutable/chunks/runtime.Cyz8FRI6.js","_app/immutable/chunks/render.cyL3SmsA.js","_app/immutable/chunks/if.CSrkskB7.js","_app/immutable/chunks/attributes.dKXk_mLs.js","_app/immutable/chunks/props.BIGaE-L6.js","_app/immutable/chunks/proxy.W9PzAEZZ.js","_app/immutable/chunks/store.Dbg3CWJg.js"];
export const stylesheets = ["_app/immutable/assets/3.BfAp0HZH.css"];
export const fonts = [];
