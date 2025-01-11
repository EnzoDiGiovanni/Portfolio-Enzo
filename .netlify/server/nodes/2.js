import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.Ce3uD41p.js","_app/immutable/chunks/disclose-version.BxytZ1Ma.js","_app/immutable/chunks/runtime.Cyz8FRI6.js","_app/immutable/chunks/render.cyL3SmsA.js","_app/immutable/chunks/lifecycle.CqEfYXdZ.js","_app/immutable/chunks/index-client.BI897J1K.js","_app/immutable/chunks/attributes.dKXk_mLs.js","_app/immutable/chunks/class.CxeQOQpV.js","_app/immutable/chunks/proxy.W9PzAEZZ.js"];
export const stylesheets = ["_app/immutable/assets/2.BWsV0GRs.css"];
export const fonts = [];
